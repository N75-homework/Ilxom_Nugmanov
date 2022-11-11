var $btn = document.querySelector('.btn');
var $body = document.getElementsByTagName('body')[0]


$body.style.display = 'flex'
$body.style.justifyContent = 'center'
$body.style.alignItems = 'center'
$body.style.height = '100vh'
$btn.style.padding = '1rem 6rem'
$btn.style.fontSize = '36px'

function numberRondom() {
    var number = Math.floor(Math.random() * 256)
    return number
    
}
$btn.addEventListener('click', function () {
    var r = numberRondom()
    var g = numberRondom()
    var b = numberRondom()
    
    $body.style.backgroundColor = `rgb(${r},${g},${b})`
    $btn.textContent = `rgb(${r},${g},${b})`
    
    $btn.style.color = `rgb(${r},${g},${b})`
})