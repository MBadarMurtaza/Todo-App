const input = document.getElementById("inputBox");
const addButton = document.getElementById("addButton");
const allTasks = document.getElementById("taskList");

function addTask() {
  if (input.value == "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    input.value = "";
    li.className =
      "task-item relative text-[17px] py-[12px] pr-[8px] pl-[50px] select-none cursor-pointer text-black";

    li.style.setProperty("--task-image", "url('/images/unchecked.png')");
    allTasks.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "&#x2715";
    span.className =
      "absolute right-0 top-[5px] size-[40px] text-[22px] text-[#555] leading-[40px] text-center rounded-[50%] hover:bg-[#edeef0] ";
    li.appendChild(span);
    saveData();
  }
}
allTasks.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("line-through");
      if (e.target.classList.contains("line-through")) {
        e.target.style.color = "#555";
        e.target.style.setProperty(
          "--task-image",
          "url('/images/checked.png')"
        );
        saveData();
      } else {
        e.target.style.color = "black";
        e.target.style.setProperty(
          "--task-image",
          "url('/images/unchecked.png')"
        );
        saveData();
      }
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", allTasks.innerHTML);
}

function showData() {
  allTasks.innerHTML = localStorage.getItem("data");
}
showData();
