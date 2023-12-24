// Sample JavaScript function
function followButtonClicked() {
    alert("Thanks for following!");
}
// JavaScript for Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode', darkModeToggle.checked);
});
