import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const navSlice = createSlice({
    name:"app",
    initialState:{
        isMenuOpen:true,
    },
        reducers:{
            toggleMenu:(state) =>{
                state.isMenuOpen = !state.isMenuOpen
            },closeMenu:(state) =>{
                state.isMenuOpen = false
            },
    },
})
export const {toggleMenu,closeMenu} =navSlice.actions
export default navSlice.reducer