import type { Alpine } from 'alpinejs';
import intersect from '@alpinejs/intersect';
import collapse from '@alpinejs/collapse';

export default (Alpine: Alpine) => {
	Alpine.plugin(intersect);
	Alpine.plugin(collapse);
};
