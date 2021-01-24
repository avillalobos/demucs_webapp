import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { SPLIT_FROM_URL } from '../GraphQL/Queries'

function SplitSong(props) {
    console.log("Trying to get song from: " + props.url)
    const { data_song, loading_song } = useQuery(SPLIT_FROM_URL, { variables: { url: props.url, model: props.model, device: props.device }, })
    const [song, setSong] = useState([]);

    useEffect(() => {
        if (data_song) {
            setSong(data_song.splitFromUrl);
        }else{
            setSong("Minions are working to handle your request...")
        }

    }, [data_song]);

    if (loading_song) {
        return <div>
            Minions are working to handle your request
        </div>
    } else {

        return (
            <div>
                <div>
                    {
                        song
                    }
                </div>
            </div>
        );
    }
}

export default SplitSong