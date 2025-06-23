const decreasebtn = document.querySelector(".decreasebtn");
const resetbtn = document.querySelector(".resetbtn");
const increasebtn = document.querySelector(".increasebtn");
const counterlabel = document.querySelector(".counterlabel");
let count = 0;

decreasebtn.onclick = function() {
    count--;
    counterlabel.textContent = count;
}


increasebtn.onclick = function() {
    count++;
    counterlabel.textContent = count;
}



resetbtn.onclick = function() {
    count = 0;
    counterlabel.textContent = count;
};
