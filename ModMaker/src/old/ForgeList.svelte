<script lang="ts">
    import {fetch} from '@tauri-apps/api/http'
    const forgeManifest = async() => {
        const {data} = await fetch('https://files.minecraftforge.net/net/minecraftforge/forge/maven-metadata.json', {
            method: "GET",
            timeout: 30,
        });
        return data;
    }
    
</script>

<main>
    <h1>List from the forge manifest</h1>
    <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Forge versions</button>
    <ul class="dropdown-menu">
        <li class="dropdown-menu-entry"><a href="#top">1.1</a></li>
            <ul class="dropdown-submenu">
                <li class="dropdown-submenu-entry"><a href="#top">1.1.1</a></li>
            </ul>
        <!-- {#await forgeManifest()}
            <p>Retrieving forge versions</p>
        {:then manifest}
            {#each Object.entries(manifest) as [key, value]}
            <ol class="dropdown-submenu">
                {#each value as version}
                    <li href="#">{version}</li>
                {/each}
            </ol>
            {/each}
        {:catch err}
            <p>{err}</p>
        {/await} -->
    </ul>
</main>


<style>
    .dropdown-menu {
        margin:0;
        padding: 0;
        list-style: none;
    }
    .dropdown-menu-entry {
        width: 200px;
        height: 30px;
        background-color: aqua;
    }
</style>