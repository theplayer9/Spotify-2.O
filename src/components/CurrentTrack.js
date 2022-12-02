import axios from 'axios';
import { useEffect } from 'react';
import styled from "styled-components"
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider';

const CurrentTrack = () => {
  const [{ token,currentlyPlaying }, dispatch] = useStateProvider();

  useEffect(() => {
    const getCurrentTrack = async () => {
      const response = await axios.get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        }
      })
      // console.log("this one", response);
      if( response.data !== ""){
        const {item}= response.data;
        const currentlyPlaying = {
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          image: item.album.images[2].url,

        }
      }
      dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
    }
    getCurrentTrack();
  }, [token, dispatch])
  return (
    <Container> CurrentTrack</Container>
  )
}

export default CurrentTrack;


const Container = styled.div`
background-color: #181818;
height: 100%;
width: 100%;
border-top: 1px solid #282828;
display: grid;
grid-template-columns: 1fr 2fr 1fr;
align-items: center;
justify-content: center;
padding: 0 1rem;
`;