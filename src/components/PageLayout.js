import React, { Component } from 'react';
import {pageLayoutStyles} from '../styles/inlineStyles.js';
import Jumbotron from './Jumbotron.js';
import Footer from './Footer.js';


export default class PageLayout extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        const styles = pageLayoutStyles

        return(
            <div>
                <Jumbotron jumbotronStyles={styles.jumbotron}/>
                {this.props.children}
                <Footer footerStyles={styles.footer}/>
            </div>
        )
    }
}
