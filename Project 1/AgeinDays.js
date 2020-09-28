//JavaScript file for Project 1


//JavaScript Code : Age into Days.
function AgeinDays(){
    let birthyear = prompt('What is your birthyear??');
    var agetodays = (2020 - birthyear) * 365;
    //console.log(agetodays);
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + agetodays + ' Days old..!!')
    h1.setAttribute('id','AgeinDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('AgeinDays').remove();
}
