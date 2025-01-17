import "./Login.css";

function Login() {
  return (
    <section className="login">
      <div className="login__container">
        <h2>Login</h2>
        <form>
          <input type="email" />
          <input type="password" />
          <button>Login to your account</button>
        </form>
      </div>
    </section>
  );
}

export default Login;
