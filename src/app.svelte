<style>
.app {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #0093e9;
    background-image: linear-gradient(160deg, #0093e9 50%, #80d0c7 100%);    

}

:global(html),
:global(body) {
    padding: 0;
    margin: auto 0;
    font-size: 16px;
}

</style>

<main class="app">
    <Container />
</main>

<script>
import Container from "./components/container/container.svelte";
</script>