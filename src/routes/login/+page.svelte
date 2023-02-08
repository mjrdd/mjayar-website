<script lang="ts">
	import type { ActionData } from "./$types";
	import { FormWrapper, InputField, SubmitButton, FormSwitch } from "$components/authForm";

	export let form: ActionData;
</script>

<FormWrapper title="Log in">
	<form method="POST">
		<fieldset>
			<InputField
				type="email"
				id="authEmail"
				name="email"
				label="Email address"
				value={form?.email} />
			<InputField type="password" id="authPassword" name="password" label="Password" />
			<SubmitButton label="Log in" />
		</fieldset>
		<FormSwitch description="Don't have an account" label="Sign up" href="/signup" />
	</form>
</FormWrapper>
