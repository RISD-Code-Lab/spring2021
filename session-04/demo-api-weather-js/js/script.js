document.addEventListener("DOMContentLoaded", function () {
  const apiURL = "http://api.openweathermap.org/data/2.5/weather?q=Providence&appid=a0be2ca7d3101a5b3e8a3bbf580143f6&units=imperial";


  fetch(apiURL)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      const currentTemp = data.main.temp;
      const feelsTemp = data.main.feels_like;
      const wind = data.wind.speed;

      document.getElementById("temp").textContent = currentTemp;
      document.getElementById("feels").textContent = feelsTemp;

      const fontWeight = Math.round(feelsTemp * 10); // usually from 300 to 1000
      console.log("Font weight:", fontWeight);

      let slant = 0;
      if (wind !== 0) {
        slant = Math.round((wind / 10) * -15); // 0 to -15
      }

      console.log("Slant:", slant);

      const setting = `'CASL' 1, 'wght' ${fontWeight}, 'slnt' ${slant}`;

      document.querySelectorAll('.highlight').forEach(el => {
        el.style.fontVariationSettings = setting;
      });
    })
    .catch(error => console.error("Weather API error:", error));
});