const elForm = document.querySelector("#form");
const ul = document.querySelector("#menu");
const errSpan = document.querySelector("#span");
elForm.addEventListener("submit", function(evt){
    evt.preventDefault();
    let input = evt.target.todo;
    
    if (input.value === '') {
		span.style.display = 'block';
		input.className += ' border-danger';
		return;
	}
    span.style.display = 'none';
	input.className = 'form-control';
    const newLI = document.createElement("li");
    newLI.className = 'list-group-item d-flex justify-content-between';

    newLI.innerHTML = `<h3>${input.value}</h3>
    <div>
        <button class="btn btn-info text-white">Completed</button>
        <button class="btn btn-danger">Delete</button>
    </div>`
    // evt.target.todo.value = '';
    elForm.reset();
    ul.appendChild(newLI);
})