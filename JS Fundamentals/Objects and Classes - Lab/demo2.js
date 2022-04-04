function catCreator(array) {
	class Cat {
		constructor(name, age) {
			this.name = name;
			this.age = age;

			this.meow = () => {
				console.log(`${this.name}, age ${this.age} says Meow`);
			};
		}
	}

	let cats = [];

	for (let currentString of array) {
		let [name, age] = currentString.split(' ');

		let currentCat = new Cat(name, age);
		cats.push(currentCat);
	}

	cats.forEach((cat) => cat.meow());
}

catCreator(['Name 10', 'Gui 20']);

function songCreator(infoArr) {
	class Song {
		constructor(typeList, name, time) {
			this.typeList = typeList;
			this.name = name;
			this.time = time;
		}
	}

	let songNum = infoArr.shift();
	let songsType = infoArr.pop();

	let songs = [];

	for (let i = 0; i < songNum; i++) {
		let [songType, songName, songTime] = infoArr[i].split('_');

		let currentSong = new Song(songType, songName, songTime);
		songs.push(currentSong);
	}

	if (songsType === 'all') {
		songs.forEach((song) => console.log(song.name));
	} else {
		let filtered = songs.filter((song) => song.typeList === songsType);
		filtered.forEach((song) => console.log(song.name));
	}
}

songCreator([
	4,
	'favourite_DownTown_3:14',
	'favourite_Kiss_4:16',
	'favourite_Smooth Criminal_4:01',
	'ban_Photoshop_3:48',
	'ban',
]);
