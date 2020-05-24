import React from 'react'
import { cyan, lightBlue } from "@material-ui/core/colors"
import Link from '@material-ui/core/Link';
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
    links: {
        color: theme.palette.type === 'light' ? lightBlue[600] : cyan[200]
    }
}))


/**
 * 
 * Specially wrapped MUI link component to do the styling in dark theme
 * To make the link formatting easier we add spaces surrounding the child text
 * @param {Object} props 
 */
export default function KLink(props) {
    const { type, children, href, target } = props;
    const classes = useStyles()

    return (
        <>{' '}
            <Link className={classes.links} target={target} rel="noopener" href={href}>
                {children}
            </Link>
            {' '}
        </>
    );
}

KLink.defaultProps = {
    type: 'link',
    target: '_blank' // counter act to the default '_self' value
}