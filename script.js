 const apikey = `5bc3f0c03faa233bfb5609719eb82e0c`;
 const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

 const searchbox = document.querySelector(".search input");
 const searchbtn = document.querySelector(".search button");
 const weicon = document.querySelector(".w-icon")



 async function checkweather(city)
 {
    const response = await fetch(apiurl + city + `&appid=${apikey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else{


    var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    
        if(data.weather[0].main == "Clouds"){
            weicon.src = "images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weicon.src = "images/clear.png";
        }
        else if(data.weather[0].main == "Rain"){
            weicon.src = "images/rain.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weicon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weicon.src = "images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

 }

 searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);
 });