import { gql } from '@apollo/client'

export const LIST_SONGS = gql`
    query songs{
        listSongs
    }
`

export const LIST_SEPARATED_SONGS = gql`
    query separatedSongs($model: String!) {
        listSeparatedSongs(model: $model)
    }
`

export const SPLIT_SONG = gql`
    query split($song: String!){
        split(song: $song)
    }
`

export const MUSIC_FROM_VIDEO = gql`
    query musicFromVideo($url: String!){
        musicFromVideo(url: $url)
    }
`

export const SPLIT_FROM_URL = gql`
    query splitFromUrl($url: String!, $model: String, $device: String) {
        splitFromUrl(url: $url, model: $model, device: $device)
    }
`

const QUERIES = { LIST_SONGS, LIST_SEPARATED_SONGS, SPLIT_SONG, MUSIC_FROM_VIDEO, SPLIT_FROM_URL }

export default QUERIES