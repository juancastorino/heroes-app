import React from 'react'
import { Routes, Route } from "react-router-dom";

import { DCScreen } from '../dc/DCScreen'
import { HeroScreen } from '../hero/HeroScreen';
import { MarvelScreen } from '../marvel/MarvelScreen'
import { SearchScreen } from '../search/SearchScreen';
import { Navbar } from './Navbar'



export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DCScreen />} />

                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:id" element={<HeroScreen />} />

                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>

        </>
    )
}
