//Global variable to hold sections and then create navigation
const navElements = [];
const sections = document.querySelectorAll('section[id^="section"]');


// Build menu 
for (let i = 0; i < sections.length; i++) {
    navElements.push(sections[i].dataset.nav);
}

for (element of navElements) {
    let listItem = document.createElement('li');
    listItem.className = "navbar__item";
    // Scroll to section on link click
    listItem.innerHTML = `<a href="#${element.toLowerCase().replace(" ", "")}">${element}</a>`;
    document.querySelector('#navbar__list').appendChild(listItem)
}


// Set sections as active

function updateScrolling() {

    for (let i = 0; i < sections.length; i++) {
        console.log(sections[i].getBoundingClientRect());
        sections[i].getBoundingClientRect();
        if (sections[i].getBoundingClientRect().top >= -170 && sections[i].getBoundingClientRect().top <= 390) {
            // Add class 'active' to section when near top of viewport
            sections[i].classList.add('your-active-class');
        } else {
            sections[i].classList.remove('your-active-class');
        }
    }

}

document.addEventListener('scroll', updateScrolling);


