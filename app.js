const btn = document.querySelector("#add-btn");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

btn.addEventListener("click", () => {
	const taskText = input.value;

	if (taskText !== "") {
		// Tworzenie nowego elementu li
		const newLi = document.createElement("li");
		newLi.textContent = taskText;

		// Dodawanie elementu do listy #task-list
		list.appendChild(newLi);

		// Czyszczenie pola po dodaniu
		input.value = "";
	}
});
