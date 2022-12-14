//if (document.readyState === "complete") {
// Document already fully loaded
//  ready();
//} else {
// Add event listener for DOMContentLoaded (fires when document is fully loaded)

//}

document.addEventListener('DOMContentLoaded', ready)

function ready() {

  const form = document.querySelector('form');
  const firstName = document.getElementById("first-name")
  const lastName = document.getElementById("last-name")
  const email = document.getElementById("email")


  function validateName(e, element) {
    if (element.value.length < 3) {
      element.validity.valid = false;
      element.classList.add("invalid");
      element.setCustomValidity(`Input is too short, it's only ${element.value.length} letters long`);
      element.reportValidity();
      e.preventDefault();
      console.log("Bad Input");
      return;   
      } else {
      element.validity.valid = true;
      element.classList.remove(`invalid`);
      element.setCustomValidity('');
      element.reportValidity();
      }
  }

  function validateEmail(e, element) {
    //check email
    // const emailRegex = new RegExp('\\w+@\\w+\\.\\w+');
    // emailRegex.test(element.value)
    if (/\w+@\w+\.\w+/.test(element.value)) {
      element.validity.valid = true;
      element.classList.remove('Invalid')
      element.setCustomValidity('');
      element.reportValidity();
    } else {
      element.classList.add('Invalid')
      element.setCustomValidity(`Invalid email. it should be /\w+@\w+\.\w+/ format.`)
      element.reportValidity();
    }
  }


  firstName.addEventListener('change', (e) => {
    validateName(e, firstName)
  })
  lastName.addEventListener('change', (e) => {
    validateName(e, lastName)
  })

  email.addEventListener('change', (e) => {
    validateEmail(e, email)
  })

  form.addEventListener('submit', (e) => {
    validateName(e, firstName)
    validateName(e, lastName)
    validateEmail(e, email)
  });


}
