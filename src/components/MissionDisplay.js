import React, { Component } from 'react'

export default class MissionDisplay extends Component {
    constructor(props) {
        super(props)

        this.renderMission = this.renderMission.bind(this)
    }

    renderMission() {
        const styles = this.props.styles
        let mission = this.props.mission
        let render;
        if(mission) {
            render = (
                <ul className="mission">
                    <h5>Mission details for the {mission.name} rover</h5>
                    <li style={styles.li}>Launch Date: {mission.launch_date}</li>
                    <li style={styles.li}>Landing Date: {mission.landing_date}</li>
                    <li style={styles.li}>Status: {mission.status}</li>
                    <li style={styles.li}>Max Sol: {mission.max_sol}</li>
                    <li style={styles.li}>Total photos: {mission.total_photos}</li>
                </ul>
            )
        }
        return render
    }

    render(){
        const styles = this.props.styles
        return(
            <div style={styles.mission}className="mission-ul-div">
                {this.renderMission()}
            </div>
        )
    }
}
