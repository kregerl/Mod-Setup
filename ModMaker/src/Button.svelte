<script lang="ts">
    import {Link, link} from "svelte-navigator";

    export let route;
</script>

<!-- Replace button with anchor and style as a button -->
<a href={route} class={$$props.class} use:link on:click>
    <slot/>    
</a>

<style>
    a {
        text-align: center;
        text-decoration: none;
        height: auto;
        padding: 15px 15px;
        cursor: pointer;
        margin: 4px;
        font-size: 24px;
        display: inline-block;
        border-radius: 12px;
        background-color: #1E1E1E;
        color: white;
        border: 3px solid black;
    }

    a:hover {
        border: 3px solid grey;
        background-color: #373737;
    }
</style>