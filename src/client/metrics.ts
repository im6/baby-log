if (window.location.pathname === "/metrics-ui") {
  let cur = 0;

  window.addEventListener("DOMContentLoaded", () => {
    const btns = document.querySelectorAll("[data-amt]");
    const inputBox = document.querySelector("input") as HTMLInputElement;
    const submitBtn = document.getElementById("submit") as HTMLButtonElement;

    for (let i = 0; i < btns.length; i += 1) {
      btns[i].addEventListener("click", (evt) => {
        evt.preventDefault();
        // @ts-ignore
        const changeNum = parseInt(evt.target.dataset.amt);
        cur += changeNum;
        inputBox.value = cur.toString();
      });
    }

    submitBtn.addEventListener("click", (evt) => {
      if (cur < 10) {
        evt.preventDefault();
      }
    });
  });
}
