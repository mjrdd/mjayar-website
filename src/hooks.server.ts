import type { Handle } from "@sveltejs/kit";
import PocketBase, { Admin } from "pocketbase";

export const handle = (async ({ event, resolve }) => {
	event.locals.pb = new PocketBase("http://127.0.0.1:8090");
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

	try {
		if (!event.locals.pb.authStore.isValid) {
			throw 403;
		}

		event.locals.pb.authStore.model instanceof Admin
			? await event.locals.pb.admins.authRefresh()
			: await event.locals.pb.collection("users").authRefresh();
	} catch (err) {
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	response.headers.append("Set-Cookie", event.locals.pb.authStore.exportToCookie());

	return response;
}) satisfies Handle;
