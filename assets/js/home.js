let btns = document.getElementsByTagName("button");


// // btnss.array.forEach(i => {
    
// // });

for(let i=0;i<btns.length;i++){
    if(btns[i].innerHTML === 'personal'){
        btns[i].style.backgroundColor = 'blue';
    }
    else if(btns[i].innerHTML === 'work'){
        btns[i].style.backgroundColor = 'purple';
        
    }
    else if(btns[i].innerHTML === 'school'){
        btns[i].style.backgroundColor = 'orange';
        
    }
    else if(btns[i].innerHTML === 'cleaning'){
        btns[i].style.backgroundColor = 'green';
        
    }
    else if(btns[i].innerHTML === 'others'){
        btns[i].style.backgroundColor = 'black';

    }
}