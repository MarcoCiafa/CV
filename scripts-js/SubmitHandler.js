function handleSubmit(event) {
	
	event.preventDefault();
	
	var formData = new FormData(event.target);

	for (var [key, value] of formData) {
		console.log(key, value);
  	}
	
	for (var x of formData) {
		console.log(x);
  	}
	
	console.log(Object.fromEntries(formData));

	var isFormDataEmpty = true;
	for (var p of formData) {
   		isFormDataEmpty = false;
		break;
	}
	console.log(isFormDataEmpty);
	
}

const contactForm = document.getElementById("ContactForm");
contactForm.addEventListener("submit", handleSubmit );
