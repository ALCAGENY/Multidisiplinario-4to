 
 function validateUsername(username) {
  const regex = /^[A-Za-z]+$/;
  return regex.test(username.trim());  
  }
  
  function validatePassword(password) {
    return password.length >= 8;  
  }
  
  export { validateUsername, validatePassword };
  