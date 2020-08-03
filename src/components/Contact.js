import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import ListItem from '@material-ui/core/ListItem';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import StorefrontIcon from '@material-ui/icons/Storefront';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Typography from '@material-ui/core/Typography';
import Maps from './Map/Map';
import Container from '@material-ui/core/Container';
import TitleBox from './TitleBox';

const useStyles = makeStyles(theme => ({
  root:{
    marginTop:50,
  },
    General:{
        display: "flex",
        flexFlow: "row wrap"},
ContactList:{
        width: "50%",
        marginBottom:20,
        fontFamily: 'Righteous, cursive'
      },
Icon:{
        fontSize: "230%",
        color: "#f50057",
        margin: "0px 5px 20px 0px"},
Map:{
        width: "80%",
        margin: "100px 0px 0px 10%"},
img: {
        marginTop: 30,
        height: 300,
        borderRadius: '2%',
        margin: 20,
},
footer:{
        padding: 10,
        fontFamily: 'Righteous, cursive'
},
link:{
        textDecoration: 'none'
},
imgContent:{
  marginTop:60,
  display: 'flex',
  justifyContent: 'center'
},
}))
const Contact = () =>{
    const classes = useStyles();
        return (
        <Container maxWidth="xl" className={classes.root}>
          <Box  className={classes.Map}>
          <Fade bottom>
            <h1>
              <Fade bottom cascade>Ubicacion</Fade>
            </h1>
            <Maps/>
          </Fade>
          </Box>
          <Grid container>     
          <Grid item xs={12} sm={6} md={6}>
                <Box className={classes.imgContent}>
                    <img className={classes.img} src={data.aboutImage} alt='about iamge'/>
                </Box>
               
              </Grid>
            <Grid item xs={12} sm={6} md={6}>
              <Fade bottom cascade>
              <Box mt={8}>
                  <TitleBox>Contactanos</TitleBox>
                  <Box className={classes.General}>
                      <ListItem>
                        <StorefrontIcon className={classes.Icon}/>
                        <Typography className={classes.ContactList}  variant="body2">Guernica</Typography>
                        <WhatsAppIcon className={classes.Icon}/> 
                        <Typography className={classes.ContactList} variant="body2">1131860512</Typography>
                      </ListItem>         
                      <ListItem>
                        <QueryBuilderIcon className={classes.Icon}/> 
                        <Typography className={classes.ContactList} variant="body2"> 9 - 19hs</Typography>
                        <FacebookIcon className={classes.Icon}/> 
                        <Typography className={classes.ContactList} variant="body2">Elias Miño</Typography>
                      </ListItem>
                      <ListItem>
                        <InstagramIcon className={classes.Icon}/> 
                        <Typography className={classes.ContactList} variant="body2">Eliasm.99</Typography>
                      </ListItem>
                  </Box>
                </Box>
                </Fade>
              </Grid>
              
            </Grid>
            <Box className={classes.footer}>
              <span className='footer'>Made by <a className={classes.link} href="https://josuerodriguezresume.netlify.app">Josue Rodriguez</a></span>
            </Box> 
          </Container>);
    }

export default Contact;