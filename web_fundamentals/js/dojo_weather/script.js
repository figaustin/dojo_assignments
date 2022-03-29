function loadingWeather()
{
    alert('Loading weather report...')
}

function acceptedCookies(element)
{
    document.getElementById(element).remove();
}

var weekTemps = [75, 65 , 80, 66, 69, 61, 78, 70]

function convertTemp(arr)
{

    for (var i = 0; i < arr.length; i++)
    {
        document.getElementById(arr[i]).innerHTML = weekTemps[i] + '°'
    }
    
}