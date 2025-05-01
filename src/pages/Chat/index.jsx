// Moved to pages/chat/index.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMessage } from '../../Redux/chatSlice';
import { Box, TextField, Button, List, ListItem, ListItemText, Divider } from '@mui/material';
import axios from 'axios';
import { apiDomain } from '../../Utility/constant';
import { reciverName } from '../../Redux/reciveUserSlice';





const mockUsers = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
];  
const url = apiDomain + "/allusers?userEmail=mk@example.com"
function Chat() {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(url)
        dispatch(reciverName(res))
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    }
    fetchUser()
  }, [])

  const messages = useSelector((state) => state.chat.messages);
  const dispatch = useDispatch();
  const [input, setInput] = React.useState('');
  const [selectedUser, setSelectedUser] = useState(mockUsers[0]);
  const handleSend = () => {
    if (input.trim()) {
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

  const filteredMessages = messages.filter(
    (message) => message.userId === selectedUser.id
  );

  return (
    <Box display="flex" height="calc(100vh - 60px)">
      {/* Left Side: User List */}
      <Box width="30%" bgcolor="lightgray" p={2} overflow="auto">
        <List>
          {mockUsers.map((user) => (
            <React.Fragment key={user.id}>
              <ListItem
                button
                selected={user.id === selectedUser.id}
                onClick={() => setSelectedUser(user)}
              >
                <ListItemText primary={user.name} />
              </ListItem>
              <Divider />
            </React.Fragment> 
          ))}
        </List>
      </Box>

      {/* Right Side: Chat Box */}
      <Box width="70%" p={2} display="flex" flexDirection="column" justifyContent="space-between">
        <Box flexGrow={1} overflow="auto" bgcolor="whitesmoke" p={2}>
          {filteredMessages.map((message, index) => (
            <Box key={index} mb={2} textAlign="right">
              <Box display="inline-block" bgcolor="lightblue" p={1} borderRadius={4}>
                {message.text}
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
            placeholder={`Message ${selectedUser.name}`}
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