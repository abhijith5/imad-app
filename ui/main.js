console.log('Loaded!');
var button=document.getElementById('counter');
var counter=0;
button.onclick = function () {
    console.warn("Sda")
    //make a requset to the counter endpoint
    
    //Capture the response and store to a variable
    
    //render the correct variable ti the correct span
    
    counter = counter +1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};