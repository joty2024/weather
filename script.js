<script>
    const apikey = "4948a834dbca17f3ec375ec374ab11ce";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 
    const searchBox =  document.querySelector(".search input");
    const searchBtn =  document.querySelector(".search button");

    async function checkWeather(city) {
      const response = await fetch(apiUrl + city + `&appid=${apikey}`);
      var data = await response.json(); 
      console.log(data);
       
   document.querySelector(".city").innerHTML = data.name;
   document.querySelector(".temp").innerHTML = data.main.temp + "°C";
   document.querySelector(".humidity").innerHTML =Math.round(data.main.humidity)+ "%";
   document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
   }
searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
})


  </script>