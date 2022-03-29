
function removeUser(element)
{
    document.getElementById(element).remove();
}


var nameArray = ['Not Jane Doe', 'Doe Jane', 'John Doe' ]
function changeName(element)
{
    document.getElementById(element).innerHTML = nameArray[Math.floor(Math.random() * nameArray.length)];
}