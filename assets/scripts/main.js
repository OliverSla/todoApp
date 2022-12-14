let todoInput = document.querySelector(".todoInput");
let taskWrapper = document.querySelector(".taskWrapper");

let localTasks = getLS();

todoInput.addEventListener("submit", function (e) {
  e.preventDefault();
  let inputValue = e.target.elements.textInput.value;

  if (inputValue === "") {
    alert("Please, write something to create a task");
  } else {
    let taskObject = {
      id: uuidv4(),
      taskText: inputValue,
      check: false,
    };

    localTasks.push(taskObject);

    createStructure(taskObject);
    setTodosToLS(localTasks);

    e.target.elements.textInput.value = "";
  }
});

/* Load tasks form localstorage */

if (localTasks.length > 0) {
  localTasks.forEach(function (oneTask) {
    createStructure(oneTask);
  });
} else {
  if (localTasks.length > 0) {
    let appFooter = document.querySelector(".appFooter");
    appFooter.style.display = "flex";
  } else {
    let appFooter = document.querySelector(".appFooter");
    appFooter.style.display = "none";
  }

  count();
}

deleteAllTasks();
