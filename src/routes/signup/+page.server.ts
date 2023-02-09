import type { Actions, PageServerLoad } from "./$types";
import { z } from "zod";
import { fail, redirect } from "@sveltejs/kit";
import { handlePocketBaseQuery } from "$lib/pocketbase";

export const load = (async ({ locals }) => {
	if (locals.pb.authStore.model) {
		throw redirect(303, "/");
	}
}) satisfies PageServerLoad;

const bodySchema = z
	.object({
		name: z.string(),
		email: z.string().email(),
		password: z.string(),
		passwordConfirm: z.string()
	})
	.superRefine(({ password, passwordConfirm }, ctx) => {
		if (passwordConfirm !== password) {
			ctx.addIssue({
				code: "custom",
				message: "The passwords did not match",
				path: ["passwordConfirm"]
			});
		}
	});

export const actions = {
	default: async ({ locals, request }) => {
		const collection = locals.pb.collection("users");
		const body = Object.fromEntries(await request.formData()) as Record<string, string>;
		const validation = await bodySchema.safeParseAsync({
			email: body.email,
			password: body.password,
			passwordConfirm: body.passwordConfirm,
			name: `${body.lastname}, ${body.firstname}`
		});

		if (!validation.success) {
			return fail(400, {
				email: body.email,
				firstname: body.firstname,
				lastname: body.lastname,
				...validation.error.flatten()
			});
		}

		const { data } = await handlePocketBaseQuery(collection.create(validation.data));

		if (data) {
			throw redirect(303, "/login");
		}
	}
} satisfies Actions;
