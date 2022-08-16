<script lang="ts">
    export let contents: string = "";
    export let id: string;
</script>


<div>
    <label for={id}><slot/></label>
    <div class="">
        <input class={$$props.class} type="text" id={id} bind:value={contents}>
    </div>
</div>

<style>
    div {
        width: 100%;
    }
    label {
        margin-right: 0px;
    }

    input {
        width: fit-content;
    }

</style>