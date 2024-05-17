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
    
  return (
    <>
      <Header
        loginState={loginState}
        signInState={signInState}
      />
      {
        (signInState && !loginState)? (
          <SignIn />
        ) : (loginState && adminState)? (
          <Calendar />
        ) : loginState? (
          <FormUser />
        ) : (
          <SignUp />
        )
      }
      
    </>
  )
}

export default App
