const
	numberofFilms = +prompt("Сколько фильмов вы уже посмотрели?", ""),
	personalMovieBD = {
		count: numberofFilms,
		movies: {},
		actors: {},
		genres: [],
		privat: false,
	};

for (let i = 0; i < 2; i++) {
	let a = prompt("Один из последних просмотренных фильмов?", "");
	let b = prompt("На сколько оцените его?", "");
	personalMovieBD.movies.a = b;
}

console.log(personalMovieBD);