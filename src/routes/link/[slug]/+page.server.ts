import type { PageServerLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";
import { handlePocketBaseQuery } from "$lib/pocketbase";

export const load = (async ({ locals, params }) => {
	const COLLECTION_NAME = "links";
	const collection = locals.pb.collection(COLLECTION_NAME);

	const { data, error: queryError } = await handlePocketBaseQuery(collection.getOne(params.slug));

	console.log(queryError);

	if (data) {
		throw redirect(303, data.url);
	}
}) satisfies PageServerLoad;
