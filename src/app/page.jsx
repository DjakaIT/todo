"use client"
import Form from "./components/toDoForm";
import '../app/css/page.css'
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Typography 
        className="logo" 
        variant="h3" 
        component="h3">
        To Do App
      </Typography> 
      <Form />
    </>
  );
}
