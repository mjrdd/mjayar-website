import type { Actions, PageServerLoad } from "./$types";
import { fail, redirect } from "@sveltejs/kit";
import { map, pick } from "lodash-es";
import { handlePocketBaseQuery } from "$lib/pocketbase";

export const load = (async ({ locals }) => {
	const model = locals.pb.authStore.model;

	if (!model) {
		throw redirect(303, "/login");
	}

	const collection = locals.pb.collection("links");

	const { data } = await handlePocketBaseQuery(collection.getList(1, 10));

	if (data) {
		return {
			records: map(data.items, (items) => pick(items, ["id", "url"]))
		};
	}
}) satisfies PageServerLoad;

export const actions = {
	addRecord: async ({ locals, request }) => {
		const model = locals.pb.authStore.model;

		if (!model) {
			throw fail(403);
		}

		const data = Object.fromEntries(await request.formData()) as Record<string, string>;
		const collection = locals.pb.collection("links");

		const { error } = await handlePocketBaseQuery(
			collection.create({
				id: data.slug,
				url: data.url,
				expiry: data.expiry,
				author: model.id
			})
		);

		console.log(JSON.stringify(error));

		if (error) {
			return fail(400);
		}
	},

	deleteRecord: async ({ locals, url }) => {
		const id = url.searchParams.get("id");
		const collection = locals.pb.collection("links");

		if (!id) {
			return fail(400);
		}

		await handlePocketBaseQuery(collection.delete(id));
	}
} satisfies Actions;
