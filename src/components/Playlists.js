import axios from 'axios';
import React, { useEffect } from 'react'
import styled from 'styled-components';
import { reducerCases } from '../utils/Constants';
import { useStateProvider } from '../utils/StateProvider'

const Playlists = () => {
    const [{ token,playlists }, dispatch] = useStateProvider();

    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get("https://api.spotify.com/v1/me/playlists ", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                }
            })
            // console.log(response)
            // console.log(response.data.items)
            const {items} = response.data ;
            const playlists = items.map(({name,id})=>{
                return { name, id};
            })
            // console.log( playlists)
            dispatch({type: reducerCases.SET_PLAYLISTS, playlists});
        }
        getPlaylistData();
    }, [token, dispatch])

    return (
        <Container>
            <ul>
                {playlists.map(({name, id })=>{
                    return <li key={id} >{name}</li>
                })}
            </ul>
        </Container>
    )
}

export default Playlists


const Container = styled.div` 
`;