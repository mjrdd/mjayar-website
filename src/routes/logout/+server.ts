import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST = (async ({ locals }) => {
	locals.pb.authStore.clear();

	throw redirect(303, "/login");
}) satisfies RequestHandler;
