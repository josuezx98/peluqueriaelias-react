import React from 'react';
import Fade from 'react-reveal/Fade';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
img: {    
        height: 500,
        borderRadius: '1%',
        margin: 20,
        '@media (max-width:1000px)': {
        height: 400,
        margin: 10,
    },
    '@media (max-width:600px)': {
        height: 300,
        margin: 0,
    },
},
    }))

const Project = props => {
    const classes = useStyles()
        return ( 
        <Fade bottom>
            <div className='project'>
                <a href={props.url}>
                    <img className={classes.img} src={props.imageSrc} alt={props.title}></img>
                </a>
                <h1>{props.title}</h1>
                <span>{props.service}</span>
            </div> 
        </Fade>);
    }
 
export default Project;