var animation = bodymovin.loadAnimation({
	container: document.getElementById('bm'), // Required
	path: 'animatetest.json', // Required
	renderer: 'svg', // Required
	loop: true, // Optional
	autoplay: true, // Optional
  })