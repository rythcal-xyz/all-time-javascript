const imgWrapper = document.getElementById('img-wrap');
const loadMore = document.getElementById('loadMore');

loadMore.addEventListener('click', () => {
	addNewImages(10);
});

function addNewImages(imgNum) {
	for (let i = 0; i < imgNum; i++) {
		const newImg = document.createElement('img');
		newImg.src = `https://picsum.photos/300?random=${Math.floor(
			Math.random() * 300,
		)}`;

		imgWrapper.appendChild(newImg);
	}
}
