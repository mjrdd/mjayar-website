<script lang="ts">
	export let title = "";
</script>

<div class="flex flex-grow items-center justify-center bg-gray-100">
	<main class="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
		<h1 class="mb-6 text-center text-2xl">{title}</h1>
		<slot />
	</main>
</div>
