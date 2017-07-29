import React, { Component } from 'react'

export default class ImageDisplay extends Component {
    render(){
        const styles = this.props.displayStyles
        let fetchedImages = this.props.images
        let renderImages = fetchedImages.map(image => {
            return (
                <li style={styles.li} key={image.id}><img style={styles.img} src={image.img_src} alt="the barren martian landscape...wait...what is THAT?? OH MY DEAR GOD, DELIVER... ... garbled."/></li>
            )
        })

        return(
            <ul style={styles.ul} className="images-ul">
                {renderImages}
            </ul>
        )
    }
}
