import { Routes, Route } from "react-router-dom"
import { MovieList, MovieDetail, Search, PageNotFound } from "../pages"

import React from 'react'

export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg">
      <Routes>
        <Route path="/" element={<MovieList apiPath="movie/now_playing" />} />
        <Route path="/movie/:id" element={<MovieDetail />} />S
        <Route path="/movies/popular" element={<MovieList apiPath="movie/popular" />} />S
        <Route path="/movies/top" element={<MovieList apiPath="movie/top_rated" />} />S
        <Route path="/movies/upcoming" element={<MovieList apiPath="movie/upcoming" />} />S
        <Route path="search" element={<Search apiPath="search/movie"/>} />S
        <Route path="*" element={<PageNotFound />} />S
      </Routes>
    </div>
  )
}
