const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000


app.get('/', async (req, res) => {
  const weatherResponse = await fetch('http://api.openweathermap.org/data/2.5/weather?zip=98007&units=imperial&appid={insert api key here}')
  const data = await weatherResponse.json();

  var temp = data['main']['temp'];

  if(temp<=50){
    res.send(`The temperature is ${temp}, wear a jacket!`);
  }
  else if(temp<=70){
    res.send(`The temperature is ${temp}, looks like a beautiful day!`)
  }
  else{
    res.send(`The temperature is ${temp}, stay cool out there!`);
  }
})

app.listen(port, () => {
   console.log(`Weather app listening at http://localhost:${port}`)
})

