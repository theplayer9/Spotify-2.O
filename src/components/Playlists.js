import axios from 'axios';
import React, { useEffect } from 'react'
import { useStateProvider } from '../utils/StateProvider'

const Playlists = () => {
    const [{ token }, dispatch] = useStateProvider();

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

        }
        getPlaylistData();
    }, [token, dispatch])

    return (
        <div>Playlists</div>
    )
}

export default Playlists