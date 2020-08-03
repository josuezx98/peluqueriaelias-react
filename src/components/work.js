import React from 'react';
import Project from './project';
import Fade from 'react-reveal/Fade';
import data from '../yourdata';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ReactPlayer from 'react-player';

const useStyles = makeStyles(theme => ({
    root:{
        margin: 50,
        '@media (max-width:600px)': {
            margin: 10,
        },
    },
    boxContent:{
        display:'flex',
        marginTop: '20%',
        flexWrap: 'wrap',
    },
    project:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    typography:{
        fontFamily: 'Righteous, cursive',
        '@media (max-width:600px)': {
            fontSize: 40,
        },
    },
    video:{
        display:'flex',
        alignConten:'center',
        textAlign:'center',
        width: 600,
        height: 600,
        justifyContent: 'center',
    },
    }))

const Work = () =>{
    const classes = useStyles();
        return (<div className={classes.root}>
        <Box mt={5} mb={5} >
            <Fade bottom cascade>
                <Typography align='left' variant="h2" className={classes.typography} >
                    Trabajos.
                </Typography>
            </Fade>
        </Box>
        <div className={classes.project}>
                {data.projects.map((project)=>(
                    <Project key={project.id}
                             title = {project.title}
                             service = {project.service}
                             imageSrc = {project.imageSrc}
                             url={project.url}
                     ></Project>
                
                ))}
                 <ReactPlayer
            url='https://www.youtube.com/watch?v=K3PjS8hTy-U'
            controls
            />
        </div>
        <Box m={10}>
            <Fade bottom cascade>
                <Typography align='center' variant="h1" className={classes.typography} >Quien tiene magia<br></br> 
                en las manos,<br></br></Typography>
                <Typography align='center' variant="h1" color="secondary" className={classes.typography}>no necesita trucos.</Typography>
            </Fade>
        </Box>
        </div>  );
    }
 
export default Work;