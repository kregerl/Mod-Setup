<script lang="ts">
import { compute_rest_props } from "svelte/internal";

    export let options: Array<String>;
    export let placeholder: string = undefined;
    export let selected: string;

    let show: boolean = false;
    $: name = selected === undefined ? placeholder : selected;

    function clickOutside(node) {
        const handleClick = (event) => {
            if (node && !node.contains(event.target) && !event.defaultPrevented) {
                node.dispatchEvent(new CustomEvent("click_outside", node));
            }
        }
        document.addEventListener("click", handleClick, true);

        return {
            destroy() {
                document.removeEventListener("click", handleClick, true);
            }
        }
    }

    function clicked(event): void {
        selected = event.target.innerHTML;
        show = false;
    }
</script>

<div class={$$props.class + " dropdown"} use:clickOutside on:click_outside={() => {show = false;}}>
    <button on:click={() => {show = !show;}}>{name}</button>
    {#if show}
        <ul>
            <div class="scroll">
                {#each options as option}
                    <li on:click={clicked}>{option}</li>
                {/each}
            </div>
        </ul>
    {/if}
</div>


<style>
    .scroll{
        max-height: 22vh;
        overflow: auto;
    }

    .dropdown {
        display: flex;
        align-items: center;
        flex-direction: column;
        min-width: fit-content;
        padding: 8px 8px;
        padding-bottom: 0px;
        height: fit-content;
        border: 2px solid green;
    }

    ul {
        width: 100%;
        position: relative;
        border: 2px solid blue;
        padding-left: 0px;
        margin: 0px;
    }
    
    li {
        list-style: none;
        padding: 8px 8px;
        margin: 2px 2px;
        text-align: center;
        cursor: pointer;        
    }

    li:hover {
        background-color: orange;
    }

    button {
        width: 100%;
        background-color: var(--bg-color);
        border: 3px solid black;
        color: white;
        padding: 16px 16px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 4px;
        border-radius: 8px;
        cursor: pointer;        
    }

    button:hover {
        background-color: var(--bg-hover-color);
        border: 3px solid grey;
    }
   
</style>