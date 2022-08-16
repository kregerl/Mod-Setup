<script lang="ts">
	import {setContext} from "svelte";
	import {Router, Route} from "svelte-navigator";
	import {requestForgeManifest, requestFabricManifest} from "./utils/apis";
	import VersionSelection from "./components/VersionSelection.svelte";

	let forgeManifest = requestForgeManifest();
	setContext("forgeManifest", forgeManifest);
	setContext("fabricManifest", requestFabricManifest());

</script>

<main>
	<Router>
		<Route path="/" component={VersionSelection}/>
	</Router>
</main>

<style>
	main {
		height: 100%;
		width: 100%;
	}
	:root {
		--bg-color: #1e1e1e;
		--bg-hover-color: #505050;
	}
	/* main {
		height: 100%;
		background-image: url("../../images/background.png");
		background-size: 100% 100%;
	} */

	/* .flex-container {
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

	* :global(.large-btn) {
		width: 300px;
		height: 100px;
		line-height: 100px;
		margin-bottom: 5%;	
	}

	* :global(.large-btn:last-child) {
		margin-bottom: 0px;
	} */
</style>