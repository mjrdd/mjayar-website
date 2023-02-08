<script lang="ts">
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<div class="flex flex-grow items-center justify-center bg-gray-100">
	<div class="w-full max-w-sm rounded-md bg-white p-8 shadow">
		<form method="POST" class="contents">
			<fieldset>
				<div class="mb-6">
					<label for="formInputEmail" class="mb-2 inline-block text-gray-700">
						Email address
					</label>
					<input
						type="email"
						name="email"
						id="formInputEmail"
						value={form?.email ?? ""}
						class="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-700 focus:bg-white focus:text-gray-700 focus:outline-none" />
				</div>

				<div class="mb-6">
					<label for="formInputPassword" class="mb-2 inline-block text-gray-700">
						Password
					</label>
					<input
						type="password"
						name="password"
						id="formInputPassword"
						class="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-700 focus:bg-white focus:text-gray-700 focus:outline-none" />
				</div>

				<div class="mb-6">
					<label for="formInputPasswordConfirm" class="mb-2 inline-block text-gray-700">
						Confirm Password
					</label>
					<input
						type="password"
						name="passwordConfirm"
						id="formInputPasswordConfirm"
						class="m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-700 focus:bg-white focus:text-gray-700 focus:outline-none" />
				</div>

				<button
					type="submit"
					class="w-full rounded bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
					Sign up
				</button>
			</fieldset>
		</form>
	</div>
</div>
