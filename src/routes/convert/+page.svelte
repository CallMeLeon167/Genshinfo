<svelte:head>
    <title>Genshin Primogem Converter</title>
</svelte:head>

<script>
    let primogems;
    let fates;

    function handlePrimogems(event) {
        if (event.target.value < 0) {
            event.target.value = 0;
        }
        primogems = event.target.value;
        fates = primogems / 160;
    }

    function handleFates(event) {
        if (event.target.value < 0) {
            event.target.value = 0;
        }
        fates = event.target.value;
        primogems = fates * 160;
    }

</script>

<main>
    <h1>Primogems to Fates</h1>
    <form on:submit|preventDefault>
        <div>
            <label for="primogems">Primogems</label>
            <input type="number" id="primogems" min="0" placeholder="160" bind:value={primogems} on:input={handlePrimogems}>
        </div>
        <span>=</span>
        <div>
            <label for="fates">Fates</label>
            <input type="number" id="Fates" min="0" placeholder="1" bind:value={fates} on:input={handleFates}>
        </div>
    </form>
</main>

<style>
    main {
        height: 50vh;
        padding: 2%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    form {
        display: flex;
        align-items: center;
        border: 1px solid rgb(50,50,50);
        border-radius: 15px;
        padding: 1%;
        margin-top: 2%;
    }

    form > div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    form label {
        font-size: 1.5rem;
    }
    
    form input {
        outline: none;
        border: none;
        font-size: 2rem;
        padding: 1px 5px;
        color: var(--text-color);
        background-color: rgba(255,255,255,0.1);
        border-radius: 10px;
        text-align: center;
        width: 80%;
    }

    form > span {
        font-size: 3rem;
        margin: 0 2%;
    }

    @media (max-width: 1000px){
        form {
            flex-direction: column;
        }
    }
</style>