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
                // Close other details
                details.forEach((otherDetail) => {
                    if (otherDetail !== this && otherDetail.open) {
                        otherDetail.removeAttribute('open');
                        otherDetail.parentElement.style.backgroundColor = 'white'; // Reset background color of closed details

                        // Reset text colors of closed details
                        const summaryElement = otherDetail.querySelector('summary');
                        const paragraphElement = otherDetail.querySelector('p');
                        if (summaryElement) summaryElement.style.color = 'black';
                        if (paragraphElement) paragraphElement.style.color = 'black';
                    }
                });

                activateImage(index);

                // Change background color of the opened detail
                this.parentElement.style.backgroundColor = '#3e54a3';

                // Change text colors of the opened detail
                const summaryElement = this.querySelector('summary');
                const paragraphElement = this.querySelector('p');
                if (summaryElement) summaryElement.style.color = 'white';
                if (paragraphElement) paragraphElement.style.color = '#d1d1d1';
            } else {
                // Reset background color when closed
                this.parentElement.style.backgroundColor = 'white';

                // Reset text colors when closed
                const summaryElement = this.querySelector('summary');
                const paragraphElement = this.querySelector('p');
                if (summaryElement) summaryElement.style.color = 'black';
                if (paragraphElement) paragraphElement.style.color = 'black';
            }
        });
    });
});
