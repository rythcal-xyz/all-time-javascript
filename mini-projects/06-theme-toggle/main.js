const mode = document.getElementById('darkMode');
const body = document.getElementById('body');

window.addEventListener('DOMContentLoaded', () => {
	const savedMode = JSON.parse(localStorage.getItem('mode'));
	if (savedMode !== null) {
		mode.checked = savedMode;
		updateTheme();
	}
});

mode.checked = false;

mode.addEventListener('input', () => {
	updateTheme();
	updateLocalStorage();
});

function updateTheme() {
	if (mode.checked) {
		body.style.background = '#232425';
	} else {
		body.style.background = '#ffff';
	}
}

function updateLocalStorage() {
	localStorage.setItem('mode', JSON.stringify(mode.checked));
}


// Recommended Code Structure


/* const darkModeToggle = document.getElementById('darkMode');
const body = document.getElementById('body');

window.addEventListener('DOMContentLoaded', () => {
	if (!darkModeToggle || !body) {
		console.error('Missing required DOM elements.');
		return;
	}

	const savedMode = JSON.parse(localStorage.getItem('mode'));

	if (savedMode !== null) {
		darkModeToggle.checked = savedMode;
	} else {
		darkModeToggle.checked = false;
	}

	updateTheme();
});

darkModeToggle.addEventListener('input', () => {
	updateTheme();
	updateLocalStorage();
});

function updateTheme() {
	body.classList.toggle('dark-theme', darkModeToggle.checked);
	body.classList.toggle('light-theme', !darkModeToggle.checked);
}

function updateLocalStorage() {
	localStorage.setItem('mode', JSON.stringify(darkModeToggle.checked));
} */
