import type { PageServerLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";
import { isAfter } from "date-fns";
import { handlePocketBaseQuery } from "$lib/pocketbase";

export const load = (async ({ locals, params }) => {
	const { data, error: queryError } = await handlePocketBaseQuery(
		locals.pb.collection("links").getOne(params.slug)
	);

	if (queryError) {
		throw error(500, { message: queryError.message });
	}

	if (!data) {
		throw error(404, { message: "Not found!" });
	}

	if (data.expiry && isAfter(new Date(), new Date(data.expiry))) {
		throw error(403, { message: "Link expired!" });
	}

	throw redirect(303, data.url);
}) satisfies PageServerLoad;
