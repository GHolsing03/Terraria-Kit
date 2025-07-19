const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        contents.forEach(c => c.classList.remove('active'));
        const contentId = tab.getAttribute('data-content');
        document.getElementById(contentId).classList.add('active');
    });
});
