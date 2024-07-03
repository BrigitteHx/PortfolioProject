window.addEventListener('scroll', function() {
    const circle = document.getElementById('circle');
    const title = circle.querySelector('h1');
    const content = document.getElementById('content');
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    
    const maxScroll = windowHeight / 2;
    const scaleFactor = Math.min(scrollY / maxScroll, 1);
    
    // content showing
    if (scrollY > windowHeight) {
        content.style.opacity = 1;
    } else {
        content.style.opacity = 0;
    }

    // circle scaling
    circle.style.transform = `translate(-50%, -50%) scale(${1 + scaleFactor * 5})`;

    // title removal
    title.style.opacity = `${1 - scaleFactor}`;

    // background flowing
    if (scaleFactor === 1) {
        document.body.style.backgroundColor = 'blue';
        circle.style.backgroundColor = 'transparent';
    } else {
        document.body.style.backgroundColor = 'white';
        circle.style.backgroundColor = 'blue';
    }
});
