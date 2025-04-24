import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { login } from '../../Redux/userSlice';
import { useForm } from 'react-hook-form';

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const { register, handleSubmit, formState: { errors } ,reset} = useForm();

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const dummyUsername = 'dummyUser';
  // const dummyPassword = 'dummyPass';

  // console.log(`Valid Dummy Credentials:\nUsername: ${dummyUsername}\nPassword: ${dummyPassword}`);

  const onSubmit = (data) => {
    console.log(data);
    reset();

    // // Dispatch login action with dummy user details
    // const dummyUser = { username: dummyUsername, password: dummyPassword };
    // dispatch(login(dummyUser));
    // navigate(`/chat/signup`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <input {...register("username", { required: true })} placeholder='username' />
        {errors.username && <p>this is req</p>}
        <input {...register("password", { required: true })} placeholder='password' />
        {errors.password && <p>paasword is must</p>}
        <button type='submit' >Login</button>
      </form>


      <Link to="/signup">
        register yourself
      </Link>
    </div>
  );
}

export default Login;