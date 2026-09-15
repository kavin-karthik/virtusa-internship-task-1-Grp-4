function changeTheme() {

    document.body.classList.toggle("dark");

    let button = document.querySelector("button");

    if (document.body.classList.contains("dark")) {
        button.innerHTML = "Light Mode";
    } else {
        button.innerHTML = "Dark Mode";
    }
}