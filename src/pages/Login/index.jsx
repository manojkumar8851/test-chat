import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from '../../Redux/userSlice';
import { useForm } from 'react-hook-form';
import { apiDomain } from '../../Utility/constant';
import apiCalll from '../../Utility/apiCalll';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/userSlice';
// import { login } from '../../Redux/userSlice';
// ER-2322203501 , 2414000028
// 

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  // const dummyUsername = 'dummyUser';
  // const dummyPassword = 'dummyPass';

  // console.log(`Valid Dummy Credentials:\nUsername: ${dummyUsername}\nPassword: ${dummyPassword}`);

  const onSubmit = (data) => {
    console.log(data);
    reset();
    let valid = true;
    if (valid) {
      const url = apiDomain + "/auth/login"
      console.log(url);

      apiCalll(url, {
        method: "POST",
        payload: {
          email: data.username,
          password: data.password,
        }
      }).then(({ user, token }) => {
        console.log("this is", token);

        localStorage.setItem("token", token)
        dispatch(login(user))
        navigate("/chat")
      }).catch(err => {
        console.log(err);

      })
    }

    // Dispatch login action with dummy user details
    // const dummyUser = { username: dummyUsername, password: dummyPassword };
    // dispatch(login(dummyUser));
    // Navigate(`/chat/signup`);
  };

  return (
    <>
    <div className='flex justify-between'>
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
      <div>
        right
      </div>

    </div>

    </>

  );
}

export default Login;