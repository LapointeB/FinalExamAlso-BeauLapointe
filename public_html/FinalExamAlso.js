/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
document.getElementById("ifDare").addEventListener("click", findResult);

function findResult() {
    let rand = Math.ceil(Math.random() * 999);
    document.getElementById("dispRes").innerHTML = "You have " + rand + " days until it's over. Have fun. :)";
}



