import React, { useState, useContext, useEffect } from 'react';
import { MovieContext } from './provider'

import axios from 'axios'
import _ from 'lodash'

import './App.css';

import Search from './components/search'
import Card from './components/card'
import Errors from './components/errors'
import { Content, Wrapper, Title, WrapperSuggestion } from './components/wrappers/components'
import Favorites from './components/favorites';
import { defaultMovie } from './models/DefaultMovie'
import CustomTabs from './components/customTabs';

import SuggestionCard from './components/card/SuggestionCard'

const App = () => {
  const [inputValue, setInputValue] = useState('')
  const [noMovie, setNoMovie] = useState(false)
  const [currentMovie, setCurrentMovie] = useState(defaultMovie)
  const [tab, setTab] = useState(0)
  const [suggestions, setSuggestions] = useState([])
  const { movies, setMovies } = useContext(MovieContext)

  const fetchMovie = async () => {
    try {
      const params = { t: inputValue }
      const { data } = await axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=a390aad1`, { params })

      if (data.Error) {
        setNoMovie(true)
      } else {
        setCurrentMovie(data)
      }
    }
    catch (error) {
      setNoMovie(true)
      console.error(error)
    }
  }

  useEffect(() => {
    fetchSuggestionsMovies()
  }, []);

  const fetchSuggestionsMovies = async () => {
    try {
      const params = { api_key: '34796d6248ad29ad0ba649b8fa0f3d64' }

      const { data } = await axios.get('https://api.themoviedb.org/3/movie/popular', { params })

      setSuggestions(data.results)
    }
    catch (error) {
      setNoMovie(true)
      console.error(error)
    }
  }

  const handleAddFavorite = () => {
    const addMovie = movies.find(movie => movie.Title === currentMovie.Title)

    if (_.isEmpty(addMovie)) {
      const newCurrentMovie = { ...currentMovie, favorite: true, addedFavorite: false }

      const newMovies = [...movies, newCurrentMovie]

      setMovies(newMovies)

      setCurrentMovie({ ...currentMovie, favorite: false, addedFavorite: true, addedFavoriteMsg: 'Filme adicionado aos favoritos' })

    } else {
      setCurrentMovie({ ...currentMovie, favorite: false, addedFavorite: true, addedFavoriteMsg: 'Filme já adicionado' })
    }
  }

  const handleRemoveFavorite = (selectedMovie) => {
    const newMovies = movies.filter(movie => movie.Title !== selectedMovie.Title)

    setMovies(newMovies)
  }

  return (
    <Wrapper>
      <Title gutterBottom variant="h4" component="h2" >
        BuscaMovie
      </Title>

      <CustomTabs
        currentTab={tab}
        setTab={setTab}
      />
      {
        tab === 0 &&
        <>
          <Content>
            <Search
              inputValue={inputValue}
              setInputValue={setInputValue}
              fetchMovie={fetchMovie}
            />

            {
              noMovie &&
              <Errors info='Não há filmes com o nome pesquisado. Tente novamente' ></Errors>
            }
            {
              !noMovie && (
                <Card
                  movie={currentMovie}
                  handleAddFavorite={handleAddFavorite}
                />
              )
            }
          </Content>
        </>
      }

      {
        tab === 1 &&
        <Content>
          {
            !_.isEmpty(movies)
              ? (
                <Favorites
                  handleRemoveFavorite={handleRemoveFavorite}
                  movies={movies}
                />
              )
              : (
                <WrapperSuggestion>
                  <Errors info='Nenhum filme adicionado, Veja a lista de sugestões abaixo e clique na aba buscar filmes.' />
                  <SuggestionCard
                    movies={suggestions}
                  />
                </WrapperSuggestion>
              )
          }
        </Content>
      }
    </Wrapper >
  );
}

export default App;
