import type { JSX } from 'solid-js';
import clsx from 'clsx';

interface TextAreaProps extends JSX.InputHTMLAttributes<HTMLTextAreaElement> {
	label: string;
}

export default function TextArea(props: TextAreaProps) {
	return (
		<div class={props.class}>
			<label class="block text-sm" for={props.name}>
				{props.label}
			</label>
			<textarea
				rows={'5'}
				{...props}
				class="w-full rounded-md border border-gray-200 bg-white p-1 ring-ghall-green transition-colors duration-300 hover:bg-gray-50 focus:bg-white"
			></textarea>
		</div>
	);
}
