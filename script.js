//task 1: using promises to make API call
fetch("https://pokeapi.co/api/v2/pokemon/charmander/")
.then(Response => Response.json())
.then(data => {
    console.log("Name:", data.name);
    console.log("Weight:", data.weight);
    console.log("Ability:", data.abilities[0].ability.name);
})
.catch(error => console.error("There was an error with fetching your pokemon", error));

//task 2: using async/await to fetch data from URL to generate a random cat GIF
const getCatGif = async() => {
    try  {
    const response = await fetch("https://thecatapi.com/api/images/get?format=src&type=gif");
    console.log(response.url);
    } catch (error) {
        console.log("there was an error", error);
    }
};

getCatGif();
