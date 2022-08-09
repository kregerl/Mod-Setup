<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import {Type, Types} from "./main"

    const dispatch = createEventDispatcher();

    function handleEvent(event) {
        console.log("Value", event.target.value)
        dispatch("selection", {
            value: event.target.value
        });
    }
</script>

<main>
    <div class="flex-container">
        <div class="flex-row">
            <!-- TODO: Change this to go over a list of strings for the contenet -->
            <!-- {#each Types as type}
                <Button on:click={handleEvent} id={type.id} class="button" route="/version">{type.content}</Button>
            {/each}
            <Button class="button" route="/version">Update Mod</Button> -->
            <!-- <Button on:click={handleEvent} value={} class="button" route="/version">Setup Forge Mod</Button>
            <Button on:click={handleEvent} value={"fabric"} class="button" route="/version">Setup Fabric Mod</Button>
            <Button on:click={handleEvent} value={"update"} class="button" route="/version">Update Mod</Button> -->
        </div>
    </div>
</main>


<style>
    main {
        height: 100%;
    }
    div.flex-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }

    div.flex-row {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        width: 33%;
        height: 23%;
    }

    div.flex-row :global(.button) {
        width: 100%;
        height: 100%;
    }
</style>