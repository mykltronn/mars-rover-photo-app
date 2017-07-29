import React, { Component } from 'react'

export default class GetImageButton extends Component {
    render() {

        return (
            <div>
                <input className="btn btn-primary" type="submit" value="Submit" onClick={this.props.submit}/>
            </div>
        )
    }
}
