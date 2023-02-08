import type { Actions } from "./$types";
import { z } from "zod";
import { fail, redirect } from "@sveltejs/kit";
import { handlePocketBaseQuery } from "$lib/pocketbase";

const bodySchema = z.object({
	email: z.string().email(),
	password: z.string()
});

export const actions: Actions = {
	default: async ({ locals, request }) => {
		const collection = locals.pb.collection("users");
		const body = Object.fromEntries(await request.formData()) as z.infer<typeof bodySchema>;
		const validation = await bodySchema.safeParseAsync(body);

		if (!validation.success) {
			return fail(400, { email: body.email, ...validation.error.flatten() });
		}

		const { data } = await handlePocketBaseQuery(
			collection.authWithPassword(body.email, body.password)
		);

		if (data) {
			throw redirect(303, "/");
		}
	}
};
