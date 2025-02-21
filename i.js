const form = document.querySelector("form");
const input = document.querySelector("input");
const list = document.querySelector("#list");
let counter=1;

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const li = document.createElement("li");
    li.textContent = input.value;
    input.value = "";
    counter++;
    const buttonn = document.createElement("button");
    buttonn.textContent = "delete  button";
    const opsBtn = document.createElement("button");
    opsBtn.textContent = "opacity";
    li.append(buttonn,opsBtn);
    list.appendChild(li);

    buttonn.addEventListener("click",()=> {
        buttonn.parentElement.remove();
        });

    opsBtn.addEventListener("click",()=> {
        const parentEl = opsBtn.parentElement;
        parentEl.classList.toggle("complated");

        opsBtn.textContent = parentEl.classList.contains("complated")
        ? "Uncomplated"
        : "complated";
    });
});

