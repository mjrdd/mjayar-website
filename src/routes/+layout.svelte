<script lang="ts">
	import "../app.css";
	import { ModalWrapper } from "$components/modal";
</script>

<div class="flex min-h-screen flex-col">
	<slot />
	<ModalWrapper />
</div>
