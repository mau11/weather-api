const WEATHER_API_KEY = ""; // ADD KEY

document.getElementById("submit").onclick = getWeather;

function getWeather() {
  const input = document.getElementById("zip").value;
  console.log("getting", input);
  const url = `http://api.weatherapi.com/v1/current.json?key=${WEATHER_API_KEY}&q=${input}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const { country, name, region } = data.location;
      const { condition, temp_f, temp_c } = data.current;
      console.log(condition.icon.replace("//", "https://"));
      document.getElementById("icon").src = condition.icon.replace(
        "//",
        "https://"
      );
      document.getElementById("tempF").innerText = `${temp_f} F`;
      document.getElementById("tempC").innerText = `${temp_c} C`;
      document.getElementById("city").innerText = name;
      document.getElementById("state").innerText = region;
      document.getElementById("country").innerText = country;
    });
}
