let addTask = document.querySelector(".plus"),
  taskWriter = document.querySelector("#task"),
  toDoContent = document.querySelector(".todo-content"),
  toDoContentSpan = document.querySelectorAll(".task"),
  completed = document.querySelector(".task-completed"),
  count = document.querySelector(".task-count");
window.onload = function () {
  taskWriter.focus();
};

addTask.onclick = function () {
  if (taskWriter.value === "") {
    Swal.fire({
      icon: "error",
      title: "خطاء",
      text: "انت مكتبتش اي ملاحظات أكتب  ملاحظة الاول",
    });
  } else {
    if (taskWriter.value === toDoContent.children.textContent) {
      Swal.fire({
        icon: "error",
        title: "خطاء",
        text: "انت مكتبتش اي ملاحظات أكتب  ملاحظة الاول",
      });
    }

    noTasks = document.querySelector(".no-tasks");
    if (document.body.contains(noTasks)) {
      noTasks.remove();
    }
    let createTask = document.createElement("span");
    createTask.setAttribute("class", "task");
    let createTextTask = document.createTextNode(taskWriter.value),
      createDeletBtn = document.createElement("span"),
      createDeletBtnText = document.createTextNode("Delete");
    createDeletBtn.setAttribute("class", "delete");
    createDeletBtn.setAttribute("id", "delete");
    createDeletBtn.appendChild(createDeletBtnText);
    createTask.appendChild(createTextTask);
    createTask.appendChild(createDeletBtn);
    toDoContent.appendChild(createTask);
    taskWriter.value = "";
    taskWriter.focus();
    document.querySelector(".task-completed span").textContent =
      toDoContent.childElementCount;
  }
};
document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    Swal.fire({
      title: "هل أنت متأكد",
      text: "عند الضغط علي نعم سيتم حذف الملاحظه",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "نعم أحذف",
    }).then((result) => {
      if (result.value) {
        e.target.parentElement.remove();
      }
    });
  }
  document.querySelector(".task-completed span").textContent =
    toDoContent.childElementCount;
  if (toDoContent.childElementCount == 0) {
    msgNoTasks();
  }
  if (e.target.classList.contains("task")) {
    e.target.classList.toggle("finished");
    toDoContentfin = document.querySelectorAll(".todo-content .finished");
    document.querySelector(".task-count span").textContent =
      toDoContentfin.length;
  }
});
function msgNoTasks() {
  let msg = document.createElement("span"),
    msgText = document.createTextNode("لا توجد اي ملاحظات او مهام");
  msg.className = "no-tasks";
  msg.appendChild(msgText);
  toDoContent.appendChild(msg);
}
