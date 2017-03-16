$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();
    $("#content").css("visibility", "visible");
    var zipCode = $("#input").val();

    //Parameter #1
    var weatherAPI = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&APPID=a82385e9697be80fd79fee3f6bb4d3b9";

    //Parameter #2
    var weatherOptions = {
        format: "json"
    };

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

    $.getJSON(weatherAPI, weatherOptions, displayWeather);

  }); //end form submit

}); //end document.ready
