/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

const navbar = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 *
 */


/**
 * Begin Main Functions
 * Build the navbar 
 * 
 */

// Create a function for page sections
function buildNav() {
    for (let q = 1; q <= sections.length; q++) {
        // Create li element
        let li = document.createElement('li')
        li.innerText = `section${q}`
        // Link list item to the section
        li.dataset.nav = sections[q - 1].id
        // Adding style to the li 
        li.classList.add('menu__link')
        // Scroll to different sections
        li.addEventListener('click', (e) => {

            e.preventDefault();
            
            for (let elem of navbar.children) {
                // remove active class
                elem.classList.remove('your-active-class')
            }
            // add active class
            li.classList.add('your-active-class')
        
            // Scroll to section when active
            sections[q - 1].scrollIntoView({behavior: 'smooth'})
            sections[q - 1].classList.add('your-active-class')
            })
            // Append the li to the navbar
            navbar.append(li)
    }
}

buildNav()


// Add class 'active' to section when near top of viewport
function makeActive() {
    for (const section of sections) {
        // Section position relative to viewport
        const box = section.getBoundingClientRect();
        if (box.top <= 150 && box.bottom >= 150) {
            // Add active class
            section.classList.add('your-active-class')
            for (let elem of navbar.children) {
                // remove active class
                elem.classList.remove('your-active-class')
            }
            const li = document.querySelector(`li[data-nav="${section.id}"]`)
            // add active class
            li.classList.add('your-active-class')
            } else {
              // remove active class
              section.classList.remove('your-active-class')

            }
    }
}

// Makes section active on scroll
document.addEventListener('scroll', function() {
    makeActive();
});

/** 
* End Main Helper Functions 
*
*/
