document.getElementById("searchBut").setAttribute("onclick", "searchCity()");

function searchCity() {
    var cityValue = document.querySelector("input").value;
    var city = cityValue[0].toUpperCase() + cityValue.slice(1)
    var url = "https://weatherdbi.herokuapp.com/data/weather/" + city;

    function httpGet(theUrl) {
        const request = new XMLHttpRequest();
        request.open("GET", theUrl, false); // async: false?
        request.send(null); // body:null??
        return request.responseText;
    }

    var response = httpGet(url);
    var daten = JSON.parse(response);
    var current = daten.currentConditions;
    var comment = current.comment;
    var temp = current.temp.c + "°C";
    var humidity = "Humidity: " + current.humidity;
    var wind = "Wind speed: " + current.wind.km + "km/h";
    var icon = current.iconURL;

    document.getElementById("cityIntro").innerHTML = "Weather in " + city;
    document.getElementById("temp").innerHTML = temp;
    document.getElementById("description").innerHTML = comment;
    document.getElementById("humidty").innerHTML = humidity;
    document.getElementById("wind").innerHTML = wind;
    document.getElementById("icon").src = icon;

}