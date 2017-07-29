import React, { Component } from 'react'

export default class ImageDisplay extends Component {
    render(){
        let fetchedImages = this.props.images
        let renderImages = fetchedImages.map(image => {
            return (
                <li key={image.id}><img src={image.img_src} alt="the barren martian landscape...wait...what is THAT?? OH MY DEAR GOD, DELIVER... ... garbled."/></li>
            )
        })

        return(
            <ul className="images-ul">
                {renderImages}
            </ul>
        )
    }
}
