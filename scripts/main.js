let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/mozila.jpeg') {
        myImage.setAttribute('src', 'images/img1.jpeg')
    } else {
        myImage.setAttribute('src', 'images/mozila.jpeg')
    }
}

let myButton = document.querySelector('button');
let mHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字');
    if (!myName || myName === null) {
        setUserName();
    }
    localStorage.setItem('name', myName);
    mHeading.textContent = 'Hello ' + myName;
}

if (!localStorage.getItem('name')){
    setUserName();
} else {
    let name = localStorage.getItem('name');
    mHeading.textContent = 'Hello ' + name;
}

myButton.onclick = function(){
    setUserName();
}