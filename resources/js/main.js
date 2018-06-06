// document.getElementById('add').onclick


// function buttonClick(){
//     console.log('Button Clicked');
// }

//whem user clicked on the add button
//if there is any text inside the item field, add that text to todo list
document.getElementById('add').addEventListener('click', function() {
    var value = document.getElementById('item').value;
    if(value) {
        console.log('There was a value!');
    }
});


// window.onload=function(){
//     console.log(document.getElementById(add));
// }