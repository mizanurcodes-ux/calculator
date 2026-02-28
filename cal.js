function appendValue(val){
    document.getElementById('display').value += val;
}

function cleanDisplay(){
    document.getElementById('display').value = '';
}

function calculate(){
    try {
        document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch {
        alert("Invalid Expression");
    }
}