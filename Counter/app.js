// set inicial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {

    btn.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList;

        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else if (styles.contains("add-10")) {
            count += 10;
        } else if (styles.contains("add-0.5")) {
            count += 0.5;
        } else if (styles.contains("divideBy2")) {
            count /= 2;
        } else if (styles.contains("PohCaralho")) {
            window.close();
        } else {
            count = 0;
        }

        value.textContent = count;
    });
});