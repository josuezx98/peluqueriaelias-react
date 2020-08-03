import React from 'react';
import './App.css';
import About from './components/About';
import Work from './components/work';
import Contact from './components/Contact';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles(theme => ({
  whatsApp: {
    position:"fixed",
    width:"60px",
    height:"60px",
    bottom:"40px",
    right:"40px",
    backgroundColor:"#25d366",
    color:"black",
    borderRadius:"50px",
    textAlign: "center"},
iconWhatsApp: {
    fontSize: 25},
}))

function App() {
  const classes = useStyles(); 
  return (
    <>
        <About/>
        <Work/>
        <Contact/>
        <Button variant="contained" className={classes.whatsApp} href="https://wa.me/5491131860512/?text=Hola%20Elias...">
        <WhatsAppIcon className={classes.iconWhatsapp}/>
    </Button>
    </>
  );
}

export default App;
