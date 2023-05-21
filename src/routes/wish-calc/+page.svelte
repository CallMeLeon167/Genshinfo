<svelte:head>
    <title>Genshin Wish Calculator</title>
</svelte:head>

<main>
    <h1>Genshin Impact Wish Calculator</h1>
    <form on:submit|preventDefault>
        <input type="number" min="0">
    </form>
</main>

<style>
    main {
        padding: 2%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>