<script lang="ts">
	import { FormWrapper, FormSwitch, InputField, SubmitButton } from "$components/authForm";
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<svelte:head>
	<title>Sign up</title>
</svelte:head>

<FormWrapper title="Sign up">
	<form method="POST">
		<fieldset>
			<div class="grid grid-cols-2 gap-4">
				<InputField
					type="text"
					id="authFirstName"
					name="firstname"
					label="First Name"
					value={form?.firstname ?? ""} />
				<InputField
					type="text"
					id="authLastName"
					name="lastname"
					label="Last Name"
					value={form?.lastname ?? ""} />
			</div>
			<InputField
				type="email"
				id="authEmail"
				name="email"
				label="Email address"
				value={form?.email ?? ""} />
			<InputField type="password" id="authPassword" name="password" label="Password" />
			<InputField
				type="password"
				id="authPasswordConfirm"
				name="passwordConfirm"
				label="Confirm Password" />
			<SubmitButton label="Sign up" />
		</fieldset>
		<FormSwitch description="Already have an account?" label="Log in" href="/login" />
	</form>
</FormWrapper>
