import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { Container, CircularProgress } from '@material-ui/core';
import queryString from 'query-string'


import {searchMovie}  from '../../redux/actions/search';
import {movieResults, isSearchLoading} from '../../redux/selectors';
import MovieResult from '../../components/MoviesResult';

export default ({ location }) => {

  const dispatch = useDispatch();

  const movies = useSelector( state => movieResults(state))

const isLoading = useSelector(state => isSearchLoading(state))

   // console.log(queryString.parse(location.search));
    
    
    useEffect(() =>{
        const { movieName } = queryString.parse(location.search);
        if(movieName && !movies)
            dispatch(searchMovie({movieName}));
    });

    const renderMovies =()=>{
        if(movies){
            return movies.map((value, index)=> <MovieResult key={index} {...value}/>)
        }else if(isLoading){
            return <CircularProgress size={100} color="primary"></CircularProgress>
        }
        return <div>No hay resultados</div>;
    }

    return (
        <Container>
            {renderMovies()}
        </Container>
    )
}