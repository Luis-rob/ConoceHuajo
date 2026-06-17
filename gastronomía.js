document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const currentContent = this.nextElementSibling;
            const isOpen = currentContent.style.maxHeight && currentContent.style.maxHeight !== '0px';

            document.querySelectorAll('.accordion-content').forEach(content => {
                content.style.maxHeight = '0px';
                content.style.paddingTop = '0px';
                content.style.paddingBottom = '0px';
            });

            if (!isOpen) {
                currentContent.style.paddingTop = '15px';
                currentContent.style.paddingBottom = '15px';
                currentContent.style.maxHeight = (currentContent.scrollHeight + 30) + 'px';
            }
        });
    });
});


