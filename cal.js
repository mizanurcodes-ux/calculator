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


  const button = document.getElementById("colorBtn");

    button.addEventListener('click', () => {
      // Change background color
      document.body.style.backgroundColor = '#34495e';

      // Change button icon
      button.innerHTML = '<i class="bi bi-moon-stars-fill text-white"></i>';
    });