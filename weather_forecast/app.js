//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');
const app = express();
//app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.get("/", function (req, res)
{
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res)
{
    const apik = "0e3919a5de20b4198f3ad9a5bdcbb502";
    var city = req.body.cityName; //use name attr of input
    const t_unit = "metric";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apik + "&units=" + t_unit + "";

    //const url = "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=0e3919a5de20b4198f3ad9a5bdcbb502#";

    https.get(url, function (hresp)
    {
        console.log(hresp);
        hresp.on("data", function (data)
        {
            const weatherData = JSON.parse(data);
            const weatherDescription = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const temperature = weatherData.main.temp;
            const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
   
            res.write("<h1>The temperature in " + city + " is " + temperature + " degree Celsius</h1>");
            res.write("<h1>The weather is currently " + weatherDescription + "<h1>");
            res.write("<img src=" + imageURL + ">");
            res.send();
        })
    });
})


app.listen(3000, function ()
{
    console.log("server running on 3000");
})