import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { login } from '../../Redux/userSlice';
import { useForm } from 'react-hook-form';
import { apiDomain } from '../../Utility/constant';
import apiCalll from '../../Utility/apiCalll';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/userSlice';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
// import { login } from '../../Redux/userSlice';
// ER-2322203501 , 2414000028
// 

function Login() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = useSelector((state)=>state.appConfig.themeMode)
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
      <Container maxWidth="xl">
        <Box className='h-[calc(100vh-54px)] bg-gren-200  flex  items-center justify-center '>
          {/* <Paper elevation={4} sx={{width:"50%", display:"flex",alignItems:"center",justifyContent:"center" }}> */}

          <Box className='flex  items-center justify-center h-4/5 border  w-[80%] shadow-md shadow-orange-600 rounded ' sx={{fontSize : '1em'}}>
            <Box className='border  flex items-center justify-center w-[50%]  text-center pl-10'>
              <form className='border w-[70%]' onSubmit={handleSubmit(onSubmit)}>
                <Typography variant={"h3"}>Login</Typography>
                <TextField  className='pb-12px w-[100%] bg-gray-100' id="outlined-basic" inputplaceholder='username' {...register("username", { required: true })} label="username" variant="outlined" />
                {errors.username && <p>this is req</p>}<br />
                <TextField className=' pb-12px w-[100%]'{...register("password", { required: true })} id="outlined-basic" placeholder='password' label="password" variant="outlined" />
                {errors.password && <p>paasword is must</p>}<br />
                <Button classNames=" pb-12px" type='submit' >Login</Button>
                {/* <Link to="/signup">
                  register yourself
                </Link> */}
              </form>
            </Box>

            <Box className=' flex items-center justify-center  border w-[50%] bg-ressd-200'>
              <Box className='text-center pl-10 pr-10 ' >
                <Typography>Hello, Friend! {name} </Typography>
                <Typography> Enter your personal details and start journey with us</Typography>
                <Button><Link to="/signup">
                  register yourself
                </Link></Button>
              </Box>
            </Box>
          </Box>
          {/* </Paper> */}

        </Box>


      </Container>


    </>

  );
}

export default Login;