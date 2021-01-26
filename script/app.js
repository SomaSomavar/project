let numberofFilms;

const personalMovieBD = {
	count: numberofFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};

function writeYourGenres() {
	for(let i = 0; i < 3; i++) {
		personalMovieBD.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
	}
}

writeYourGenres();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieBD);
	}
}

showMyDB(personalMovieBD.privat);

// function start() {
// 	numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// 	while (numberofFilms == "" || numberofFilms == null || isNaN(numberofFilms)) {
// 		numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
// 	}
// }

// start();

// function detectPersonalLevel() {
// 	if (personalMovieBD.count < 10) {
// 		alert("Просмотрено довольно мало фильмов");
// 	} else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
// 		alert("Вы классический зритель");
// 	} else if (personalMovieBD.count >= 30) {
// 		alert("Вы киноман");
// 	} else {
// 		alert("Произошла ошибка");
// 	}
// }

// detectPersonalLevel();

// function rememberMyFilms() {
// 	for (let i = 0; i < 2; i++) {
// 		const a = prompt("Один из последних просмотренных фильмов?", ""),
// 			b = prompt("На сколько оцените его?", "");
		
// 		if (a != null && b != null && a !== "" && b != "" && a.length < 50) {
// 			personalMovieBD.movies[a] = b;
// 			console.log('okey');
// 		} else {
// 			i--;
// 			console.log("Error");
// 		}
// 	}
// }

// rememberMyFilms();