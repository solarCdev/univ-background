import { navBar, type univs } from '$lib';
import { backgrounds } from '$lib/img';
import type { PageLoad } from './$types';

export const load: PageLoad = ({ params }) => {
	return {
		univ: params.univ
	};
};
