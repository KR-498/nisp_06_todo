const btn = document.querySelector("#add-btn");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

// 1. Funkcja zapisująca stan listy do LocalStorage
function saveTasks() {
	const tasks = [];
	document.querySelectorAll("#task-list li").forEach((li) => {
		tasks.push({
			text: li.childNodes[1].textContent.trim(), // Pobiera sam tekst zadania
			completed: li.classList.contains("completed"),
		});
	});
	localStorage.setItem("myTasks", JSON.stringify(tasks));
}

// 2. Funkcja tworząca element listy (reusable)
function createTaskElement(text, isCompleted = false) {
	const newLi = document.createElement("li");
	if (isCompleted) newLi.classList.add("completed");

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.checked = isCompleted;
	checkbox.addEventListener("change", () => {
		newLi.classList.toggle("completed", checkbox.checked);
		saveTasks(); // Zapisz po zmianie stanu
	});

	const deleteBtn = document.createElement("button");
	deleteBtn.textContent = "Usuń";
	deleteBtn.addEventListener("click", () => {
		newLi.remove();
		saveTasks(); // Zapisz po usunięciu
	});

	newLi.appendChild(checkbox);
	newLi.append(` ${text} `);
	newLi.appendChild(deleteBtn);
	list.appendChild(newLi);
}

// 3. Wczytywanie zadań przy starcie aplikacji
const savedTasks = JSON.parse(localStorage.getItem("myTasks")) || [];
savedTasks.forEach((task) => createTaskElement(task.text, task.completed));

// 4. Obsługa przycisku "Dodaj"
btn.addEventListener("click", () => {
	if (input.value !== "") {
		createTaskElement(input.value);
		saveTasks(); // Zapisz po dodaniu nowego
		input.value = "";
	}
});
