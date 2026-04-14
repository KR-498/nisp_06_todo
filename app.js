const btn = document.querySelector("#add-btn");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

btn.addEventListener("click", () => {
	const taskText = input.value;

	if (taskText !== "") {
		const newLi = document.createElement("li");

		// 1. Dodanie checkboxa (z poprzedniego zadania)
		const checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.addEventListener("change", () => {
			newLi.classList.toggle("completed", checkbox.checked);
		});

		// 2. Tworzenie przycisku "Usuń"
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Usuń";
		deleteBtn.style.marginLeft = "10px"; // Szybki odstęp

		// Obsługa usuwania elementu
		deleteBtn.addEventListener("click", () => {
			newLi.remove();
		});

		// 3. Składanie elementu li
		newLi.appendChild(checkbox);
		newLi.append(` ${taskText} `);
		newLi.appendChild(deleteBtn);

		list.appendChild(newLi);

		input.value = "";
	}
});
