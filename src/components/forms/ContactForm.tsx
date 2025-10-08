import { createStore } from 'solid-js/store';
import { Switch, Match, Show } from 'solid-js';
import type { JSX } from 'solid-js';

import { submitContactForm } from '../../utils/contactForm';

import TextArea from '../inputs/TextArea';
import TextField from '../inputs/TextField';

export default function ContactForm() {
	const min = 1;
	const max = 6;

	const dieOne = Math.floor(Math.random() * (max - min + 1) + min);
	const dieTwo = Math.floor(Math.random() * (max - min + 1) + min);

	const [formStore, setFormStore] = createStore({
		success: false,
		error: false,
		loading: false,
		fields: {
			name: '',
			email: '',
			message: '',
			diceTotal: '',
		},
		captcha: {
			dieOne,
			dieTwo,
			total: dieOne + dieTwo,
		},
	});

	const handleChange = (event: Event) => {
		const { value, name } = event.target as HTMLInputElement;

		setFormStore((prev) => ({
			...prev,
			fields: {
				...prev.fields,
				[name]: value,
			},
		}));
	};

	const handleSubmit = (event: SubmitEvent) => {
		event.preventDefault();

		console.log(formStore);

		if (formStore.captcha.total.toString() === formStore.fields.diceTotal) {
			console.log('Correct');
		} else {
			console.log('Wrong!');
		}
	};

	return (
		<div
			id="contact-container"
			class="flex min-h-full flex-col items-center justify-center"
		>
			<Switch>
				<Match when={formStore.success}>
					<div class="flex min-h-96 flex-col items-center justify-center gap-6 p-10 intersect:motion-preset-fade intersect:motion-scale-in-50">
						<h2 class="text-center text-2xl font-thin">Success!</h2>
						<p class="text-center">
							Thanks for reaching out! Your message has been recieved.
						</p>
					</div>
				</Match>
				<Match when={!formStore.success}>
					<div class="flex w-full flex-col items-center justify-center gap-6 p-10 intersect:motion-preset-fade">
						<form
							id="contact-form"
							class="flex h-96 w-full flex-col gap-2 [&.*]:w-full"
							on:submit={(event) => {
								event.preventDefault();

								console.log(formStore);

								if (
									formStore.captcha.total.toString() ===
									formStore.fields.diceTotal
								) {
									console.log('Correct');
								} else {
									console.log('Wrong!');
								}
							}}
						>
							<TextField
								class="motion-delay-200 intersect:motion-preset-fade intersect:motion-preset-slide-up"
								label="Name"
								name="name"
								required
								onChange={handleChange}
							/>
							<TextField
								class="motion-delay-300 intersect:motion-preset-fade intersect:motion-preset-slide-up"
								label="Email"
								name="email"
								type="email"
								required
							/>
							<TextArea
								class="motion-delay-[400ms] intersect:motion-preset-fade intersect:motion-preset-slide-up"
								label="Message"
								name="message"
								required
							/>
							<div class="motion-delay-500 intersect:motion-preset-fade intersect:motion-preset-slide-up">
								<span>
									{formStore.captcha.dieOne} + {formStore.captcha.dieTwo}
								</span>
								<div class="flex gap-2"></div>
								<TextField
									label="What is the total shown on the dice?"
									name="dice-total"
									required
								/>
							</div>
							<button
								class="rounded-md border bg-white p-1 transition-colors duration-300 motion-delay-[600ms] intersect:motion-preset-fade intersect:motion-preset-slide-up hover:bg-ghall-green hover:text-white active:bg-ghall-green/90 disabled:bg-ghall-green disabled:text-white disabled:opacity-50"
								type="submit"
								disabled={formStore.loading}
							>
								{/*<Icon
							name="spinner-solid"
							class="motion-preset-spin mr-2 inline"
							x-show="loading"
						/>*/}
								{!formStore.loading ? 'Send' : 'Sending...'}
							</button>
							<Show when={formStore.error}>
								<span class="text-center font-medium text-red-500">
									Oh no! There was an problem.
								</span>
							</Show>
						</form>
					</div>
				</Match>
			</Switch>
		</div>
	);
}
