import React from 'react'
import { makeStyles } from "@material-ui/core/styles"

const loadingDotCommon = {
    fontSize: 'x-large',
    margin: '10px',
    position: 'relative',
    bottom: '5px',
    animation: '$showHideDot 2.5s ease-in-out infinite',
}

const useStyles = makeStyles(theme => ({
    span: {
        margin: '0 15px',
        lineHeight: '.7',
        textShadow: '0 0 2px rgba(0, 0, 0, .45)',
        animation: '$span 3s ease-in  alternate',
    },
    main: {
        height: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    letter: {
        fontSize: 'medium',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30px',
        width: ' 30vw',
        /* border: 2.5px solid #FF1EAD; */
        border: isOnline => `2.35px solid ${isOnline ? 'green' : 'red'}`,
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
    },
    loadingDot1: {
        ...loadingDotCommon,
        animationDelay: '0.2s'
    },
    loadingDot2: {
        ...loadingDotCommon,
        animationDelay: '0.4s'
    },
    loadingDot3: {
        ...loadingDotCommon,
        animationDelay: '0.6s'
    },
    '@keyframes showHideDot': {
        '0%': { opacity: 0 },
        '50%': { opacity: 1 },
        '60%': { opacity: 1 },
        '100%': { opacity: 0 },
    }
}))
const HomeTitle = (props) => {
    const { isOnline } = props;
    const classes = useStyles(isOnline !== null && isOnline !== false)
    const liveText = isOnline === null ? (
        <>
                    <div className={classes.loadingDot1}>.</div>
                    <div className={classes.loadingDot2}>.</div>
                    <div className={classes.loadingDot3}>.</div>
                </>
    ) : isOnline ? 'Online' : 'Offline';
    return (
        <div className={classes.main}>
            <span className={classes.span}>K</span>
            <span className={classes.span}>N</span>
            <span className={classes.span}>N</span>
            <span className={classes.span}>E</span>
            <span className={classes.span}>C</span>
            <span className={classes.span}>T</span>
            <span className={classes.letter}>{liveText}</span>
            <span className={classes.span}>🏠</span>
            <span className={classes.span}>H</span>
            <span className={classes.span}>O</span>
            <span className={classes.span}>M</span>
            <span className={classes.span}>E</span>
        </div>
    )
}


export default HomeTitle