const loginForm = document.querySelector('.login-form');

const validateInput = (inputObj) => {
  const username = inputObj.username.trim();
  const password = inputObj.password.trim();
  const role = inputObj.role.trim();

  if (username.includes(' ') || password.includes(' ') || role.includes(' ')) {
    alert('กรุณากรอกข้อมูล');
    return false;
  }

  if (username.length <= 3 || username.includes(' ')) {
    alert('กรุณากรอก username ให้มีความยาวมากกว่า 3 ตัวอักษร');
    changeColor('#username');
    return false;
  }

  if (password.length < 4 || !/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
    alert('กรุณากรอก password ให้มีความยาวมากกว่า 4 ตัว และต้องประกอบด้วยตัวเลขและตัวอักษร');
    changeColor('#password');
    return false;
  }

  if (role === '') {
    alert('กรุณาระบุลักษณะ');
    changeColor('#role');
    return false;
  }

  // เข้าสู่ระบบเมื่อผ่านการตรวจสอบเงื่อนไขทั้งหมด
  alert('Login Successful');
  window.location.href = 'https://www.wikipedia.com';
  return true;
};

const changeColor = (selector) => {
  const el = document.querySelector(selector);
  if (el) {
    el.style.border = '1px solid red';
    el.style.borderColor = 'red';
  }
};

const hdlLogin = (e) => {
  e.preventDefault();
  const inputObj = {};
  for (const el of loginForm.elements) {
    inputObj[el.id] = el.value;
  }
  validateInput(inputObj);
};

loginForm.addEventListener('submit', hdlLogin);
