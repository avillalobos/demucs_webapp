import React, { useEffect, useState } from 'react'
import { useQuery } from '@apollo/client'
import { LIST_SEPARATED_SONGS } from '../GraphQL/Queries'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';

function FetchSeparatedSongs(props) {
    const { data } = useQuery(LIST_SEPARATED_SONGS, { variables: { model: props.model}} , {fetchPolicy: "network-only"})
    const [songs, setSongs] = useState([]);
    useEffect(() => {
        if (data) {
            setSongs(data.listSeparatedSongs);
        }

    }, [data]);

    return (
        <div>
            <List>

                {songs.map((val) => {
                    return (
                        <ListItem button key={val}>
                            <ListItemIcon >
                                <FolderIcon />
                            </ListItemIcon>
                            <ListItemText primary={val} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
}

export default FetchSeparatedSongs