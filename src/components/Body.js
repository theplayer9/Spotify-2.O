import React, { useEffect } from 'react'
import styled from 'styled-components'
import { AiFillClockCircle } from 'react-icons/ai'
import { useStateProvider } from '../utils/StateProvider';
import axios from 'axios';


const Body = () => {
  const [{ token, selectedPlaylistId }, dispatch] = useStateProvider();
  useEffect(() => {
    const getInitialPlaylist = async () => {
      const response = await axios.get(`https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          }
        })
    }
    getInitialPlaylist();
  }, [token, dispatch]);

  return (
    <Container>Body</Container>
  )
}

export default Body;

const Container = styled.div``;
