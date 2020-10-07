//Project 3: Rock, Paper, Scissors

function rpsGame(yourChoice){
    console.log(yourChoice.id);
    var humanchoice, computerchoice;
    humanchoice = yourChoice.id;
    computerchoice = ['rock','paper','scissors'][randomNumber()];
    console.log(computerchoice);
    results = DecisionMaker(humanchoice,computerchoice);  //it will return result as 0 or 1 or 0.5 (win, lose, tied)
    console.log(results);
    message = FinalMessage(results); //It will return final msg as in key value pair ('message':'You Win','color':'green')
    console.log(message.msg);
    ShowFinalResult(humanchoice,computerchoice,message);  //This function will show final result with humanchoice, computerchoice and result
}

function randomNumber(){
    return Math.floor(Math.random() * 3);
}

function DecisionMaker(humanchoice, computerchoice){
    if (humanchoice == computerchoice) {
        tie = 0.5;
        return tie;
    }else{
        if ((humanchoice== "rock" && computerchoice == "paper") || (humanchoice== "paper" && computerchoice == "scissors") || (humanchoice== "scissors" && computerchoice == "rock")) {    //(H,C) combinations : (rock,paper)(paper,scissors)(scissors,rock)
            lost = 0;
            return lost;
        }
        else{
            win = 1;
            return win;
        }
    }
}

function FinalMessage(results){
    if (results == 0.5) {
        let tiemsg = {msg:'You Tied..!!', color:'orange'};
        return tiemsg;
    }

    if (results == 0) {
        let losemsg = {msg:'You Lose..!!', color:'red'};
        return losemsg;
    }else{
        let winmsg = {msg:'You Win..!!', color:'green'};
        return winmsg;
    }
}

function ShowFinalResult(humanchoice,computerchoice
    , message){

        
        document.getElementById('rock').remove();
        document.getElementById('paper').remove()
        document.getElementById('scissors').remove()

        //Human Choice show
        // Method-1
        var humanresult = document.createElement('img');
        var div = document.getElementById('flex-box-container-div');
        humanresult.src = humanchoice.concat('.jpg');
        humanresult.height = 150;
        humanresult.width = 170;
        console.log(humanresult);
        console.log(humanchoice.concat('.jpg'));
        div.appendChild(humanresult);

        //Method-2
        // var humanresult = document.createElement('div');
        // humanresult.innerHTML = "<img src='" + humanchoice +  ".jpg' height=150 width=170>";
        // console.log(humanresult);
        // div.appendChild(humanresult);


        //Final Message show
        var Finalmsg = document.createElement('h2');

        if(message.color == 'green'){
            Finalmsg.className = 'text-success';
        }else{
            if(message.color == 'red'){
                Finalmsg.className = 'text-danger text-center';
            }else{
                Finalmsg.className = 'text-primary text-center';
            }
        }
        // Finalmsg.className = 'text-center';            

        var text = document.createTextNode(message.msg);
        console.log(Finalmsg.appendChild(text));
        // console.log(Finalmsg);
        div.appendChild(Finalmsg);



        //Computer Choice show

        //Method - 1

        var computerresult = document.createElement('img');
        computerresult.src = computerchoice.concat('.jpg');
        computerresult.height = 150;
        computerresult.width = 170;
        div.appendChild(computerresult);

        //Method - 2
        // var computerresult = document.createElement('div');
        // computerresult.innerHTML = "<img src='" + computerchoice + ".jpg' height=150 width=170>";
        // console.log(computerresult);
        // div.appendChild(computerresult);


}
