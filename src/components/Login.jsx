import { useState } from 'react';

function Login() {
  const [data, setData] = useState({ username: '', password: '' });

  const handleSubmit = event => {
    event.preventDefault();
    console.log(data);
    alert(JSON.stringify(data));
  };

  const handleInputChange = (e, name) => {
    setData({ ...data, [name]: e.target.value });
  };

  return (
    <>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={e => handleInputChange(e, 'username')}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            value={data.password}
            onChange={e => handleInputChange(e, 'password')}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
