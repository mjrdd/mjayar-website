import type { PageServerLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";
import { handlePocketbaseQuery } from "$lib/pocketbase";

export const load = (async ({ locals, params }) => {
	const COLLECTION_NAME = "links";
	const collection = locals.pb.collection(COLLECTION_NAME);

	const { data, error: queryError } = await handlePocketbaseQuery(
		collection.getFirstListItem(`slug="${params.slug}"`)
	);
}) satisfies PageServerLoad;
