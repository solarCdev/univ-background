<script lang="ts">
	import { navBar } from '$lib';
	import { onMount } from 'svelte';
	import './index.css';
	import Out from '$lib/assets/out.svelte';
	let { children } = $props();

	let navStr = $state('📚 대학교 배경화면 다운받기 🧑‍🎓');

	onMount(() => {
		navBar.subscribe((v) => {
			navStr = v;
		});
	});
</script>

<div id="padding"></div>
<nav>
	{#if navStr !== '📚 대학교 배경화면 다운받기 🧑‍🎓'}
		<button
			onclick={() => {
				if (window.history.length !== 0) window.history.back();
				else location.href = location.pathname;
			}}><Out /></button
		>
	{:else}
		<div class="setter"></div>
	{/if}
	<h1>{navStr}</h1>
	<div class="setter"></div>
</nav>
<main>
	{@render children()}
</main>

<footer>
	<p>2025.2.12 ⓒ Created By Kwon Hojun</p>
	<p>
		개인 인스타그램 <a target="_blank" href="https://www.instagram.com/kw0nh0jun/">@kw0nh0jun</a>
	</p>
</footer>

<style>
	button {
		background: none;
		border: none;
	}

	#padding {
		height: 44px;
	}

	nav {
		height: 56px;
		display: flex;
		align-items: center;
		padding-left: 20px;
		padding-right: 24px;
		justify-content: space-between;
		margin-bottom: 24px;
		position: sticky;
		top: 0;
		background-color: #11111159;
		backdrop-filter: blur(40px);
	}
	.setter {
		width: 24px;
	}

	footer {
		margin-top: 24px;
		padding: 20px;
		display: flex;
		flex-direction: column;
		gap: 4px;
		align-items: center;
		justify-content: center;
	}
	footer > p {
		display: block;
		color: #aaa;
	}
</style>
