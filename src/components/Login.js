import React from 'react'
import styled from 'styled-components'
const Login = () => {
    return (
        <Container>
            {/* <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Black.png' alt='Spotify' /> */}
            <button>Connect Spotify</button>
        </Container>
    )
}

export default Login

const Container = styled.div`  
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 100vw;
gap: 5rem;
background-image: url(${`https://www.teahub.io/photos/full/111-1110876_spotify-wallpaper.jpg`});
background-size: 100% 100% ;
background-position: center;
background-repeat: no-repeat;
@media (max-width: 700px) {
      background-image: url(${'https://w0.peakpx.com/wallpaper/945/631/HD-wallpaper-spotify-apps-music-thumbnail.jpg'});
  }
// img {
//     height: 20vh;
// }
button {
    margin-top: 400px;
    padding: 1rem 5rem;
    border-radius: 25rem;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;

}

`