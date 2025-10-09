import type { JSX } from 'solid-js';

interface TextFieldProps extends JSX.InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

export default function TextField(props: TextFieldProps) {
	return (
		<div class={props.class}>
			<label class="block text-sm font-medium" for={props.name}>
				{props.label}
			</label>
			<input
				type="text"
				{...props}
				class="w-full rounded-md border border-gray-200 bg-white p-1 transition-colors duration-300 hover:bg-gray-50 focus:bg-white"
			/>
		</div>
	);
}
