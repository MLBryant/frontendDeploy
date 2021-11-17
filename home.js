console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted successfully');
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

const imgMouseover = event => {
	event.preventDefault()

	alert('If you were a fruit, you\'d be a fine-apple.')
}

document.querySelector('#catpic').addEventListener('mouseover', imgMouseover);