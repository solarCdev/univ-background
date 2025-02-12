<script lang="ts">
	import { navBar, type Bg, type univs } from '$lib';
	import { backgrounds } from '$lib/img';
	import { onMount, type Component } from 'svelte';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let bg: Bg | undefined = $state();

	onMount(() => {
		navBar.set(backgrounds[data.univ as univs].koreanName);
		bg = backgrounds[data.univ as univs];
		if (!bg) {
			location.href = '/';
		}
	});
</script>

<p>이미지를 꾹 눌러 다운로드하세요</p>

<ul>
	<button
		class="all"
		onclick={() => {
			const files = [
				{ name: 'light_tab_bg', url: bg?.lightTab },
				{ name: 'dark_tab_bg', url: bg?.darkTab },
				{ name: 'light_phone_bg', url: bg?.lightPhone },
				{ name: 'dark_phone_bg', url: bg?.darkPhone }
			];
			files.forEach((v) => {
				fetch(v.url ? v.url : '')
					.then((res) => res.blob())
					.then((blob) => {
						const url = window.URL.createObjectURL(blob);
						const a = document.createElement('a');
						a.href = url;
						a.download = v.name;
						document.body.appendChild(a);
						a.click();
						a.remove();
						window.URL.revokeObjectURL(url);
					});
			});
		}}>전체 다운로드 🖱️</button
	>
	{#if bg}
		<button
			onclick={() => {
				fetch(bg?.lightTab ? bg.lightTab : '')
					.then((res) => res.blob())
					.then((blob) => {
						const url = window.URL.createObjectURL(blob);
						const a = document.createElement('a');
						a.href = url;
						a.download = 'light_tab_bg.png';
						document.body.appendChild(a);
						a.click();
						a.remove();
						window.URL.revokeObjectURL(url);
					});
			}}><img src={bg.lightTab} alt="no" /></button
		>

		<button
			onclick={() => {
				fetch(bg?.darkTab ? bg.darkTab : '')
					.then((res) => res.blob())
					.then((blob) => {
						const url = window.URL.createObjectURL(blob);
						const a = document.createElement('a');
						a.href = url;
						a.download = 'dark_tab_bg.png';
						document.body.appendChild(a);
						a.click();
						a.remove();
						window.URL.revokeObjectURL(url);
					});
			}}><img src={bg.darkTab} alt="no" /></button
		>

		<button
			onclick={() => {
				fetch(bg?.lightPhone ? bg.lightPhone : '')
					.then((res) => res.blob())
					.then((blob) => {
						const url = window.URL.createObjectURL(blob);
						const a = document.createElement('a');
						a.href = url;
						a.download = 'light_phone_bg.png';
						document.body.appendChild(a);
						a.click();
						a.remove();
						window.URL.revokeObjectURL(url);
					});
			}}><img src={bg.lightPhone} alt="no" /></button
		>

		<button
			onclick={() => {
				fetch(bg?.darkPhone ? bg.darkPhone : '')
					.then((res) => res.blob())
					.then((blob) => {
						const url = window.URL.createObjectURL(blob);
						const a = document.createElement('a');
						a.href = url;
						a.download = 'dark_phone_bg.png';
						document.body.appendChild(a);
						a.click();
						a.remove();
						window.URL.revokeObjectURL(url);
					});
			}}><img src={bg.darkPhone} alt="no" /></button
		>
	{/if}
</ul>

<style>
	.all {
		width: 100%;
		max-width: 400px;
		background-color: rgb(29, 0, 250);
		height: 48px;
		font-size: 16px;
		font-weight: 500;
	}
	ul {
		display: flex;
		flex-direction: column;
		gap: 12px;
		align-items: center;
	}
	button {
		border-radius: 12px;
		background: none;
		border: none;
	}
	img {
		border-radius: 12px;
		width: 100%;
		max-width: 400px;
	}
	p {
		text-align: center;
		color: #aaa;
		margin-bottom: 24px;
	}
</style>
