/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
    const response = await fetch(`https://api.genshin.dev/elements/`);
    const data = await response.json();
    return {
        elements: data
    }
}