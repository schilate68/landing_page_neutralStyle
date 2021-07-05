//Global variable to hold sections and then create navigation
const navElements = [];
const sections = document.querySelectorAll('section[id^="section"]');

// Build menu 
sections.forEach((section) => navElements.push(section.dataset.nav));

const buildMenu = () => {
    for (element of navElements) {
        let listItem = document.createElement('li');
        listItem.className = "navbar__item";
        listItem.innerHTML = `<a class="anchor_menu">${element}</a>`;
        document.querySelector('#navbar__list').appendChild(listItem);
    }
}

//Add eventlistener to Menu and scroll to section
const scrollToSection = () => {
    document.querySelectorAll('a[class="anchor_menu"]').forEach((element) => {
        console.log(element);
        element.addEventListener('click', (e) => {
            e.preventDefault();
            sections.forEach(section => {
                if (section.dataset.nav === element.innerText) {
                    section.scrollIntoView();
                }
            })
        })
    });
}

// Set sections as active
const activeStateScrolling = () => {
    sections.forEach(section => {
        section.getBoundingClientRect();
        if (section.getBoundingClientRect().top >= -170 && section.getBoundingClientRect().top <= 390) {
            // Add class 'active' to section when near top of viewport
            section.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
        }
    })
}


//call Functions
buildMenu();
scrollToSection();
document.addEventListener('scroll', activeStateScrolling);



