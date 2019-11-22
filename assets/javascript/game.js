//1. 각각 보석에 랜덤한 숫자를 지정하고 랜덤하게 목표숫자도 지정을 해준다.  
//2. 유저가 보석을 클릭할 때마다 그 보석에 지정된 숫자를 토탈 스코어에 더해준다. 
//3. 토탈 스코어가 목표숫자보다 클 경우 losses가 하나 올라가고 게임이 리셋된다. 
//4. 토탈 스코어가 목표숫자보다 작을 경우 게임이 계속 진행된다. 
//5. 토탈 스코어가 목표숫자와 같을 경우 wins가 하나 올라가고 게임이 리셋된다. 

var scores = [0,0,0,0];
var goalScore = 0;
var totalScore = 0;
var losses = 0;
var wins = 0;

function setRandomScores(){
    for(var i=0; i<scores.length; i++){
        scores[i] = getRandomScore();
    }
}

function getRandomScore(){
    return Math.floor(Math.random()*12)+1; 
    //숫자 0을 출력하지 않게하기 위해 +1 사용. 
}

function getRandomGoalScore(){
    // return Math.floor(Math.random()*(120-20))+19;
    return Math.floor(Math.random()*(101))+19;//19-119
}

function allReset(){
    if(wins === 5 || losses === 5){
        wins = 0;
        losses = 0;
        $("#losses").text("losses: "+losses);
        $("#wins").text("wins: " + wins);
    }
}

function gameReset(){
    allReset();
    setRandomScores();
    goalScore = getRandomGoalScore();
    totalScore = 0;
    $("#totalScore").text(totalScore);//text는 jquery의 function 중 하나. html에 업데이트 
    $("#totalScore").text("Your total score is: "+ totalScore);
    $("#goalScore").text("Goal Score is: " + goalScore);
}

function checkScore(){
    $("#totalScore").text(totalScore);
    $("#totalScore").text("Your total score is: "+ totalScore);
    if(goalScore < totalScore){
        losses++;
        $("#losses").text("losses: "+losses);
        gameReset();
    }else if(goalScore === totalScore){
        wins++;
        $("#wins").text("wins: " + wins);
        gameReset();
    }
}




gameReset();
$("#img1").click(function(){
    totalScore += scores[0];
    checkScore();
});
$("#img2").click(function(){
    totalScore += scores[1];
    checkScore();
});
$("#img3").click(function(){
    totalScore += scores[2]; 
    checkScore(); 
});
$("#img4").click(function(){
    totalScore += scores[3];
    checkScore();
});
//$("#img1").on("click", function(){console.log("")}; = 위의 식과 같음. 