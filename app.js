const express = require('express');
const app = express();
const pokemon = require("./models/pokemon.json");


app.get('/', (req, res) => {
    res.send('Welcome 99 Pokemon')
})

app.get('/:verb/:adjective/:noun', (req, res) => {
    const { verb, adjective, noun } = req.params
    res.send(`Congratulations on starting a new project called ${verb}-${adjective}-${noun}`)
})

app.get('/bugs', (req, res) => {
    res.send(`99 little bugs in the code. <br />
    99 little bugs <br /><a href="/bugs/101">Pull one down <br /> Patch it around</a>`)
})

app.get('/bugs/:number_of_bugs', (req, res) => {
    const { number_of_bugs } = req.params
    const newNumber = Number(number_of_bugs) + 2

    if (number_of_bugs < 200) {
        res.send(`<p>${number_of_bugs} little bugs in the code</p>
        <a href=${Number(number_of_bugs) + 2}>Pull one down, patch it around</a>`)
    } else {
        res.send(`<a href='/bugs'>Too many bugs!! Start over!</a>`)
    }
})
app.get('/pokemon', (req, res) => {
    res.json(pokemon)
})
app.get("/pokemon/search?", (req, res) => {
    const { name } = req.query;
    res.json(
      pokemon.filter((poke) => {
        return poke.name === name || poke.name.toUpperCase() === name.toUpperCase();
      })
    );
  });
app.get('/pokemon/:indexOfArray', (req, res) => {
    const { indexOfArray } = req.params;
    if (pokemon[indexOfArray]) {
        res.json(pokemon[indexOfArray])
    } else {
        res.send(`Sorry, no pokemon found at ${indexOfArray}`)
    }

})
module.exports = app;