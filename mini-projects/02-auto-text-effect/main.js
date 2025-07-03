const container = document.getElementById('container');
const careers = [
	'Software Engineer',
	'Data Analyst',
	'Data Scientist',
	'Programmer',
];

let careerIndex = 0;
let characterIndex = 0;

function updateText() {
	const currentCareer = careers[careerIndex];
	container.innerHTML = `<h1>I am a ${currentCareer.slice(
		0,
		characterIndex,
	)}</h1>`;

	characterIndex++;

	if (characterIndex > currentCareer.length) {
		careerIndex = careerIndex++ % careers.length;
		characterIndex = 0;
		setTimeout(updateText, 1000);                        
	} else {
		setTimeout(updateText, 200);
	}
}

updateText();
