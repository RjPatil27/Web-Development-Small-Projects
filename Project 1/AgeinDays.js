//JavaScript file for Project 1

//JavaScript Code : Age into Days.
function AgeinDays(){
    let birthyear = prompt('What is your birthyear??');
    var agetodays = (2020 - birthyear) * 365;
    //console.log(agetodays);
    var h1 = document.createElement('h1');                  //createElement() used to create HTML tags in JS
    var textAnswer = document.createTextNode('You are ' + agetodays + ' Days old..!!')  //createTextNode() used to create to add Text in HTML tags.
    h1.setAttribute('id','AgeinDays');              //setAttribute() used to set  attributes in HTML tags like ID, Class etc.
    h1.appendChild(textAnswer);                     
    document.getElementById('flex-box-result').appendChild(h1);     //getElementById() used to get HTML ID of specific div or container.
}

function reset(){
    document.getElementById('AgeinDays').remove();
}
