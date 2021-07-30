<main>
    {#each components as { component = false, children, props }}
        <svelte:component this={component} components={children} {props} />
    {/each}
</main>

<script>
import service from "./service.js";

$: ({
    components = [],
} = $service.context);
</script>