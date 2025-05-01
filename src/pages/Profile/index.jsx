import { Paper, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect } from 'react'
import { apiDomain } from '../../Utility/constant'
import { useDispatch, useSelector } from 'react-redux'
import { user } from '../../Redux/profileUserSlice'

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.profileUser.user)

  const url = apiDomain + "/userprofile"
  const token = localStorage.getItem("token")
  console.log("dat----",data)
  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` }
        })
        console.log("profile", res.data.user);
        dispatch( user(res))

      } catch (err) {
        console.log(err);

      }

    }
    getProfile()
  }, [token])
 
  const name = data?.data.user.username
  const email = data?.data.user.email
  return (
    <div>this is profile

      <Paper elevation={3}>
        <Typography variant=' h5'>username:{name}</Typography><br />
        <Typography variant=' h5'> email: {email}: </Typography>
      </Paper>
    </div>
  )
}

export default Profile