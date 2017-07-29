import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        const footerStyles = this.props.footerStyles
        const footerText = this.props.footerStyles.footerText
        return (
            <div style={footerStyles}>
                <div style={footerText}><i className="fa fa-hand-pointer-o" aria-hidden="true"></i>   check out these sweet mars pics   <i className="fa fa-hand-pointer-o" aria-hidden="true"></i></div>
            </div>
        )
    }
}
