import React from 'react';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
container: {
marginBottom: 30,
},
boxContent:{
    display:'flex',
    marginTop: '10%',
    flexWrap: 'wrap',
},
imgContent:{
    marginTop: 20,
    display: 'flex',
    justifyContent: 'flex-end',
    '@media (max-width:1000px)': {
        justifyContent: 'center',
    },
},
img:{
    height: 600,
    borderRadius: '1%',
    '@media (max-width:1000px)': {
        height: 500,
    },
    '@media (max-width:600px)': {
        height: 400,
    },
},
title:{
    padding:30,
    fontSize: 100,
    fontFamily: "Dancing Script, cursive",
    '@media (max-width:600px)': {
        fontSize: 60,
        padding:10,
    },
},
subtitle:{
    fontFamily: 'Righteous, cursive',
    '@media (max-width:600px)': {
        fontSize: 30,
        padding:10,
    },
},
abouttext:{
    '@media (max-width:600px)': {
        fontSize: 20,
        padding:10,
    },
}

}))

const About = () => {
    const classes = useStyles(); 
    return(
    <Container maxWidth="xl" className={classes.container}>
        <Grid container>     
            <Grid item xs={12} sm={6} md={6}>
            <Fade bottom>
                    <Box align='center' className={classes.boxContent}>
                    <Typography className={classes.title} align='center' variant="h2" color="secondary">
                                {data.headerTagline[0]}
                    </Typography>
                        <Typography className={classes.subtitle} align='left' variant="h2" color="initial">
                                {data.headerTagline[1]}
                        </Typography>
                        <Typography align='left' className={classes.abouttext}  variant="h4" color="initial">
                            {data.abouttext}
                        </Typography>
                    </Box>
            </Fade>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Box className={classes.imgContent}>
                    <img className={classes.img} src={data.imageportate} alt='about iamge'/>
                </Box>
            </Grid>
        </Grid>
    </Container>
)
}
 
export default About;