
let main  = document.getElementById("blogs");

let data = JSON.parse(localStorage.getItem('user')) || [];

for (let i = 0; i < data.length; i++){
    const section = document.createElement("section");
    const title = document.createElement("h2");
    const content = document.createElement("p");
    const author = document.createElement("p");

    title.textContent = data[i].title;
    content.textContent = data[i].content;
    author.textContent = "posted by: " + data[i].username;

    section.append(title, content, author);
    main.append(section);
}

const backbtn = document.querySelector('#back');

backbtn.addEventListener('click', function (event) {
   event.preventDefault();
    window.location.href = "index.html";
});



const lightDarkMode = document.querySelector('#light-Dark-Mode');
const global = document.querySelector('.global');

let mode = 'dark';

lightDarkMode.addEventListener('click', function () {
  if (mode === 'dark') {
    mode = 'light';
    global.setAttribute('class', 'light');
  }
  else {
    mode = 'dark';
    global.setAttribute('class', 'dark');
  }
});
