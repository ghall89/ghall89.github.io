import type { SetStoreFunction } from 'solid-js/store';

export interface StoreType {
	success: boolean;
	error?: string;
	loading: boolean;
	fields: {
		name: string;
		email: string;
		message: string;
		diceTotal: string;
	};
	captcha: {
		dieOne: number;
		dieTwo: number;
	};
}

export async function submitContactForm(
	store: StoreType,
	setStore: SetStoreFunction<StoreType>
) {
	const formData = store.fields;
	const url = import.meta.env.PUBLIC_BACKEND_URL + '/contact';

	let body = { subject: 'Contact form submission', ...formData };

	setStore((prev) => ({
		...prev,
		loading: true,
		error: undefined,
	}));

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});

		setStore((prev) => ({
			...prev,
			success: response.status === 200,
			error: response.status !== 200 ? 'There was a problem...' : undefined,
		}));
	} catch {
		setStore((prev) => ({
			...prev,
			error: 'There was a problem...',
		}));
	} finally {
		setStore((prev) => ({
			...prev,
			loading: false,
		}));
	}
}
