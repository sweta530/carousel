document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel-container");
    const carouselItems = document.querySelectorAll(".carousel-container .carousel-item");
    var indicators = document.querySelectorAll('.carousel-number li');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= 0 && index < carouselItems.length) {
            carouselItems.forEach(item => {
                item.classList.remove('active');
            });
            carouselItems[index].classList.add('active');
            
            indicators.forEach(indicator => {
                indicator.classList.remove('active');
            })
            indicators[index].classList.add('active');
        }
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    }

    document.getElementById('nextBtn').addEventListener('click', nextSlide);
    document.getElementById('prevBtn').addEventListener('click', previousSlide);

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            currentIndex = index;
            showSlide(currentIndex);
            indicator.classList.add('active');
        });
    });

    // Show the initial slide
    showSlide(currentIndex);
});
