let count = 0;
function increaseCount() {
    count = count + 1;
    document.getElementById("count").innerHTML = count;
}
//Go to the HTML page, find the element with id 'count',
//and change its inside text 
// to the value of the variable count