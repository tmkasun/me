import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function MDTable({ rows }) {

    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <caption>This page lists the available markdown source files</caption>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell align="center">Excerpt</TableCell>
                        <TableCell align="center">WordCount</TableCell>
                        <TableCell align="center">Created</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(({ node }) => (
                        <TableRow key={node.id}>
                            <TableCell align="right">{node.frontmatter.title}</TableCell>

                            <TableCell scope="row">
                                {node.excerpt}
                            </TableCell>
                            <TableCell align="right">{node.wordCount.words}</TableCell>
                            <TableCell align="right">{node.frontmatter.date}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
