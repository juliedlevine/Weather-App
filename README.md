# Title
---
## [Live Demo](file:///Users/Julie/Documents/Websites/Portfolio/Weather_API/index.html)

## What It Is
Weather Application to get current weather in your zip code

## Languages used
* HTML
* CSS
* jQuery
* Ajax


## Screenshots
Landing Page - user can enter their zip code to see the current weather.
<br>
<p align='center'>
    <img src='https://github.com/juliemdyer/Weather-App/blob/master/screenshots/landing_page.png'></img>
</p>

Weather - image shows current conditions. They are also given the name of the city that corresponds to the zip code submitted.
<br>
<p align='center'>
    <img src='https://github.com/juliemdyer/Weather-App/blob/master/screenshots/weather.png'></img>
</p>


## Challenges
This site was really just a way for me to practice using Ajax calls. I used the jQuery shorthand ($.getJSON) which takes in 3 parameters. I broke these out into 3 separate variables.

### First Parameter
The first parameter is a link the URL that you want to get data from. I used the Open Weather Map API to do this. I had to request an API key and read some documentation about how to use the API. Here I inserted the zipCode variable, which stores the value the user inputs in the submit field.
```JavaScript
//Parameter #1
var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&APPID=a82385e9697be80fd79fee3f6bb4d3b9";
```

### Second Parameter
The second parameter the $.getJSON function takes in is the data type. For this I used JSON.
```JavaScript    
//Parameter #2
    var weatherOptions = {
        format: "json"
    };
```

### Third Parameter
The final parameter is where pretty much everything happens. This is the callback function that is executed if the request succeeds. I looked through the JSON to see what data I wanted to show to the user. I decided on the icon (which is an image representing the current weather), city name, temperature, description and wind. I stored all of these in variables and then updated the HTML using the new data.
```JavaScript
//Parameter #3
function displayWeather(data) {
  var logo = data.weather[0].icon;
  var city = data.name;
  var temperature = Math.round((data.main.temp) * 9/5 - 459.67) + "°";
  var description = data.weather[0].description;
  var wind = Math.round(data.wind.speed);
  $("#logo").attr("src", "http://openweathermap.org/img/w/" + logo + ".png");
  $("#city").html(city);
  $("#temperature").html(temperature);
  $("#description").html(description);
  $("#wind").html(wind);
 }
```
