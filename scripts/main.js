let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/jui.jpg'){
        myImage.setAttribute('src', 'images/jui2.jpg');
    }
    else{
        myImage.setAttribute('src', 'images/jui.jpg');
    }
}

/*let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null){
        setUserName();
    } else{
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'I am the boss, ' + myName;

    }
    
}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'I am the boss, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}*/