import React, { useState } from 'react'
import { Box } from '@mui/material'
import Banner from '../components/Banner'
import SearchExercises from '../components/SearchExercises'
import Exercises from '../components/Exercises'

const Home = () => {
  return (
    <Box>
      <Banner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home