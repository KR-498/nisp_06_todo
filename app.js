const btn = document.querySelector("#add-btn");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

btn.addEventListener("click", () => {
	const taskText = input.value;

	if (taskText !== "") {
		const newLi = document.createElement("li");

		// Tworzenie checkboxa
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";

		// Obsługa zmiany stanu checkboxa
		checkbox.addEventListener("change", () => {
			if (checkbox.checked) {
				newLi.classList.add("completed");
			} else {
				newLi.classList.remove("completed");
			}
		});

		// Składanie elementu listy
		newLi.appendChild(checkbox);
		newLi.append(` ${taskText}`); // Dodanie tekstu obok checkboxa
		list.appendChild(newLi);

		input.value = "";
	}
});
