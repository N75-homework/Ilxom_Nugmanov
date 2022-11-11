var $reset = document.querySelector('.reset');
var $left = document.querySelector('.left');
var $right = document.querySelector('.right');
var $son = document.querySelector('.son');
var i = 1;


$left.addEventListener('click' , function (){
 $son.textContent =  i--;
})
$reset.addEventListener('click' , function (){
    $son.textContent = 0;
})
$right.addEventListener('click' , function (){
    $son.textContent =  i++;
})
