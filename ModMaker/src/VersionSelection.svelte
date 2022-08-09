<script lang="ts">
    import Button from "./Button.svelte";
    import {VersionEntry, getVersions} from "./apis";
    //TODO: Fix this so it can received state from the main APP
    export let state: number;
    let versions: Array<VersionEntry> = getVersions(state);
    

</script>

<main>
    <Button class="button" route="/">Back</Button>    
    {#await versions}
        <p>Loading modloader versions...</p>
    {:then version}
        {#each version as v}
           <p>{v.minecraftVersion}: {v.modloaderVersions}</p> 
        {/each}
    {:catch err}
        <p>Error loading modloader versions. Please try again later.</p>
    {/await}
    <!-- <div>
        {#each versions as version}
            <h1>{version.minecraftVersion}</h1>
            <p>{version}</p>
        {/each}
    </div> -->
</main>

<style>
    * :global(.button) {
        position: relative;
        width: 7.5%;
        top: 0;
        left: 0;
    }
</style>