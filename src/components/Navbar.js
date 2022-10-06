import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa'
import {CgProfile} from "react-icons/cg"

const Navbar = () => {
  return (
    <Container>
      <div className='search__bar'>
        <FaSearch />
        <input type="text" placeholder="Artists, songs, or podcasts" />
      </div>
      <div className='avatar'>
        <a href='#'>
          <CgProfile />
          <span>{userInfo?.name}</span>
        </a>
      </div>
    </Container>
  )
}

export default Navbar;


const Container= styled.div``;