<style>
    .container {
        position: relative;
        overflow: hidden;
        min-width: 25vw;
        max-width: 500px;
        min-height: 75vh;
        max-height: 75vh;
        padding: 1rem;
        background-color: rgb(255, 255, 255);
        border-radius: 2rem;
        box-shadow: 5px 5px 50px 10px rgba(0, 0, 0, 0.582);
    }
</style>

<div class="container">
    <Nav />
    <Todos />
    <Footer />

</div>
<script>
import Nav from "./components/nav/nav.svelte";
import Todos from "./components/todos/todos.svelte";
import Footer from "./components/footer/footer.svelte";
</script>