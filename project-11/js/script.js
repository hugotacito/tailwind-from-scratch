const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const working = document.getElementById("working");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  menu.classList.toggle("flex");
  menu.classList.toggle("hidden");
  working.classList.toggle("invisible");
});

// Validate a URL
const validURL = (str) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  return !!pattern.test(str);
};

window.addEventListener("load", () => {
  const form = document.getElementById("link-form");
  const input = document.getElementById("link-input");
  const error = document.getElementById("err-msg");
  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    let message = "";

    if (input.value === "") {
      message = "Please enter something.";
    } else if (!validURL(input.value)) {
      message = "Please enter a valid URL.";
    }

    error.innerHTML = message;

    if (message !== "") {
      input.classList.add("border-red");
    } else {
      input.classList.remove("border-red");
      alert("Success!");
    }
  });
});
