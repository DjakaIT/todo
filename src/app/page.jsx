"use client"
import Form from "./components/toDoForm";
import '../app/css/page.css'
import { Provider } from '@reduxjs/toolkit';
import { Typography } from '@mui/material';
import store from "./store/store";

export default function Home() {
  return (
    <>
      <Provider store={store}>
        <Typography
          className="logo"
          variant="h3"
          component="h3">
          To Do App
        </Typography>
        <Form />
      </Provider>
    </>
  );
}
