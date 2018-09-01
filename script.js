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
			document.querySelector(".temprature > span").innerHTML = Math.round(data.list[0].main.temp);
			document.querySelector(".discription").innerHTML = data.list[0].weather[0].main;
			document.querySelector(".min").innerHTML = Math.round(data.list[0].main.temp_min);
			document.querySelector(".max").innerHTML =Math.round(data.list[0].main.temp_max);
			document.querySelector(".hum >span").innerHTML = data.list[0].main.humidity;
			let iconName = data.list[0].weather[0].main;
			if (iconName === `Clouds`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-cloud"></i>`;
				document.body.style.backgroundImage = "url('http://jonvilma.com/images/cloud-11.jpg')";

			} else if (iconName === `Rain`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-rain"></i>`;
				document.body.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/D8qa-2E/rainy-stormy-darkness-wet-weather-background-depressed-sad-background_bzxjr4x7h__F0000.png')";
			}else if (iconName === `Snow`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-snow"></i>`;
				document.body.style.backgroundImage = "url('https://i.ytimg.com/vi/r6VkCdQQdG0/maxresdefault.jpg')";
				document.body.style.color="white";
			} else if (iconName === `Sunny`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
				document.body.style.backgroundImage = "url('http://images6.fanpop.com/image/photos/36600000/Sun-star-image-sun-star-36682661-1920-1080.jpg')";
			} else if (iconName === `Haze`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
				document.body.style.backgroundImage = "url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/nz06K7R/dark-scary-lake-at-night-background-loop-raw-1-white-haze-floating-over-the-still-lake-surrounded-by-a-creepy-forest-seamless-looping-perfect-for-backgrounds-backdrops-intro-outro-or-credits-for-themes-like-halloween-apocalypse_v1-sfrwh__F0000.png')";

			} else if (iconName === `Clear`) {
				document.querySelector(".icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
				document.body.style.backgroundImage = "url('https://jooinn.com/images/blue-sky-99.jpg')";

			}
			else {
				document.querySelector(".icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".mndy-temp > span").innerHTML =Math.round(data.list[1].main.temp);
			document.querySelector(".mndy-wthr").innerHTML = data.list[1].weather[0].main;
			document.querySelector(".mndy-min").innerHTML = Math.round(data.list[1].main.temp_min);
			document.querySelector(".mndy-max").innerHTML = Math.round(data.list[1].main.temp_max);
			document.querySelector(".mndy-hum>span").innerHTML = data.list[1].main.humidity;
			let mondayIconName = data.list[1].weather[0].main;
			if (mondayIconName === `Clouds`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (mondayIconName === `Rain`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (mondayIconName === `Snow`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (mondayIconName === `Sunny`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (mondayIconName === `Haze`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (mondayIconName === `Clear`) {
				document.querySelector(".mndy-icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
			}
			else {
				document.querySelector(".mndy-icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".tsdy-temp > span").innerHTML =Math.round(data.list[2].main.temp);
			document.querySelector(".tsdy-wthr").innerHTML = data.list[2].weather[0].main;
			document.querySelector(".tsdy-min").innerHTML = Math.round(data.list[2].main.temp_min);
			document.querySelector(".tsdy-max").innerHTML =Math.round(data.list[2].main.temp_max);
			document.querySelector(".tsdy-hum>span").innerHTML = data.list[2].main.humidity;
			let tuesdayIconName = data.list[2].weather[0].main;
			if (tuesdayIconName === `Clouds`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (tuesdayIconName === `Rain`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (tuesdayIconName === `Snow`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (tuesdayIconName === `Sunny`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (tuesdayIconName === `Haze`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (tuesdayIconName === `Clear`) {
				document.querySelector(".tsdy-icon").innerHTML = `<i class="wi wi-day-clear"></i>`;
			}
			else {
				document.querySelector(".tsdy-icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".wndy-temp>span").innerHTML = Math.round(data.list[3].main.temp);
			document.querySelector(".wndy-wthr").innerHTML = data.list[3].weather[0].main;
			document.querySelector(".wndy-min").innerHTML = Math.round(data.list[3].main.temp_min);
			document.querySelector(".wndy-max").innerHTML = Math.round(data.list[3].main.temp_max);
			document.querySelector(".wndy-hum>span").innerHTML = data.list[3].main.humidity;
			let wednesdayIconName = data.list[3].weather[0].main;

			if (wednesdayIconName === `Clouds`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (wednesdayIconName === `Rain`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (iconName === `Snow`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (wednesdayIconName === `Sunny`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (wednesdayIconName === `Haze`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (wednesdayIconName === `Clear`) {
				document.querySelector(".wndy-icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
			}
			else {
				document.querySelector(".wndy-icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".trsdy-temp>span").innerHTML = Math.round(data.list[4].main.temp);
			document.querySelector(".trsdy-wthr").innerHTML = data.list[4].weather[0].main;
			document.querySelector(".trsdy-min").innerHTML = Math.round(data.list[4].main.temp_min);
			document.querySelector(".trsdy-max").innerHTML = Math.round(data.list[4].main.temp_max);
			document.querySelector(".trsdy-hum>span").innerHTML = data.list[4].main.humidity;
			let thursdayIconName = data.list[4].weather[0].main;
			if (thursdayIconName === `Clouds`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (thursdayIconName === `Rain`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (thursdayIconName === `Snow`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (thursdayIconName === `Sunny`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (thursdayIconName === `Haze`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (thursdayIconName === `Clear`) {
				document.querySelector(".trsdy-icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
			}
			else {
				document.querySelector(".trsdy-icon").innerHTML = `Loading icon.....`;

			}
			document.querySelector(".fdy-temp>span").innerHTML = Math.round(data.list[5].main.temp);
			document.querySelector(".fdy-wthr").innerHTML = data.list[5].weather[0].main;
			document.querySelector(".fdy-min").innerHTML = Math.round(data.list[5].main.temp_min);
			document.querySelector(".fdy-max").innerHTML = Math.round(data.list[5].main.temp_max);
			document.querySelector(".fdy-hum>span").innerHTML = data.list[5].main.humidity;
			let fridayIconName = data.list[4].weather[0].main;
			if (fridayIconName === `Clouds`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (fridayIconName === `Rain`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (fridayIconName === `Snow`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (fridayIconName === `Sunny`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (fridayIconName === `Haze`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (fridayIconName === `Clear`) {
				document.querySelector(".fdy-icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
			}
			else {
				document.querySelector(".fdy-icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".stdy-temp>span").innerHTML = Math.round(data.list[6].main.temp);
			document.querySelector(".stdy-wthr").innerHTML = data.list[6].weather[0].main;
			document.querySelector(".stdy-min").innerHTML = Math.round(data.list[6].main.temp_min);
			document.querySelector(".stdy-max").innerHTML = Math.round(data.list[6].main.temp_max);
			document.querySelector(".stdy-hum>span").innerHTML = data.list[6].main.humidity;
			let saturdayIconName = data.list[6].weather[0].main;
			if (saturdayIconName === `Clouds`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (saturdayIconName === `Rain`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (saturdayIconName === `Snow`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (saturdayIconName === `Sunny`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (saturdayIconName === `Haze`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (saturdayIconName === `Clear`) {
				document.querySelector(".stdy-icon").innerHTML = `<i class="wi wi-night-clear"></i>`;
			}
			else {
				document.querySelector(".stdy-icon").innerHTML = `Loading icon.....`;
			}
			document.querySelector(".sndy-temp>span").innerHTML =Math.round( data.list[7].main.temp);
			document.querySelector(".sndy-wthr").innerHTML = data.list[7].weather[0].main;
			document.querySelector(".sndy-min").innerHTML = Math.round( data.list[7].main.temp_min);
			document.querySelector(".sndy-max").innerHTML = Math.round( data.list[7].main.temp_max);
			document.querySelector(".sndy-hum>span").innerHTML = data.list[7].main.humidity;
			let sundayIconName = data.list[3].weather[0].main;
			if (sundayIconName === `Clouds`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi-cloud"></i>`;
			} else if (sundayIconName === `Rain`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi-rain"></i>`;
			}
			else if (sundayIconName === `Snow`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi-snow"></i>`;
			} else if (iconName === `Sunny`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi--day-sunny"></i>`;
			} else if (sundayIconName === `Haze`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi wi-day-haze"></i>`;
			} else if (sundayIconName === `Clear`) {
				document.querySelector(".sndy-icon").innerHTML = `<i class="wi winight-clear"></i>`;
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


