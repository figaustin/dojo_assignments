
var x = [0, 0, 0];
function addLike(element, index)
{
    x[index]++;
    document.getElementById(element).innerHTML = x[index] + ' likes'
}