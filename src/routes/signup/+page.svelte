<script lang="ts">
	import { FormWrapper, FormSwitch, InputField, SubmitButton } from "$components/authForm";
	import type { ActionData } from "./$types";

	export let form: ActionData;
</script>

<FormWrapper title="Sign up">
	<form method="POST">
		<fieldset>
			<InputField
				type="email"
				id="authEmail"
				name="email"
				label="Email address"
				value={form?.email} />
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
