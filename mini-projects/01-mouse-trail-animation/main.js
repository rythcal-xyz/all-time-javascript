const body = document.getElementById('body');

body.addEventListener('mousemove', (event) => {
	const xAxis = event.offsetX;
	const yAxis = event.offsetY;
	const span = document.createElement('span');
    const size = Math.random() * 100;

	span.style.left = xAxis + 'px';
	span.style.top = yAxis + 'px';
    span.style.width = size + 'px';
    span.style.height = size + 'px';

    body.appendChild(span);
    
    setTimeout(() => {
        span.remove();
	}, 3000);
});
