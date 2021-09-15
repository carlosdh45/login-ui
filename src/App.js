import "./App.css";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      {
        <div className="login-container">
          <div className="login-content">
            <div className="login-form">
              <div className="forms-content">
                <h1>Let's set up your account</h1>
                <div className="signIn-quote">
                  <p>Already have an account?</p>
                  <h3>Sign in</h3>
                </div>
                <Form />
                <div className="terms-quote">
                  <p>
                    By clicking the "Next" button, you agree to creating a free
                    account, and to <span>Terms of Services</span> and{" "}
                    <span>Privacy Policy.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="login-description">
              <h1>Dummy Heading</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                architecto maiores aliquid sapiente doloribus. Ducimus
                consequuntur quae itaque molestiae ratione!
              </p>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default App;
