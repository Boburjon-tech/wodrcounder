const input = document.querySelector(".textWriterPlace");

input.addEventListener("input", ()=> {
    let element = {};
    const list = document.querySelector(".list");
    const elementCounter = [];
    const elements = input.value.split("");
    elements.forEach((el) => {
        const item = elementCounter.find((e) => {
            return Object.keys(e)[0] == el;
        });
        if (item) {
            item[el]+=1;
        } else {
            element[el] = 1;
            elementCounter.push(element);
        }
        element = {};
    });
    console.log(elementCounter);

    list.textContent = "";
    elementCounter.forEach((el) => {
        const length = input.value.length;
        const key = Object.keys(el)[0];
        
        console.log(key );

        const item = document.createElement("li");
        const wrapper = document.createElement("div");
        const proccess = document.createElement("div");
        const result = document.createElement("div");
        const spanChar = document.createElement("span");
        const spanCount = document.createElement("span");
        const spanPersent = document.createElement("span");

        wrapper.classList.add("wrapper");
        proccess.classList.add("proccess");
        wrapper.appendChild(proccess);

        proccess.style.width = (el[key]/length)*100;

        spanChar.textContent = key;
        spanCount.textContent = `${el[key]}, `;
        spanPersent.textContent = `${((el[key]/length)*100).toFixed(2)}%`;
        result.classList.add("result");
        result.append(spanCount, spanPersent);
        item.append(spanChar,wrapper,result)
        list.appendChild(item);
    });
});

