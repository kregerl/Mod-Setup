<script lang="ts">
	import {slide} from "svelte/transition"
	import {Router, Route, Link} from "svelte-navigator";
	import Options from "./Options.svelte"
	import VersionSelection from "./VersionSelection.svelte"
	import Button from "./Button.svelte"

	let state: number;
	function updateSelection(event) {
		console.log("Here", event.detail);
		state = event.detail.value;
	}

	let expanded: boolean = false;
	function handleClick() {
		expanded = !expanded;
	}

	function handleClick2(event) {
		expanded = false;
		console.log(event.target.textContent)
	}

</script>

<main>
	<!-- <Router>
		<Route path="/"> 
			<Options on:selection={updateSelection}/>
		</Route>
		<Route path="/version" component={VersionSelection} state={state}/>
	</Router> -->

	<Router>
		<Route path="/">
			<div class="flex-container">
				<div class="flex-row">
					<Button class="large-btn" route="/setup">
						Setup New Mod	
					</Button>
					<Button class="large-btn" route="/update">
						Update Existing Mod
					</Button>
				</div>
			</div>
		</Route>

		<Route path="/setup">
			<Button class="btn" route="/">
				<div class="flex-container">
					<span class="right-caret"/>
					Back
				</div>
			</Button>
		</Route>

		<Route path="/update">
		</Route>
	</Router>
</main>

<style>
	main {
		height: 100%;
		background-image: url("../../images/background.png");
		background-size: 100% 100%;
	}

	.flex-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.flex-row {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border: 1px solid blue;
	}

	.right-caret {
		width: 0;
		height: 0;
		border-top: 10px solid transparent;
		border-bottom: 10px solid transparent;
		border-right: 10px solid white;
		display: inline-block;
		margin: 8px 8px;
	}

	* :global(.large-btn) {
		width: 300px;
		height: 100px;
		line-height: 100px;
		margin-bottom: 5%;	
	}

	* :global(.large-btn:last-child) {
		margin-bottom: 0px;
	}
</style>