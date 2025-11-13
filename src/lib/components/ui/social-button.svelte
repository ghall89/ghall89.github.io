<script lang="ts">
	import Icon from '@iconify/svelte';

	const { href, name, icon } = $props();
</script>

<a
	{href}
	aria-label={name}
	target="_blank"
	class="group flex aspect-square size-10 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-500 hover:scale-110 hover:border-ghall-green/20 hover:shadow-sm"
>
	<Icon
		class="text-2xl transition-all duration-700 group-hover:scale-105 group-hover:text-ghall-green"
		{icon}
	/>
</a>
