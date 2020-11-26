import React from 'react';
import { Card, Grid, Typography, Button } from '@material-ui/core';
import {withRouter} from 'react-router-dom';

import style from './style';

const MovieResult = ({ Title, Year, Type, imdbID, Poster, history }) => {
    const classes = style();

    const handleMovieInfoClick = () =>{
        history.push(`/movie/${imdbID}`);
    };


    return (
        <Card className={classes.cardContainer}>
            <Grid container>
                <Grid item>
                    <img src={Poster} alt={Title} className={classes.poster}></img>
                </Grid>
                <Grid item className={classes.titlesContainer}>
                    <Typography>Titulo: {Title}</Typography>
                    <Typography>Año:  {Year}</Typography>
                    <Typography>Tipo: {Type} </Typography>
                    <Button color="primary" variant="contained" onClick={handleMovieInfoClick}>Ver mas</Button>
                </Grid>
            </Grid>

        </Card>
    )
}

export default withRouter(MovieResult);