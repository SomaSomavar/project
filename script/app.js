const personalMovieBD = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: true,
	start() {
		for (let i = 0; i < 1; i++) {
			this.count = prompt('Сколько фильмов вы уже посмотрели?', '');

			if (this.count == '' || this.count == null || isNaN(this.count)) {
				i--;
			}
		}
	},
	writeYourGenres() {
		for (let i = 0; i < 1; i++) {

			let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();
			if (genres == "" || genres == null) {
				i--;
			} else {
				personalMovieBD.genres = genres.split(", ");
				personalMovieBD.genres.sort();
			}
		}

		personalMovieBD.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i} - это ${item}`);
		});
	},
	showMyDB(hidden) {
		if (!hidden) {
			console.log(personalMovieBD);
		}
	},
	toggleVisibleMyBD() {
		if (personalMovieBD.privat) {
			personalMovieBD.privat = false;
		} else {
			personalMovieBD.privat = true;
		}
	},
	detectPersonalLevel() {
		if (personalMovieBD.count < 10) {
			alert("Просмотрено довольно мало фильмов");
		} else if (personalMovieBD.count >= 10 && personalMovieBD.count < 30) {
			alert("Вы классический зритель");
		} else if (personalMovieBD.count >= 30) {
			alert("Вы киноман");
		} else {
			alert("Произошла ошибка");
		}
	},
	rememberMyFilms() {
		for (let i = 0; i < 2; i++) {
			const a = prompt("Один из последних просмотренных фильмов?", ""),
				b = prompt("На сколько оцените его?", "");

			if (a != null && b != null && a !== "" && b != "" && a.length < 50) {
				personalMovieBD.movies[a] = b;
			} else {
				i--;
			}
		}
	},
};

personalMovieBD.start();
personalMovieBD.detectPersonalLevel();
personalMovieBD.writeYourGenres();
personalMovieBD.toggleVisibleMyBD();
personalMovieBD.showMyDB(personalMovieBD.privat);
personalMovieBD.rememberMyFilms();