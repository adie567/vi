function PlaySound(id, start, length) {
	var sound = document.getElementById(id);
	sound.currentTime = start;
	sound.play();
	setTimeout( function() {
		sound.pause()
	}, length);
}
