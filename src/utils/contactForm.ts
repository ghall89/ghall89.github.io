export async function submitContactForm(
	formEl: HTMLFormElement,
	alpineData: any
) {
	const formData = new FormData(formEl);
	const url = import.meta.env.PUBLIC_BACKEND_URL + '/contact';

	let body = { subject: 'Contact form submission' };
	for (const [name, value] of formData) {
		body = { ...body, [name]: value };
	}

	alpineData.loading = true;
	alpineData.error = false;

	try {
		const response = await fetch(url, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(body),
		});
		alpineData.success = response.status === 200;
		alpineData.error = response.status !== 200;
	} catch {
		alpineData.error = true;
	} finally {
		alpineData.loading = false;
	}
}
