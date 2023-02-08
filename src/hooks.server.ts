import type { Handle } from "@sveltejs/kit";
import Pocketbase, { Admin } from "pocketbase";

export const handle = (async ({ event, resolve }) => {
	event.locals.pb = new Pocketbase("http://127.0.0.1/8090");
	event.locals.pb.authStore.loadFromCookie(event.request.headers.get("cookie") || "");

	try {
		if (!event.locals.pb.authStore.isValid) {
			throw 403;
		}

		event.locals.pb.authStore.model instanceof Admin
			? event.locals.pb.admins.authRefresh()
			: event.locals.pb.collection("users").authRefresh();
	} catch {
		event.locals.pb.authStore.clear();
	}

	const response = await resolve(event);

	response.headers.append("set-cookie", event.locals.pb.authStore.exportToCookie());

	return response;
}) satisfies Handle;
