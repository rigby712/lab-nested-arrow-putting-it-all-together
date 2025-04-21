function createLoginTracker(userInfo) {
    let attemptCount = 0;
  
    return (passwordAttempt) => {
      attemptCount++;
  
      if (attemptCount > 3) {
        return "Account locked due to too many failed login attempts";
      }
  
      if (passwordAttempt === userInfo.password) {
        return "Login successful";
      } else {
        return `Attempt ${attemptCount}: Login failed`;
      }
    };
  }
  
  // Example testing
  const user = { username: "andrew", password: "secret123" };
  const login = createLoginTracker(user);
  
  console.log(login("123"));           // Attempt 1: Login failed
  console.log(login("notright"));      // Attempt 2: Login failed
  console.log(login("secret123"));     // Login successful
  console.log(login("wrongagain"));    // Account locked due to too many failed login attempts
  