<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<svelte:head>
    <title>Genshinfo</title>
</svelte:head>

<main>
    <h1>Welcome to Genshinfo</h1>
    <section id="elements">
        <h2>Elements</h2>
        <div>
            {#each data.elements as element}
            <a href="/elements/{element}" class="element">
                <img src="https://api.genshin.dev/elements/{element}/icon" alt="{element} icon">
                <span>{element.charAt(0).toUpperCase() + element.substring(1)}</span>
            </a>
            {/each}
        </div>
    </section>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main > section {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid gray;
        width: 80vw;
    }

    #elements > div {
        width: 100%;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    #elements > div > a {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .element {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
    }

    .element:hover {
        background-color: rgba(255,255,255,0.1);
        border-radius: 10px;
    }
</style>