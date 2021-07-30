<div class="page">
    <div class="nav">
        <button
            on:click="{() => service.send("PAGES_SHOW_HOME")}"
            class:text-red="{$service.matches("pages.show.home")}"
        >
            Home
        </button>
        <button
            on:click="{() => service.send("PAGES_SHOW_ABOUT")}"
            class:text-red="{$service.matches("pages.show.about")}"
        >
            About
        </button>
    </div>
    <div class="content">
        {#each components as { component = false, children }}
            <svelte:component
                this={component}
                components={children}
            />
        {/each}
    </div>
</div>

<style lang="scss">
    @import 'page';
</style>

<script>
import service from "../service.js";

export let components;

$: console.log({components})
</script>
