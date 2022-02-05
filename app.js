function slidesPlugin(activeSlide = 2) {
    const slides = document.querySelectorAll('.slide')
    console.log(typeof(activeSlide));
    if (activeSlide < 0 || activeSlide > slides.length || !(typeof(activeSlide) === "number")) {
        alert('Please enter correct number')
        activeSlide = 1
    }
    slides[activeSlide].classList.add('active')
    document.body.style.backgroundColor = slides[activeSlide].dataset.color

    for (const slide of slides) {
        slide.addEventListener('pointerup', (e) => {
            removeClass(slides, 'active')
            slide.classList.add('active')
            document.body.style.backgroundColor = e.target.dataset.color
        })

        slide.addEventListener('pointerenter', (e) => {
            if (e.target.classList.contains('active')) return
            slide.classList.add('hover')
        })
        slide.addEventListener('pointerleave', () => {
            removeClass(slides, 'hover')
        })
    }

    function removeClass(el, delClass) {
        el.forEach(slide => {
            slide.classList.remove(delClass)
        });
    }

    document.body.addEventListener('pointerup', (e) => {
        if (e.target.classList.contains('container') || e.target.tagName === 'BODY') {
            removeClass(slides, 'active')
            document.body.style.background = 'rgb(61, 60, 60)'
        }
    })
}

slidesPlugin(1)