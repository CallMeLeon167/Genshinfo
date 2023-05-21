/** @type {import('./$types').PageServerLoad} */
export async function load({}) {
    const response = await fetch("https://api.genshin.dev/");
    const data = await response.json();
    console.log(data.types);
    // return {
    //     post: await db.getPost(params.slug)
    // };
}