import React, { Component } from 'react';

export default class Jumbotron extends Component {
    render() {
        const jumboStyle = this.props.jumbotronStyles
        const titleStyle = this.props.jumbotronStyles.jumboTitle
        const subTitleStyle = this.props.jumbotronStyles.jumboSubTitle
        return(
            <div style={jumboStyle}>
                <h1 style={titleStyle}>the RED planet</h1>
                <h3 style={subTitleStyle}>images from the NASA Mars Rover</h3>
            </div>

        )
    }
}
