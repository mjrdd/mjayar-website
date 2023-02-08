<script lang="ts">
	export let id = "";
	export let type = "text";
	export let name = "";
	export let label = "";
	export let value = "";
</script>

<div class="mb-4">
	<label for={id} class="mb-2 text-gray-700">{label}</label>

	<input
		{type}
		{id}
		{name}
		{value}
		class="m-0 block w-full rounded border border-gray-300 bg-white px-3 py-1.5 text-base font-normal text-gray-700 focus:border-blue-600 focus:outline-none" />
</div>
