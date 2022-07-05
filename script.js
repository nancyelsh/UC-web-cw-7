// عرف المصفوفة هنا
let courses = [];

function addCourse() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let course = document.getElementById("course").value;

  let newCourse = { name: name, id: id, phone: phone, course: course };
  courses.push(newCourse);

  load();
  save();
}

function load() {
  let container = document.getElementById("container");
  container.innerHTML = "";
  courses.forEach((item, index) => {
    container.innerHTML += `<div>
  <h1>${item.name} - ${item.id}</h1>
  <h3>${item.course}</h3>
  <button id="${index}" onclick="removeCourse(event)">Delete Course</button>
  </div>`;
    console.log(index);
  });
}

function removeCourse(event) {
  let removedCourse = event.target.parentElement;
  removedCourse.remove();
  let index = event.target.id;
  console.log(index);
  courses.splice(index, 1);
  console.log(courses);
  load();
  save();
}

function save() {
  localStorage.setItem("courses", JSON.stringify(courses));
}

function read() {
  courses = JSON.parse(localStorage.getItem("courses")) || [];
  // courses == null ? (courses = []) : "";
  load();
}

read();
