import React from 'react';
import { useForm, useFormState } from 'react-hook-form';

import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors },reset} = useForm();

  const handleSignup = () => {
    reset()
      // Dummy signup logic

      alert('Signup successfull!');
      navigate('/signup')
    };

  return (
    <div>
      <form onSubmit={handleSubmit(handleSignup)}>
        <h1 className='text-white'>Signup</h1>
        <input {...register("username",{required:true})} placeholder="User" />
        {errors.username && <p>this is req</p>}

        <input {...register("email",{required:true})} placeholder="email" />
        {errors.email && <p>this is req</p>}

        <input {...register("password",{required:true})} placeholder="password" />
        {errors.password && <p>this is req</p>}
        <button type='submit'>Signup</button>
      </form>

      <Link to="/login">
        Already User Login
      </Link>


    </div>

  );
}

export default Signup;