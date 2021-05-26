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
 * Define Global Variables
 * 
*/
const sideNavList = document.getElementsByClassName('items')[0];
const navList = document.getElementsByClassName('navList')[0];
let prevScrollpos = window.pageYOffset;
let heds = document.querySelectorAll(".navbar__menu")[0];
const heade = document.getElementsByTagName('a');
const mybutton = document.getElementById("myBtn");
const sections = document.querySelectorAll("section");
// Setup isScrolling variable
let isScrolling;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
// build the nav-Menu

for(section of sections){
	let listItem = document.createElement('a');
	navList.appendChild(listItem);
}
const rtitle = Array.from(document.getElementsByTagName('h2'));
const atitles = Array.from(document.getElementsByTagName('a'));
for (i=0;i < sections.length;i++){
	atitles[i].href = '#'+'section'+ (i + 1);
	atitles[i].classList.add("buttn");
	atitles[i].textContent = rtitle[i].textContent
}


// Scroll to anchor ID using scrollTO event
// I think i hacked THe Scroll Technique ^_^ i Hope That good 

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Set Nav-Bar sections as active


// When the user scrolls down 20px from the top of the document, show the button

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// Add class 'active' to section when near top of viewport
onscroll = function () {
	let scrollposition = document.documentElement.scrollTop;

	sections.forEach( (section) => {
		if (scrollposition >= section.offsetTop && scrollposition < section.offsetTop + section.offsetHeight && scrollposition > 20 ){
			mybutton.style.display = 'block';
			let currentId = section.attributes.id.value;
			removeAllActiveClasses();
			addActiveClass(currentId);
		}if (scrollposition == 0 ){
			mybutton.style.display = 'none';
		}
	});
};

let removeAllActiveClasses = function(){
	document.querySelectorAll("nav a").forEach((el) =>{
		el.classList.remove('active');
	});
}; 

let addActiveClass = function(id){
	//console.log(id); //For Testing 
	let selector = `nav a[href="#${id}"]`;
	document.querySelector(selector).classList.add('active');
};
