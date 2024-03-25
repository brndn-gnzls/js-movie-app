import {Routes, Route} from "react-router-dom"
import {MovieList, MovieDetail, Search, PageNotFound} from "../pages"

import React from 'react'

export const AllRoutes = () => {
  return (
    <>
        <Routes>
            <Route path="/" element={<MovieList />} />S
            <Route path="/movie/:id" element={<MovieDetail />} />S
            <Route path="/movies/popular" element={<MovieList />} />S
            <Route path="/movies/top" element={<MovieList />} />S
            <Route path="/movies/upcoming" element={<MovieList />} />S
            <Route path="search" element={<Search />} />S
            <Route path="*" element={<PageNotFound />} />S
        </Routes>
    </>
  )
}
