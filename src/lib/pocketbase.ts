import { ClientResponseError } from "pocketbase";

export async function handlePocketBaseQuery<T>(query: T): Promise<{
	data?: Awaited<T>;
	error?: ClientResponseError;
}> {
	try {
		const data = await Promise.resolve(query);
		return { data };
	} catch (err) {
		if (err instanceof ClientResponseError) {
			return { error: err };
		}

		return {};
	}
}
