<form method="POST" action="?/addRecord" class="contents">
	<div class="p-4">
		<div class="mb-4">
			<label for="inputSlug" class="mb-2 inline-block text-gray-700">Slug</label>
			<input
				type="text"
				name="slug"
				id="inputSlug"
				class="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-700 focus:bg-white focus:text-gray-700 focus:outline-none" />
		</div>
		<div class="mb-4">
			<label for="inputUrl" class="mb-2 inline-block text-gray-700">URL</label>
			<input
				type="text"
				name="url"
				id="inputUrl"
				required
				class="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-700 focus:bg-white focus:text-gray-700 focus:outline-none" />
		</div>
		<div class="mb-4">
			<label for="inputExpiry" class="mb-2 inline-block text-gray-700">Expiry</label>
			<input
				type="date"
				name="expiry"
				id="inputExpiry"
				required
				class="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-700 focus:bg-white focus:text-gray-700 focus:outline-none" />
		</div>
		<button
			type="submit"
			class="inline-block rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
			Save
		</button>
	</div>
</form>
