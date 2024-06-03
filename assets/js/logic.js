const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
 
  let userentry = JSON.parse(localStorage.getItem('user')) || [];

  const user = {
    username: usernameInput.value.trim(),
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
  };

userentry.push(user);


  if ((usernameInput.value == null || usernameInput.value == "") || (titleInput.value == null || titleInput.value == "") || (contentInput.value == null || contentInput.value == ""))
    {alert("Please Fill In All Fields");}
    else {
        localStorage.setItem("user", JSON.stringify(userentry)); 
        window.location.href = "post.html";}
  
});