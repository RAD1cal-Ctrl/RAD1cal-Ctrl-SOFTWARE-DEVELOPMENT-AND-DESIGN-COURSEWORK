/* const nameSection = document.getElementById('name')
const passwordSection = document.getElementById ('password')
const errorElement = document.getElementById('error')
const formSection = document.getElementById ('form')

Form.addEventListener('submit', (e)=>{
    let messages = []
    if (nameSection.value === ''|| nameSection.value == null) {
        messages.push('Name is required')
    }

    if (passwordSection.value.length <= 6){
        messages.push('Password must be longer then 6 characters')
    }
    if (messages.length > 0){
        e.preventDefault()//prevents submition
        errorElement.innerText = messages.join(', ') //joins messaged with ,
    }
}) */

    function validatePassword() {
        const passwordInput = document.getElementById('password');
    
        if (passwordInput.value.length < 6) {
          alert("Password must be at least 6 characters long.");
        }
      }