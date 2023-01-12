import { useState } from "react";

export default function Login(prop) {
  const { setLogin } = prop;

  function loginHandler(e) {
    e.preventDefault();
    setLogin(e.target.userName.value, e.target.password.value);
  }
  return (
    <div>
      <form onSubmit={loginHandler}>
        <input type="text" name="userName" />
        <input type="password" name="password" />
        <button type="submit">Login</button>
        <input type="button" value="Register" />
      </form>
    </div>
  );
}
