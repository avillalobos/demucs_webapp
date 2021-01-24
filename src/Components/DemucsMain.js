import React from 'react'

import DemucsForm from './DemucsForm'
import ListSongs from './ListSongs'
import FetchSeparatedSongs from './FetchSeparatedSongs'
import ReactPlayer from "react-player"
import SplitSong from './SplitSong'
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core'
import Box from '@material-ui/core/Box';

class DemucsMain extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // Default video for demucs is an example of me playing 
            // a guitar cover and creating the backingtracks using
            // demucs 
            video: "https://youtu.be/J56SHCISgRg",
            showSplitSongComponent: false,
            availableSongs: null,
            separatedSongs: null,
            model: 'demucs',
            device: 'cpu'
        }

    }

    updateDemucsModel(model){
        this.setState({model: model})
    }

    handleSubmit(url, model, device) {
        this.setState({ video: url, showSplitSongComponent: true, model: model, device: device });
    }

    updateVideo(url) {
        this.setState({ video: url });
    }

    fetchAvailSongs() {
        this.setState({ availableSongs: <ListSongs key={new Date()} /> });
    }

    fetchSeparatedSongs() {
        this.setState({ separatedSongs: <FetchSeparatedSongs key={new Date()} model={this.state.model} /> });
    }

    render() {

        return (
            <div align="center">
                <Container maxWidth="xl" align="center">

                    <div className="player-wraper">
                        <ReactPlayer
                            url={this.state.video}
                            className="react-player"
                        />
                    </div>
                    <DemucsForm 
                        updateVideo={url => this.updateVideo(url)} 
                        handleSubmit={ (url, model, device) => this.handleSubmit(url, model, device)} 
                        updateDemucsModel={ model => this.updateDemucsModel(model) }
                    />
                        <Box display="flex" justifyContent="center" m={1} p={1}>
                            <Box >
                            <div className='SongList'>
                                <Button variant="contained" color="default" onClick={() => this.fetchAvailSongs()}>
                                    Fetch songs
                                </Button>
                                {
                                    this.state.availableSongs
                                }
                            </div>
                            </Box>
                            <Box>
                                <div className='SongList'>
                                <Button variant="contained" color="default" onClick={() => this.fetchSeparatedSongs()}>
                                    Fetch separated songs
                                </Button>
                                {
                                    this.state.separatedSongs
                                }
                            </div>
                            </Box>
                        </Box>
                    <div>
                        {
                            this.state.showSplitSongComponent && <SplitSong url={this.state.video} model={this.state.model} device={this.state.device}/>
                        }
                    </div>
                </Container>
            </div>);
    }
}

export default DemucsMain