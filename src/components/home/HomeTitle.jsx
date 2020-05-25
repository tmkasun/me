import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    span: {
        margin: '0 15px',
        lineHeight: '.7',
        textShadow: '0 0 2px rgba(0, 0, 0, .45)',
        animation: '$span 3s ease-in  alternate',
    },
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    letter: {
        display: 'inline-flex',
        height: '30px',
        width: ' 30vw',
        /* border: 2.5px solid #FF1EAD; */
        border: '2.35px solid black',
        borderRadius: '14px',
        boxShadow: '0 0 2px rgba(0, 0, 0, .75), inset 0 0 2px rgba(0, 0, 0, .45)',
        animation: '$letter 3s ease-in-out  alternate'
    },
    '@keyframes letter': {
        '0%,30%': { width: '27px' },
        '70%,100%': { width: '30vw' }
    },

    '@keyframes span': {
        '0%,30%': { margin: '0 15px' },
        '70%,100%': { margin: '0 15px' }
    }
}))
const HomeTitle = () => {
    const classes = useStyles()

    return (
        <div className={classes.main}>
            <span className={classes.span}>K</span>
            <span className={classes.span}>N</span>
            <span className={classes.span}>N</span>
            <span className={classes.span}>E</span>
            <span className={classes.span}>C</span>
            <span className={classes.span}>T</span>
            <span className={classes.letter}></span>
            <span className={classes.span}>🏠</span>
            <span className={classes.span}>H</span>
            <span className={classes.span}>O</span>
            <span className={classes.span}>M</span>
            <span className={classes.span}>E</span>
        </div>
    )
}


export default HomeTitle