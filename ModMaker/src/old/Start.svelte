<script lang="ts">
    function test() {
        console.log("Clicked")
    }
</script>

<main>
    <div class="flex-container">
        <div class="flex-row">
            <button on:click={test}>Setup Forge Mod</button>
            <button>Setup Fabric Mod</button>
            <button>Load Existing Mod</button>
        </div>
    </div>
</main>


<style>
    main {
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .flex-container {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        margin: 0;
        height: 100%;
        background-image: url("../../images/background.png");
        background-size: auto 110%;
    }

    .flex-row {
        display: flex;
        flex-direction: column;
        width: 20%;
        height: 25%;
    }

    button {
        width: 100%;
        height: 100%;
        margin: 0px;
        margin-bottom: 10px;
        text-align: center;
        background-image: url("../../images/button.png");
        background-size: 100% 100%;
    }

    button:hover {
        background-image: url("../../images/button_hovered.png")
    }

    button:last-child {
        margin-bottom: 0px;
    }
</style>