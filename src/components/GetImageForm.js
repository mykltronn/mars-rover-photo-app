import React, { Component } from 'react';
import {getImageFormSyles} from '../styles/inlineStyles.js'
import GetImageButton from './GetImageButton.js';
import ImageDisplay from './ImageDisplay.js';
import RoverMission from './RoverMission.js';
//====================================
const API_KEY = "X7ZSWBsenFUU3nUeMP6bQGSKdte8u4v5KG4RtEoJ"
//====================================

export default class GetImageForm extends Component {
    constructor(props) {
        super(props)

        this.fetchRoverImage = this.fetchRoverImage.bind(this)
        this.handleRover = this.handleRover.bind(this)
        this.handleCamera = this.handleCamera.bind(this)
        this.handleSol = this.handleSol.bind(this)

        this.state = {
            rover: "Curiosity",
            camera: "FHAZ",
            sol: 1000,
            images: []
        }

    }

    handleRover(event) {
        this.setState({rover: event.target.value})
    }

    handleCamera(event) {
        this.setState({camera: event.target.value})
    }

    handleSol(event) {
        this.setState({sol: event.target.value})
    }

    fetchRoverImage(event) {
        event.preventDefault();

        this.setState({camera: this.state.camera, rover: this.state.rover, sol: this.state.sol});

        let cam = this.state.camera;
        let rove = this.state.rover;
        let num = this.state.sol;

        let imageUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/${rove}/photos?sol=${num}&camera=${cam}&api_key=${API_KEY}`;

        fetch(imageUrl).then (response => response.json())
          .then (response => {
            this.setState({images: response.photos})
            console.log(this.state.images);
        }).catch(err => {
            console.log(err, "There was a problem accessing th NASA API");
        });
    }

    render() {
        const styles = getImageFormSyles

        return(
            <div style={styles.div} id="forms-and-pictures">
                <div style={styles.formsDiv} id="forms">
                    <form style={styles.form}>
                        <div style={styles.formDiv} id="form-rover-select">
                            <label htmlFor="rover">Rover</label>
                            <select onChange={this.handleRover} id="rover" value={this.state.value}>
                              <option value="Curiosity">Curiosity</option>
                              <option value="Opportunity">Opportunity</option>
                              <option value="Spirit">Spirit</option>
                            </select>
                        </div>
                        <div style={styles.formDiv} id="form-camera-select">
                            <label htmlFor="camera">Camera Type</label>
                            <select onChange={this.handleCamera} id="rover" value={this.state.value}>
                              <option value="fhaz">FHAZ (Front Hazard)</option>
                              <option value="rhaz">RHAZ (Rear Hazard)</option>
                              <option value="navcam">NAVCAM (Navigation Cam)</option>
                            </select>
                        </div>
                        <div style={styles.formDiv} >
                            <label htmlFor="sol">Martian Sol: 1000-2000</label>
                            <input style={styles.input} type="number" onChange={this.handleSol} max="2000" min="1000" value={this.state.value}/>
                        </div>
                        <GetImageButton submit={this.fetchRoverImage} buttonStyles={styles.button}/>
                    </form>
                    <RoverMission />
                </div>
                <ImageDisplay images={this.state.images} displayStyles={styles.imageDisplay}/>
            </div>
        )
    }
}
