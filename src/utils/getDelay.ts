export function getDelay(index) {
	const delay = [
		'motion-delay-200',
		'motion-delay-300',
		'motion-delay-[400ms]',
		'motion-delay-[500ms]',
		'motion-delay-[600ms]',
		'motion-delay-[700ms]',
		'motion-delay-[800ms]',
		'motion-delay-[900ms]',
		'motion-delay-[1000ms]',
	];

	return delay[index];
}
