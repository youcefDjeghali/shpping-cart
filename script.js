var btnPlus = document.getElementsByClassName('add_btn');
var btnMoins = document.getElementById('delete_btn');
var Remove1 = document.querySelectorAll('.remove');
var Price = document.getElementById('price');
var Part1 =document.querySelector('.part1');
var Part2 =document.querySelector('.part2');


console.log(Remove1);
var Total=document.getElementById('box4');





for (let index = 0; index < Remove1.length; index++) {

    Remove1[index].addEventListener('click',function(event) {
        var btnClicked = event.target
        console.log(btnClicked);
        btnClicked.parentElement.remove()
 }
    )}



    





 