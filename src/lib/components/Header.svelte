<script>
    import logo from "$lib/img/Genshin_Impact_logo.svg";
</script>

<header>
    <a href="/convert">Convert</a>
    <!-- <a href="/wish-calc">Wish Calculator</a> -->
    <a href="/" id="logo"><img src="{logo}" alt="logo"></a>
    <a href="/dmg-calc">Dmg Calculator</a>
</header>

<style>
    header {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 70px;
        padding: 5px 10%;
        text-align: center;
        box-shadow: 0 0 5px black;
    }

    header > a {
        width: 15%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--text-color);
        text-decoration: none;
        font-size: 1.5rem;
        height: 70%;
        padding: 0 2%;
        border-radius: 5px;
        margin: 0 1%;
    }
    
    header > a:hover {
        background-color: rgba(255,255,255,0.1);
    }

    #logo {
        all: unset;
        position: relative;
        height: 50px;
        cursor: pointer;
    }

    #logo > img {
        height: 100%;
        filter: invert(1);
    }
</style>