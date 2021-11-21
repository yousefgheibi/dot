document.querySelector(".btn").addEventListener("click", () => {
  let count = 0;
  let str = document.querySelector("input").value;
  str = str.replace(/(^\s*)|(\s*$)/gi, "");
  str = str.replace(/[ ]{2,}/gi, " ");
  str = str.replace(/\n /, "\n");

  for (let i = 0; i < str.length; i++) {
    for (let [key, value] of Object.entries(obj)) {
      if (key == str[i]) {
        count = count + f(value);
      }
    }
  }
  document.querySelector(".result").innerHTML = count;
});
