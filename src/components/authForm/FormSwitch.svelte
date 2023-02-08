<script lang="ts">
	export let description = "";
	export let href = "";
	export let label = "";
</script>

<div class="mt-4 text-center text-gray-800">
	{description}
	<a
		{href}
		class="text-blue-600 transition duration-200 ease-in-out hover:text-blue-700 hover:underline focus:text-blue-700">
		{label}
	</a>
</div>
