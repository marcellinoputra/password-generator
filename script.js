function getPassword() {
  const chars =
    "1234567890QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm~!@#$%^&*()_+{}|:<>?-=[];',./'";
  let passwordLength = 16;
  let password = '';

  for (let i = 0; i < passwordLength; i++) {
    let randNum = Math.floor(Math.random() * chars.length);

    password += chars.substring(randNum, randNum + 1);
    console.log(password);
  }
  document.getElementById('password').value = password;
}
