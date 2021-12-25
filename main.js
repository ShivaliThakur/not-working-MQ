function login(){
    Player1_name= document.getElementById("player1_name").value;
    Player2_name= document.getElementById("player2_name").value;
    localStorage.setItem("player1", Player1_name);
    localStorage.setItem("player2", Player2_name);
    window.location="gameye.html";
}