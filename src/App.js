import "./styles.css";
import { ChatItem } from "./chatItem";
import React, { useState, useEffect } from "react";
import { Avatar, Button, Divider, Paper } from "@mui/material";
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

const MAX = 9999999;
const MIN = 1;

const SENDERID = 11;

const TEXT = [
  { id: 1, senderId: 12, body: "Hello my name is moshe", date: "14:07:18" },
  { id: 2, senderId: 12, body: "Hello my name is moshe", date: "14:07:18" },
  { id: 3, senderId: 11, body: "Hello my name is David", date: "14:07:18" },
  { id: 4, senderId: 12, body: "Hello my name is moshe", date: "14:07:18" },
  { id: 5, senderId: 12, body: "Hello my name is moshe", date: "14:07:18" },
];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function App() {
  const [texts, setTexts] = useState(TEXT);
  const [msg, setMsg] = useState();

  const handleClick = (event) => {
    const randomNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
    const newMsg = {
      id: randomNumber,
      senderId: SENDERID,
      body: msg,
      date: new Date().toLocaleTimeString(),
    };
    setTexts((old) => [...old, newMsg]);
    setMsg("");
  };

  return (
    <div
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        borderRadius: "20px",
        margin: "10px",
      }}
    >
      <Paper
        elevation={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          p: 1,
          backgroundColor: "primary.main",
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
        >
          <Avatar
            sx={{ width: 50, height: 50 }}
            alt="Remy Sharp"
            src="../public/logo192.png"
          />
        </StyledBadge>
      </Paper>
      <Divider />
      <div
        style={{
          width: "98%",
          height: 400,
          overflowY: "scroll",
          overflowX: "hidden",
        }}
        className="App"
      >
        {texts.map((val, index) => (
          <ChatItem
            key={index}
            sender={val.senderId === 12 ? "message-blue" : "message-orange"}
            message={
              val.senderId === 12
                ? "message-timestamp-left"
                : "message-timestamp-right"
            }
            body={val.body}
            date={val.date}
          />
        ))}
      </div>
      <Divider />
      <div style={{ display: "flex", width: "100%" }}>
        <TextField
          sx={{ width: "80%", m: 1 }}
          id="outlined-multiline-flexible"
          label=""
          placeholder="DONT SHARE PERSONAL INFO!!!"
          multiline
          maxRows={4}
          value={msg}
          onChange={(event) => {
            setMsg(event.target.value);
          }}
        />

        <IconButton size="large" onClick={handleClick}>
          <SendIcon />
        </IconButton>
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: "95%", m: 2 }}
          variant={"contained"}
          endIcon={<DirectionsCarIcon />}
        >
          Start!
        </Button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: "95%", m: 2 }}
          variant={"contained"}
          endIcon={<ThumbDownOffAltIcon />}
          color={"error"}
        >
          DECLINE!
        </Button>
      </div>
    </div>
  );
}
