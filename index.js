document.querySelector('#btn').addEventListener("click", perfectNumber);


function perfectNumber (){
    var inputNumber= document.querySelector("#inpt").value;
    var textElement=document.querySelector('#text');

    var sum= 0;
    for (var i =1; i<inputNumber; i++) {
        if( inputNumber % i == 0) {
            sum+=i;
        }
    
    }
    if ( inputNumber ==0){
        textElement.innerText ="It's not a number!"
    }else if (sum == inputNumber) {
        textElement.innerText = "It s a perfect number";
    }else {
        textElement.innerText ="It s not a perfect number"
    }
    document.querySelector("#inpt").focus();
    document.querySelector("#inpt").value="";
}


