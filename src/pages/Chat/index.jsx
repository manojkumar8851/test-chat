// Moved to pages/chat/index.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../Redux/chatSlice';
import { Box, TextField, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';
import { apiDomain } from '../../Utility/constant';
import { reciverName } from '../../Redux/reciveUserSlice';



function Chat() {

  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const [id, setId] = useState();
  const [input, setInput] = React.useState('');
  const [selectedUser, setSelectedUser] = useState({});
  const [receiverId, setReceiverId] = useState("")
  const [serch, setSerch] = useState("")

  const [selectedUserMsg, setSelectedUserMsg] = useState(null);

  let url = apiDomain + `/allusers?userEmail=${receiverId}`


  const userList = useSelector((state) => state.reciver.reciveUser?.data.data)
  /////////////////////////
  const socketUrl = 'http://192.168.0.6:11000'
  const userEmail = useSelector((state) => state.profile.user)
  const myUserEmail = userEmail?.data.user.email;
  // console.log("this is ", myUserEmail);

  // console.log("user list -----", userList);
  console.log("email--------------",receiverId)

  useEffect(() => {

    const fetchUser = async () => {
      try {
        const res = await axios.get(url)
        // console.log(res.data.data[0]);
        console.log("selcted i------------------",res)
        setId(res.data.data[0].id);
        dispatch(reciverName(res))
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser()
  }, [url])





  const handalSelectedUser = async (user) => {
    // setSelectedUser(user);
    const selectedUserEmail = user.email;
    alert(selectedUserEmail)
   await axios.get(`${socketUrl}/messages?userId=juna6448@gmail.com&receiveId=${selectedUserEmail}`)
      .then((res) => {
        if (res.data.status === 'success') {
          setSelectedUserMsg(res.data.data)
          console.log("this is msg ", res.data.data);

          // setMessages((prev) => [...prev, ...res.data.data]);
          // console.log("messgvgvbsdkcbj-----",res)
        }
      });

  }

  const handalSerch = (e) => {
    e.preventDefault();
    setReceiverId(serch)
    console.log("done",serch);

  }

  const handleSend = () => {
    if (input.trim() && selectedUser) {
      dispatch(
        addMessage({
          userId: selectedUser.id,
          text: input,
          timestamp: new Date().toLocaleTimeString(),
          id: "12345678"
        })
      );
      setInput('');
    }
  };


  return (
    <Box display="flex" height="calc(100vh - 60px)">
      {/* Left Side: User List */}
      <Box width="30%" bgcolor="lightgray" p={2} overflow="auto">
        <form onSubmit={handalSerch} >
          <TextField placeholder='Enter email ' value={serch} onChange={(e) => setSerch(e.target.value)} />
          <Button type='submit'>set</Button>
        </form>

        <List>
          {userList?.map((user) => (
            <React.Fragment key={user.id}>
              <ListItem
                button
                selected={user.id === selectedUser.id}
                onClick={() => handalSelectedUser(user)}
              >
                <ListItemText primary={user.username} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Box>

      {/* Right Side: Chat Box */}
      <Box width="70%" p={2} display="flex" flexDirection="column" justifyContent="space-between">
        <Box flexGrow={1} overflow="auto" bgcolor="whitesmoke" p={2}>
          {selectedUserMsg && selectedUserMsg.map((message, index) => (
            <Box key={index} mb={2}   textAlign="left">
              <Box display="inline-block" bgcolor="lightblue" p={1} borderRadius={4}>
                {message.content}
              </Box>
              <Box fontSize="small" color="gray">
                {message.timestamp}
              </Box>
            </Box>
          ))}
        </Box>

        <Box display="flex" mt={2}>
          <TextField
            fullWidth
            variant="outlined"
            placeholder={`Message ${selectedUser.username}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleSend} style={{ marginLeft: '8px' }}>
            Send
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Chat;