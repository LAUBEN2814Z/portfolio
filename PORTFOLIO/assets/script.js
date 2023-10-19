// variables
var toggleBtn = document.querySelector('.toggle_btn');
var navLinks = document.querySelector('.links');

toggleBtn.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})
window.addEventListener("click", ( event )=>{
	if (event.target.id !== "toggle") {
	   navLinks.classList.remove("active");
	}
})
