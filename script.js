document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel-container");
    const carouselItems = document.querySelectorAll(".carousel-item");
    var indicators = document.querySelectorAll('.carousel-number li');
    let currentIndex = 0;

    function showSlide(index,currentImageStyle,backImageStyle) {
        if (index >= 0 && index < carouselItems.length) {

            carouselItems.forEach(item => {
                item.classList.remove('active', 'active-left', 'active-right', 'active-back-left', 'active-back-right');
            });
            carouselItems[currentIndex].classList.add('active',backImageStyle);
            
            carouselItems[index].classList.add("active",currentImageStyle);
           
            indicators.forEach(indicator => {
                indicator.classList.remove('active');
            })
            indicators[index].classList.add('active');
            currentIndex = index
        }
    }

    function nextSlide() {
        let index = (currentIndex + 1) % carouselItems.length;
        showSlide(index,"active-left",'active-back-right');
    }

    function previousSlide() {
        let index = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(index,"active-right",'active-back-left');
    }

    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', previousSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            if (currentIndex < index) {
                showSlide(index,"active-left",'active-back-right');
            } else {
                showSlide(index,"active-right",'active-back-left');
            }
            indicator.classList.add('active');
        });
    });

    // Show the initial slide
    // showSlide(currentIndex,"active");
});
