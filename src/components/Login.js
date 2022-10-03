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
background-image: url(${`https://wallpaperaccess.com/full/667773.jpg`});
background-size: contain;
// img {
//     height: 20vh;
// }
button {
    margin-top: 350px;
    padding: 1rem 5rem;
    border-radius: 25rem;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;

}

`