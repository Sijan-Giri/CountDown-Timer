const endDate = "14 Februrary 2027 10:14 AM";
const inputEl = document.querySelectorAll("input");
const endDateEl = document.querySelector("#endDate");
const resultEl = document.querySelector(".result");

endDateEl.innerText = endDate;

const clock = () => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) /1000;

    if(diff <= 0) {
        resultEl.innerText = "Time over!!";
        return;
    }

    inputEl[0].value = Math.floor(diff / 3600 / 24);
    inputEl[1].value = Math.floor(diff / 3600) % 24;
    inputEl[2].value = Math.floor(diff / 60) % 60;
    inputEl[3].value = Math.floor(diff) % 60;

}

clock();

setInterval(()=> {
    clock();
},1000)