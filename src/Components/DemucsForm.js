import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'
import Container from '@material-ui/core/Container'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import { ButtonGroup } from '@material-ui/core';


class DemucsForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = { value: '', model: 'demucs', device: 'cpu' };
    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateModelOption = this.updateModelOption.bind(this);
  }

  handleURLChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // createa a dialog 
    alert("Are you sure you want to submit the job?");
    event.preventDefault();
    this.props.handleSubmit(this.state.value, this.state.model, this.state.device);
    // Do other things like validate parameters being submited to graphql
  }

  updateVideo() {
    this.props.updateVideo(this.state.value);
  }

  updateModelOption(event) {
    this.setState({ model: event.target.value });
    this.props.updateDemucsModel(event.target.value)
  }

  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <form onSubmit={this.handleSubmit}>
            <FormControl fullWidth margin="normal" >

              <TextField id="standard-basic" label="Use the textbox below to select the video you would like to split" value={this.state.value} onChange={this.handleURLChange} />
              <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: '3px',
              }}>
                <ButtonGroup variant="contained">
                  <Button color="primary" variant="contained" onClick={(e) => this.handleSubmit(e)}>
                    Split!
                  </Button>
                  <Button variant="contained" onClick={(e) => this.updateVideo(e)}>
                    Update video
                  </Button>
                </ButtonGroup>
                
                <FormControl>
                  <FormHelperText>Select the ML model</FormHelperText>
                  <Select
                    defaultValue='demucs'
                    onChange={this.updateModelOption}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem value='demucs'>demucs</MenuItem>
                    <MenuItem value='demucs_extra'>demucs_extra</MenuItem>
                    <MenuItem value='tasnet'>tasnet</MenuItem>
                    <MenuItem value='tasnet_extra'>tasnet_extra</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </FormControl>

          </form>

        </Container>
      </div>
    );
  }

}

export default DemucsForm