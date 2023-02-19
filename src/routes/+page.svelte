<script lang="ts">
	import type { PageServerData } from "./$types";
	import { page } from "$app/stores";
	import { modalStore, type ModalInit } from "$components/modal";
	import ModalAddRecord from "./ModalAddRecord.svelte";

	const modalAddRecord: ModalInit = {
		title: "Add record",
		slot: ModalAddRecord
	};

	export let data: PageServerData;

	function copyToClipboard(event: Event) {
		if (event.target instanceof HTMLElement) {
			navigator.clipboard.writeText(event.target.dataset.clipboard ?? "");
		}
	}
</script>

<div class="flex-grow p-4">
	<div class="mb-8 flex justify-end gap-6">
		<button
			type="button"
			on:click={() => modalStore.trigger(modalAddRecord)}
			class="inline-block rounded bg-gray-800 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg">
			Add
		</button>

		<form action="/logout" method="post">
			<button
				type="submit"
				class="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
				Log out
			</button>
		</form>
	</div>
	<div class="w-full overflow-x-auto">
		<table class="min-w-full">
			<thead class="border-b bg-white">
				<tr>
					<th scope="col" class="px-6 py-4 text-sm uppercase text-gray-900"> id </th>
					<th scope="col" class="px-6 py-4 text-sm uppercase text-gray-900"> url </th>
					<th scope="col" class="px-6 py-4 text-sm uppercase text-gray-900"> actions </th>
				</tr>
			</thead>
			<tbody>
				{#each data.records ?? [] as record}
					<tr
						class="border-b bg-white transition duration-300 ease-in-out hover:bg-gray-100">
						{#each Object.values(record) as values}
							<td class="whitespace-nowrap px-6 py-4 text-gray-900">
								{values}
							</td>
						{/each}

						<td>
							<form
								action="?/deleteRecord&id={record.id}"
								method="post"
								class="contents">
								<button type="submit" class="px-4 py-1.5 hover:text-red-600 ">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="1em"
										height="1em"
										viewBox="0 0 24 24">
										<path
											fill="currentColor"
											d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6v12Z" />
									</svg>
								</button>
							</form>

							<button
								type="button"
								data-clipboard="{$page.url.origin}/link/{record.id}"
								on:click={copyToClipboard}
								class="inline-block rounded bg-gray-300 px-3 py-1.5 text-sm font-medium uppercase text-gray-800 shadow transition duration-150 ease-in-out hover:bg-gray-400 focus:bg-gray-400 focus:outline-none focus:ring-0 active:bg-gray-400">
								Copy
							</button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
