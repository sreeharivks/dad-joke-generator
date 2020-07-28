const jokeElement = document.getElementById('joke');
const getJoke = document.getElementById('get-joke');

getJoke.addEventListener('click', generateJoke);
generateJoke();
async function generateJoke() {
    // call the API
    const jokeResult = await fetch('https://icanhazdadjoke.com/', {
        headers: {
            Accept: 'application/json',
        },
    });
    const joke = await jokeResult.json();

    jokeElement.innerHTML = joke.joke;
}
