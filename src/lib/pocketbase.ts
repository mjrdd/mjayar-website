import { ClientResponseError } from "pocketbase";

export async function handlePocketbaseQuery<T>(query: T): Promise<{
	data?: Awaited<T>;
	error?: ClientResponseError;
}> {
	try {
		const data = await query;
		return { data };
	} catch (err) {
		if (err instanceof ClientResponseError) {
			return { error: err };
		}

		return {};
	}
}