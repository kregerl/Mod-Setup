<script lang="ts">
    import {getContext} from "svelte";
    import {open} from "@tauri-apps/api/dialog";
    import {homeDir} from '@tauri-apps/api/path';
    import Form from "./Form.svelte";
    import TextBox from "./TextBox.svelte";

    const MODLOADER_PLACEHOLDER = "Select Modloader";

    // the modloader (forge/fabric)
    let selectedModloader: string;
    let selectedMinecraftVersion: string;
    let selectedModloaderVersion: string;

    // TODO: Add show snapshows check box for fabric. 
    let showSnapshots: string;
    // Path of the new folder
    let path: string;        
    //let modid: string;
    //let modidRegex: RegExp = /^[a-zA-Z0-9]+$/;

    $: isDisabled = !(selectedModloader !== undefined 
        && selectedMinecraftVersion !== undefined 
        && selectedModloaderVersion !== undefined 
        && path !== undefined);

    function manifestToModloaderVersions(manifest: Array<VersionEntry>) {
        let result = [];
        let filter = manifest.filter(entry => entry.minecraftVersion === selectedMinecraftVersion);
        filter.forEach(entry => {
            result.push(...entry.modloaderVersions);
        })
        result = result.reverse();
        selectedModloaderVersion = result[0]; 
        return result;
    }

    function manifestToMinecraftVersions(manifest: Array<VersionEntry>): Array<String> {
        let result = [];
        console.log(manifest, selectedModloader);
        manifest.forEach(element => {
            result.push(element.minecraftVersion);
        });
        result = result.reverse()
        selectedMinecraftVersion = result[0];
        return result;
    }

    async function saveFolder() {
        let res = await open({
            directory: true,
            multiple: false,
            defaultPath: await homeDir()
        });
        if (!Array.isArray(res) && res !== undefined) {
            path = res;
        }
    }

    let options = {
        Forge: getContext("forgeManifest"),
        Fabric: getContext("fabricManifest")
    };

</script>

<div class="grid-container">
    <div class="g1">
        <Form options={Object.keys(options)} placeholder={MODLOADER_PLACEHOLDER} bind:selected={selectedModloader}/>
        {#if selectedModloader !== undefined && selectedModloader !== MODLOADER_PLACEHOLDER}
            {#await options[selectedModloader] then manifest}
                <Form options={manifestToMinecraftVersions(manifest)} bind:selected={selectedMinecraftVersion}/>
                {#key selectedMinecraftVersion}
                    <Form options={manifestToModloaderVersions(manifest)} selected={selectedModloaderVersion}/>
                {/key}
            {/await}
        {/if}
    </div>
    <div class="g2">
        <div class="flex-column">
            <div class="flex-row">
                <TextBox class="path" id="name" bind:contents={path}>Mod Path:</TextBox>
                <button class="open" on:click={saveFolder}>Open Folder</button>
            </div>
        </div>
    </div>
    <div class="g3">
        <button disabled={isDisabled} class="continue">Continue</button>
    </div>
</div>

<style>
    
    .flex-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .grid-container {
        border: 2px solid red;
        display: grid;
        grid-template-columns: repeat(5, 1fr) ;
        grid-template-rows: 0.5fr 1fr 0.1fr 1fr 0.5fr; 
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        height: 100%;
    }

    .g1 {
        grid-area: 2 / 2 / 3 / 5;
        height: 100%;
    }

    .g2 {
        grid-area: 4 / 2 / 5 / 5;
        height: 100%;
    }

    .g3 {
        grid-area: 5 / 5 / 6 / 6;
    }

    button {
        background-color: var(--bg-color);
        color: white;
        border: 2px solid black;
        border-radius: 8px;
    }

    button:hover {
        background-color: var(--bg-hover-color);
        border: 2px solid grey;
    }

    .continue {
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 8px 8px;
        margin: 8px 8px;
    }

    .flex-row :global(.path) {
        padding: 8px 8px;    
        margin-right: 8px;
    }

</style>