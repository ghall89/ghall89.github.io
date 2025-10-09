import { createStore } from 'solid-js/store';
import { Switch, Match, Show, For } from 'solid-js';

import { submitContactForm, type StoreType } from '../../utils/contactForm';

import TextArea from '../inputs/TextArea';
import TextField from '../inputs/TextField';

export default function ContactForm() {
	const min = 1;
	const max = 6;

	const dieOne = Math.floor(Math.random() * (max - min + 1) + min);
	const dieTwo = Math.floor(Math.random() * (max - min + 1) + min);

	const [formStore, setFormStore] = createStore<StoreType>({
		success: false,
		error: undefined,
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

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();

		const { dieOne, dieTwo } = formStore.captcha;

		if (dieOne + dieTwo === Number(formStore.fields.diceTotal)) {
			await submitContactForm(formStore, setFormStore);
		} else {
			setFormStore((prev) => ({
				...prev,
				error: 'Dice total is incorrect.',
			}));
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
							onSubmit={handleSubmit}
						>
							<TextField
								class="motion-delay-200 intersect:motion-preset-fade intersect:motion-preset-slide-up"
								label="Name"
								name="name"
								required
								onInput={handleChange}
							/>
							<TextField
								class="motion-delay-300 intersect:motion-preset-fade intersect:motion-preset-slide-up"
								label="Email"
								name="email"
								type="email"
								required
								onInput={handleChange}
							/>
							<TextArea
								class="motion-delay-[400ms] intersect:motion-preset-fade intersect:motion-preset-slide-up"
								label="Message"
								name="message"
								required
								onInput={handleChange}
							/>
							<div class="motion-delay-500 intersect:motion-preset-fade intersect:motion-preset-slide-up">
								<div class="flex gap-2">
									<For each={Object.values(formStore.captcha)}>
										{(value) => (
											<img
												src={`/dice/dice-${value}.svg`}
												alt={value.toString()}
												class="size-10"
											/>
										)}
									</For>
								</div>
								<TextField
									label="What is the total shown on the dice?"
									name="diceTotal"
									required
									onInput={handleChange}
								/>
							</div>
							<button
								class="rounded-md border bg-white p-1 transition-colors duration-300 motion-delay-[600ms] intersect:motion-preset-fade intersect:motion-preset-slide-up hover:bg-ghall-green hover:text-white active:bg-ghall-green/90 disabled:bg-ghall-green disabled:text-white disabled:opacity-50"
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
									{formStore.error}
								</span>
							</Show>
						</form>
					</div>
				</Match>
			</Switch>
		</div>
	);
}
