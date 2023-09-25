import './App.css';
import { LandingPage } from './components/LandingPage';
import { ShippingLogin } from './components/ShippingLogin';
import LoginSignup from './components/login-signup/LoginSignup';

function App() {
  return (
    <>
    {/* // You need to tag your components here */}
    <LandingPage></LandingPage>
    <ShippingLogin></ShippingLogin>
    {/* <LoginSignup></LoginSignup> */}
    </>
  );
}

export default App;
