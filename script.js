function intialize(){
	$(".form-control").keyup(function(event){
		if (event.keyCode === 13){
			$("#search-btn").click();
		}
	})
}
function getWeather() {
	document.querySelector(".weather-info").style.display = "block";
	document.querySelector(".weather-app").style.display = "block";
	const cityName = document.querySelector("input").value;
	$.ajax({
		url: `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=4b49b66c977879c9915a688302785b74&units=metric`,
		success: function (data) {
			console.log(data);
			document.querySelector(".city-name").innerHTML = data.city.name;
			document.querySelector(".temprature > span").innerHTML = data.list[0].main.temp;
			document.querySelector(".discription").innerHTML = data.list[0].weather[0].main;
			document.querySelector(".min").innerHTML = data.list[0].main.temp_min;
			document.querySelector(".max").innerHTML = data.list[0].main.temp_max;
			document.querySelector(".hum >span").innerHTML = data.list[0].main.humidity;
			let iconName = data.list[0].weather[0].main;
			if (iconName === `Clouds`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-cloud"></i>`;
				document.body.style.backgroundImage = "url('https://cdn.pixabay.com/photo/2014/08/09/15/45/sky-414199_960_720.jpg')";

			} else if (iconName === `Rain`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}else if (iconName === `snow`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-snow"></i>`;
				document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/r6VkCdQQdG0/maxresdefault.jpg')";

			} else if (iconName === `sunny`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
				document.body.style.backgroundImage = "url('http://images6.fanpop.com/image/photos/36600000/Sun-star-image-sun-star-36682661-1920-1080.jpg')";
			} else if (iconName === `haze`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
				document.body.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/nz06K7R/dark-scary-lake-at-night-background-loop-raw-1-white-haze-floating-over-the-still-lake-surrounded-by-a-creepy-forest-seamless-looping-perfect-for-backgrounds-backdrops-intro-outro-or-credits-for-themes-like-halloween-apocalypse_v1-sfrwh__F0000.png')";

			} else if (iconName === `clear`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-tornado"></i>`;
				document.body.style.backgroundImage = "url('https://jooinn.com/images/blue-sky-99.jpg')";

			}
			else {
				document.querySelector(".icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".mndy-temp > span").innerHTML = data.list[1].main.temp;
			document.querySelector(".mndy-wthr").innerHTML = data.list[1].weather[0].main;
			document.querySelector(".mndy-min").innerHTML = data.list[1].main.temp_min;
			document.querySelector(".mndy-max").innerHTML = data.list[1].main.temp_max;
			document.querySelector(".mndy-hum>span").innerHTML = data.list[1].main.humidity;
			let mondayIconName = data.list[1].weather[0].main;
			if (mondayIconName === `Clouds`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (mondayIconName === `Rain`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (mondayIconName === `snow`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (mondayIconName === `sunny`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (mondayIconName === `haze`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (mondayIconName === `clear`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
			}
			else {
				document.querySelector(".mndy-icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".tsdy-temp > span").innerHTML = data.list[2].main.temp;
			document.querySelector(".tsdy-wthr").innerHTML = data.list[2].weather[0].main;
			document.querySelector(".tsdy-min").innerHTML = data.list[2].main.temp_min;
			document.querySelector(".tsdy-max").innerHTML = data.list[2].main.temp_max;
			document.querySelector(".tsdy-hum>span").innerHTML = data.list[2].main.humidity;
			let tuesdayIconName = data.list[2].weather[0].main;
			if (tuesdayIconName === `Clouds`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (tuesdayIconName === `Rain`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (tuesdayIconName === `snow`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (tuesdayIconName === `sunny`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (tuesdayIconName === `haze`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (tuesdayIconName === `clear`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
			}
			else {
				document.querySelector(".tsdy-icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".wndy-temp>span").innerHTML = data.list[3].main.temp;
			document.querySelector(".wndy-wthr").innerHTML = data.list[3].weather[0].main;
			document.querySelector(".wndy-min").innerHTML = data.list[3].main.temp_min;
			document.querySelector(".wndy-max").innerHTML = data.list[3].main.temp_max;
			document.querySelector(".wndy-hum>span").innerHTML = data.list[3].main.humidity;
			let wednesdayIconName = data.list[3].weather[0].main;

			if (wednesdayIconName === `Clouds`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (wednesdayIconName === `Rain`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (iconName === `snow`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (wednesdayIconName === `sunny`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (wednesdayIconName === `haze`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (wednesdayIconName === `clear`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
			}
			else {
				document.querySelector(".wndy-icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".trsdy-temp>span").innerHTML = data.list[4].main.temp;
			document.querySelector(".trsdy-wthr").innerHTML = data.list[4].weather[0].main;
			document.querySelector(".trsdy-min").innerHTML = data.list[4].main.temp_min;
			document.querySelector(".trsdy-max").innerHTML = data.list[4].main.temp_max;
			document.querySelector(".trsdy-hum>span").innerHTML = data.list[4].main.humidity;
			let thursdayIconName = data.list[4].weather[0].main;
			if (thursdayIconName === `Clouds`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (thursdayIconName === `Rain`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (thursdayIconName === `snow`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (thursdayIconName === `sunny`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (thursdayIconName === `haze`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (thursdayIconName === `clear`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
			}
			else {
				document.querySelector(".trsdy-icon").innerHTML = `Loading icon.....`;

			}
			document.querySelector(".fdy-temp>span").innerHTML = data.list[5].main.temp;
			document.querySelector(".fdy-wthr").innerHTML = data.list[5].weather[0].main;
			document.querySelector(".fdy-min").innerHTML = data.list[5].main.temp_min;
			document.querySelector(".fdy-max").innerHTML = data.list[5].main.temp_max;
			document.querySelector(".fdy-hum>span").innerHTML = data.list[5].main.humidity;
			let fridayIconName = data.list[4].weather[0].main;
			if (fridayIconName === `Clouds`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (fridayIconName === `Rain`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (fridayIconName === `snow`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (fridayIconName === `sunny`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (fridayIconName === `haze`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (fridayIconName === `clear`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
			}
			else {
				document.querySelector(".fdy-icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".stdy-temp>span").innerHTML = data.list[6].main.temp;
			document.querySelector(".stdy-wthr").innerHTML = data.list[6].weather[0].main;
			document.querySelector(".stdy-min").innerHTML = data.list[6].main.temp_min;
			document.querySelector(".stdy-max").innerHTML = data.list[6].main.temp_max;
			document.querySelector(".stdy-hum>span").innerHTML = data.list[6].main.humidity;
			let saturdayIconName = data.list[6].weather[0].main;
			if (saturdayIconName === `Clouds`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (saturdayIconName === `Rain`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (saturdayIconName === `snow`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (saturdayIconName === `sunny`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (saturdayIconName === `haze`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (saturdayIconName === `clear`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
			}
			else {
				document.querySelector(".stdy-icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".sndy-temp>span").innerHTML = data.list[7].main.temp;
			document.querySelector(".sndy-wthr").innerHTML = data.list[7].weather[0].main;
			document.querySelector(".sndy-min").innerHTML = data.list[7].main.temp_min;
			document.querySelector(".sndy-max").innerHTML = data.list[7].main.temp_max;
			document.querySelector(".sndy-hum>span").innerHTML = data.list[7].main.humidity;
			let sundayIconName = data.list[3].weather[0].main;
			if (sundayIconName === `Clouds`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (sundayIconName === `Rain`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (sundayIconName === `snow`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (iconName === `sunny`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (sundayIconName === `haze`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (sundayIconName === `clear`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi-day-sunny"></i>`;
			}
			else {
				document.querySelector(".sndy-icon").innerHTML = `Loading icon.....`;
			}
		},
		error: function (error) {
			console.log(error);
		}
	})
}
