let contents = document.getElementById('main-content');
let menus = document.getElementById('menu-container');
let progressBar = document.getElementById('progress');

let previousTopicIndex = 0;
let currentTopicIndex = 0;
let progressValue = 0;
let progressPercentage = 0;

let finishedTopics = new Array();

for (let i = 0; i < contents.childElementCount; i++) {
    contents.children[i].classList.add('d-none');
}

//currentTopicIndex = contents.childElementCount - 1; //delete this
changeMenu(false);
updateProgress();

function updateProgress() {
    progressPercentage = Math.floor((progressValue / menus.childElementCount) * 100);
    let html = '<div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="--value:' + progressPercentage + '"></div>';
    progressBar.innerHTML = html;
}
//side bar menu list click
function menuClick(el) {

    if (previousTopicIndex != currentTopicIndex) {
        previousTopicIndex = currentTopicIndex;
    }
    for (let i = 0; i < el.parentElement.childElementCount; i++) {

        if (el == el.parentElement.children[i]) {
            currentTopicIndex = i;
            break;
        }
    }

    //change menu
    changeMenu(false);
}

//change menu and display data after
function changeMenu(isFinished) {
    menus.children[previousTopicIndex].classList.remove("li-active");
    menus.children[previousTopicIndex].classList.add("li-normal");
    menus.children[currentTopicIndex].classList.add('li-active');

    if (isFinished) {
        //update the value of the progress bar
       if(!checkTopic(menus.children[previousTopicIndex])){
            progressValue += 1;;
            updateProgress();
            finishedTopics.push(menus.children[previousTopicIndex]);

            //collect your progress to local storage
            collectData();
       }
        menus.children[previousTopicIndex].children[1].children[0].classList.add("li-icon-active");
    }
    //display data
    displayData();
    scroll();
}

//check if topic in on the list
function checkTopic(topic){
    return finishedTopics.indexOf(topic) < 0 ? false : true;
}

//next button is clicked and change menu after
function next(el) {
    for (let i = 0; i < el.parentElement.parentElement.parentElement.childElementCount; i++) {
        if (el.parentElement.parentElement == el.parentElement.parentElement.parentElement.children[i]) {
            previousTopicIndex = i;
            currentTopicIndex = i + 1;
            if(currentTopicIndex == el.parentElement.parentElement.parentElement.childElementCount){
                currentTopicIndex = currentTopicIndex - 1;
            }

            break;
        }
    }
    //change menu
    changeMenu(true);
}
//prev button is clicked and change menu after
function prev(el) {
    for (let i = 0; i < el.parentElement.parentElement.parentElement.childElementCount; i++) {
        if (el.parentElement.parentElement == el.parentElement.parentElement.parentElement.children[i]) {
            previousTopicIndex = i;
            currentTopicIndex = i - 1;
            break;
        }
    }
    //change the menu
    changeMenu(false);
}

//display data
function displayData() {
    contents.children[previousTopicIndex].classList.add('d-none');
    contents.children[currentTopicIndex].classList.remove('d-none');
}

//edit code from the current topic examples
function editToggle(id, code) {
    let textArea = document.getElementById(id);
    let codeElement = document.getElementById(code);

    textArea.classList.remove('d-none');
    textArea.children[0].value = codeElement.innerText;

    textArea.parentElement.children[1].children[0].classList.add('d-none');
    textArea.parentElement.children[1].children[1].classList.remove('d-none');
    //calling function from editor js
    reload();
}

let type = "";
//init. learn type
function initLearnType(t){
    localStorage.clear();
    type = t;
    loadData();
}

//saved in local storage
function collectData(){
    if(type != ""){
        let key = type + 'indexes';
        let value = localStorage[key] || '';
        value += "-" + previousTopicIndex.toString();

        saveData(key, value);

        key = type + 'progress';
        value = progressPercentage;
        saveData(key, value);

    }
}

function saveData(key, value){
    localStorage[key] = value;
}

function loadData(){
    let key = type + 'indexes';
    let value  = localStorage[key] || '';

    if(value != ""){
        let values = value.toString().split('-');
        for(let i = 1; i < values.length; i++){
            previousTopicIndex = currentTopicIndex;
            currentTopicIndex = values[i];
            changeMenu(true);
        }
        previousTopicIndex = values[values.length - 1];
        changeMenu(true);
   }
}

function scroll() { 
    //let y = contents.scrollTop;
    //let i = window.scrollY;

    window.scrollTo(0, 358);
    contents.scrollTo(0, 0);

    //alert("window: " + i + " content: " + y + "px");
}