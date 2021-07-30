<div class="todos">
{#each Array(10) as todo}
<Todo />
{/each}

</div>


<style>
.todos {
    width: 100%;
    max-height: 100%;
    padding-top: 1rem;
    padding-top: 2rem;
    overflow-y: auto;
}
</style>

<script>
    import Todo from "./components/todo/todo.svelte";
</script>