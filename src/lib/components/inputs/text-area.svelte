<script lang="ts">
	import type { HTMLTextareaAttributes } from 'svelte/elements';
	interface Props extends HTMLTextareaAttributes {
		label: string;
	}

	const props: Props = $props();
</script>

<div class={props.class}>
	<label class="block text-sm" for={props.name}>
		{props.label}
	</label>
	<textarea
		rows={5}
		{...props}
		class="w-full rounded-md border border-gray-200 bg-white p-1 ring-ghall-green transition-colors duration-300 hover:bg-gray-50 focus:bg-white"
	></textarea>
</div>
