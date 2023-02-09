<script lang="ts">
	import { fade, fly } from "svelte/transition";
	import { modalStore } from "./modalStore";
	function onBackdropInteraction(event: MouseEvent | TouchEvent) {
		if (event.target instanceof Element && event.target.role === "dialog") {
			modalStore.close();
		}
	}
	function onKeyboardEscape(event: KeyboardEvent) {
		if (event.key === "Escape") {
			modalStore.close();
		}
	}
</script>

<svelte:window on:keydown={onKeyboardEscape} />

{#each $modalStore as { id, title, slot }}
	<div
		class="fixed top-0 left-0 flex h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-600 bg-opacity-50"
		tabindex="-1"
		aria-modal="true"
		role="dialog"
		{id}
		on:mousedown={onBackdropInteraction}
		on:touchstart={onBackdropInteraction}
		transition:fade>
		<div
			class="flex w-full max-w-lg flex-col rounded-md bg-white shadow-lg"
			transition:fly={{ opacity: 0, y: 50 }}>
			<div class="flex flex-shrink-0 items-center justify-between rounded-t-md p-4">
				<span class="text-xl font-medium leading-normal text-gray-800">{title}</span>
			</div>
			<div class="rounded-b-md">
				<svelte:component this={slot} />
			</div>
		</div>
	</div>
{/each}
