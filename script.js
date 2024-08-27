document.addEventListener('DOMContentLoaded', function () {
    const details = document.querySelectorAll('.how-it-works-text details');
    const images = document.querySelectorAll('.how-it-works-img img');

    function activateImage(index) {
        images.forEach((img, i) => {
            if (i === index) {
                img.classList.add('active');  
            } else {
                img.classList.remove('active');  
            }
        });
    }

    details.forEach((detail, index) => {
        detail.addEventListener('toggle', function () {
            if (this.open) {
                activateImage(index); 
            }
        });
    });
});
