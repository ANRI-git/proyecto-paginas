const emailError = document.getElementById('email-error');
const nameError = document.getElementById('name-error');
const lastnameError = document.getElementById('lastname-error');
const documentError = document.getElementById('document-error');
const degreeError = document.getElementById('degree-error');
const birthError = document.getElementById('birth-error');
const phoneNumberError = document.getElementById('phoneNum-error');
const technologyError = document.getElementById('tech-error');
const genderError = document.getElementById('gender-error');
const locationError = document.getElementById('zone-error');
const descError = document.getElementById('message-error');
const submitError = document.getElementById('submit-error');
const cvError = document.getElementById('cv-error');
const form = document.getElementById('form');

function validateName() {
  let name = document.getElementById('name').value;

  if (name.length == 0) {
    nameError.innerHTML = 'Ingrese un nombre';
    nameError.classList.add('invalid');
    return false;
  }
  nameError.classList.remove('invalid');
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateLastname() {
  let lastname = document.getElementById('lastname').value;

  if (lastname.length == 0) {
    lastnameError.innerHTML = 'Ingrese un apellido';
    lastnameError.classList.add('invalid');
    return false;
  }
  lastnameError.classList.remove('invalid');
  lastnameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateEmail() {
  let email = document.getElementById('email').value;

  if (
    !email
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    emailError.innerHTML = 'Email inválido';
    emailError.classList.add('invalid');
    return false;
  }
  emailError.classList.remove('invalid');
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateDocument() {
  let id = document.getElementById('document').value;
  if (id == '') {
    documentError.innerHTML = 'Ingrese un documento';
    documentError.classList.add('invalid');
    return false;
  }
  documentError.innerHTML = '<i class="fas fa-check-circle"></i>';
  documentError.classList.remove('invalid');
  return true;
}

function validateDegree() {
  let degree = document.getElementById('degree').value;

  if (degree.length == 0) {
    degreeError.innerHTML = 'Ingrese un estudio';
    degreeError.classList.add('invalid');
    return false;
  }
  degreeError.classList.remove('invalid');
  degreeError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateBirth() {
  let birth = document.getElementById('birth').value;
  console.log(birth.slice(0, 4));
  if (birth.slice(0, 4) > 2004 || birth == '') {
    birthError.innerHTML = 'Debe ser mayor de edad';
    birthError.classList.add('invalid');
    return false;
  }
  birthError.classList.remove('invalid');
  birthError.innerHTML = '<i class="fas fa-check-circle"></i>';
  document.getElementById('cvFile').removeAttribute('disabled');
  return true;
}

function validatePhone() {
  let phoneNumber = document.getElementById('phoneNum').value;
  if (phoneNumber == '') {
    phoneNumberError.innerHTML = 'Ingrese un número';
    phoneNumberError.classList.add('invalid');
    return false;
  }
  phoneNumberError.classList.remove('invalid');
  phoneNumberError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateTech() {
  let tech = document.getElementById('tech').value;
  if (tech == 'seleccionar') {
    technologyError.innerHTML = 'Ingrese un puesto';
    technologyError.classList.add('invalid');

    return false;
  }
  technologyError.classList.remove('invalid');
  technologyError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validateGender() {
  let gender = document.getElementById('gender').value;
  if (gender == 'seleccionar') {
    genderError.innerHTML = 'Ingrese un genero';
    genderError.classList.add('invalid');
    return false;
  }
  genderError.classList.remove('invalid');
  genderError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validateLocation() {
  let zone = document.getElementById('zone').value;
  if (zone == 'seleccionar') {
    locationError.innerHTML = 'Ingrese una ubicación';
    locationError.classList.add('invalid');
    return false;
  }
  locationError.classList.remove('invalid');
  locationError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}
function validateDesc() {
  let desc = document.getElementById('message').value;
  var left = 500 - desc.length;
  if (left < 0) {
    descError.innerHTML = '<i class="fas fa-times-circle"></i>';
    descError.classList.add('invalid');
    return false;
  }
  descError.classList.remove('invalid');
  descError.innerHTML = `Quedan ${left} caracteres`;
  return true;
}
function validateCV() {
  if (!validateBirth()) {
    document.getElementById('cvFile').setAttribute('disabled', '');
    cvError.style.display = 'block';
    cvError.classList.add('invalid');
    cvError.innerHTML = 'Debe ser mayor de edad';
    setTimeout(() => {
      cvError.style.display = 'none';
    }, 3000);
    return false;
  }
}
function validateCvError() {
  let cv = document.getElementById('cvFile').value;
  if (cv == null) {
    cvError.innerHTML = 'Debe ingresar un archivo';
    cvError.classList.add('invalid');
    return false;
  }
  cvError.classList.remove('invalid');
  cvError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateForm() {
  if (
    !validateEmail() ||
    !validateName() ||
    !validateLastname() ||
    !validateDocument() ||
    !validateDegree() ||
    !validateBirth() ||
    !validatePhone() ||
    !validateTech() ||
    !validateGender() ||
    !validateLocation() ||
    !validateDesc() ||
    !validateCvError()
  ) {
    submitError.style.display = 'block';
    submitError.innerHTML = '¡Complete todos los campos!';
    setTimeout(() => {
      submitError.style.display = 'none';
    }, 3000);
    return false;
  }
}
