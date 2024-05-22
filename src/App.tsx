import { useState } from 'react';
import { Header } from './Header'
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';
import { FormUser } from './FormUser';
import { Calendar } from './Calendar';

interface IData {
  id?: number;
  name: string;
  email: string;
  pass: string;
  admin: boolean;
}

function App() {

  const [arrUsers, setArrUsers] = useState<IData[]>(
    [
      {
        name: "Andres",
        email: "andresfelipe12311@gmail.com",
        pass: "12345",
        admin: true
      },
      {
        name: "Felipe",
        email: "andresfelipe12311_@hotmail.com",
        pass: "12345",
        admin: true
      }
    ]
  );
  const [loginState, setLoginState] = useState(true);
  const [signInState, setSignInState] = useState(false);
  const [adminState, setAdminState] = useState(true);

  const handleLoginChange = () => setLoginState(!loginState);
  const handleSignInChange = () => setSignInState(!signInState);
  const handleAdminChange = () => setAdminState(!adminState);
    
  return (
    <>
      <Header
        loginState={loginState}
        signInState={signInState}
        onLoginChange={handleLoginChange}
        onSignInChange={handleSignInChange}
        onAdminChange={handleAdminChange}
      />
      {
        (signInState && !loginState)? (
          <SignIn 
            onLoginChange={handleLoginChange}
          />
        ) : (loginState && adminState)? (
          <Calendar />
        ) : loginState? (
          <FormUser />
        ) : (
          <SignUp 
            onLoginChange={handleLoginChange}
          />
        )
      }
      
    </>
  )
}

export default App
