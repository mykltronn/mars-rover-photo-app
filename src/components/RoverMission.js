import React, { Component } from 'react';
import {RoverMissionStyles} from '../styles/inlineStyles.js';
import MissionDisplay from './MissionDisplay.js'
//=========================
const API_KEY = "X7ZSWBsenFUU3nUeMP6bQGSKdte8u4v5KG4RtEoJ"
//=========================

export default class RoverMission extends Component {
    constructor(props) {
        super(props)

        this.handleRover = this.handleRover.bind(this)
        this.fetchRoverMission = this.fetchRoverMission.bind(this)

        this.state = {
            rover: 'Curiosity',
            mission: ''
        }

    }

    handleRover(event) {
        this.setState({rover: event.target.value})
    }

    fetchRoverMission (event) {
        event.preventDefault()
        let rover = this.state.rover
        let missionUrl = `https://api.nasa.gov/mars-photos/api/v1/manifests/${rover}?api_key=${API_KEY}`


        fetch(missionUrl).then(response => response.json())
            .then(response => {
                this.setState({mission: response.photo_manifest})

        }).catch(err => {
                console.log(err, "There was a problem accessing th NASA API");
        });
    }



    render() {
        const styles = RoverMissionStyles
        return (
            <div style={styles.main}>
                <form>
                    <div id="form-mission-select">
                        <legend>Rover Mission Details</legend>
                        <div style={styles.formDiv}>
                            <label htmlFor="rover">Rover</label>
                            <select onChange={this.handleRover} id="rover" value={this.state.value}>
                              <option value="Curiosity">Curiosity</option>
                              <option value="Opportunity">Opportunity</option>
                              <option value="Spirit">Spirit</option>
                            </select>
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Submit" onClick={this.fetchRoverMission}/>
                </form>
                <MissionDisplay mission={this.state.mission} styles={styles}/>
            </div>
        )
    }
}
