<script lang="ts">
	import Icon from '@iconify/svelte';

	const { icon, label } = $props();
</script>

<li
	class="m-2 flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-4 py-1 text-slate-700"
>
	{#if icon}
		<Icon {icon} />
	{/if}
	{label}
</li>
