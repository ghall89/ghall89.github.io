<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	interface Props extends HTMLInputAttributes {
		label: string;
	}

	const props: Props = $props();
</script>

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
