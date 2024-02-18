
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn.js';
import SignUp from './SignUp.js';
import Layout from './Layout.js';
import NoPage from './NoPage.js';
import Profile from './Profile.js';
import MyEvents from './MyEvents.js';
import FindEvents from './FindEvents.js';


function App() {

  const [isSignedIn, setSignedIn] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn changeSignInState={ setSignedIn }/>} />
        <Route path="signup" element={<SignUp />} />
        <Route path="/user" element={<Layout signInState={ isSignedIn }/>}>
          <Route index element={<FindEvents />} />
          <Route path="/user/myevents" element={<MyEvents />}/>
          <Route path="/user/myprofile" element={<Profile />}/>
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;