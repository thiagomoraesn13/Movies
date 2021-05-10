import React from 'react';

import { Button, Grid } from '@material-ui/core';

import { CustomTextField, CustomGrid, WrapperButton, CustomButton } from '../wrappers/components';

const Search = ({ inputValue, setInputValue, fetchMovie }) =>
  <CustomGrid container spacing={2} alignItems='center'>
    <Grid item sm={8}>
      <CustomTextField
        id="outlined-basic"
        label="Digite o nome do filme"
        variant="outlined"
        value={inputValue}
        onChange={(value) => setInputValue(value.target.value)}
      />
    </Grid>

    <WrapperButton item sm={4}>
      <CustomButton
        variant="contained"
        color="primary"
        onClick={fetchMovie}
      >
        Pesquisar
      </CustomButton>
    </WrapperButton>
  </CustomGrid>

export default Search;
