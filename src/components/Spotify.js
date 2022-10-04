import React from 'react'
import styled from 'styled-components'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
import Body from './Body'

const Spotify = () => {
  return (
    <Container>
      <div className='spotify__body'>
        <Sidebar />
        <div className='body' >
          <Navbar />
          <div className='body__contents' >
            <Body />
          </div>
        </div>
      </div>
      <div className='spotify__footer' ><Footer /></div>
    </Container>
  )
}

export default Spotify;



const Container = styled.div``;