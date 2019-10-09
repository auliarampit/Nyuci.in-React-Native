import React, { Component } from 'react'
import SlideShow from 'react-native-image-slider-show'

export default class Slide extends Component {
    constructor(props) {
        super(props)
        this.state = {
            position: 0,
            interval: null,
            dataSource: [
                {
                    url: require('../assets/A8.jpg')
                },
                {
                    url: require('../assets/A9a.jpg')
                }
            ]
        }
    }

    componentDidMount() {
        this.setState({
            interval: setInterval(() => {
                let position;
                if (this.state.position === this.state.dataSource.length - 1) {
                    position = 0
                } else { position = this.state.position + 1 }
                this.setState({
                    position
                })
            }, 2000)
        })
    }
    render() {
        return (
            <SlideShow
                overlay={false}
                height={190}
                dataSource={this.state.dataSource}
                position={this.state.position}
                onPositionChanged={position => { console.warn('slide =', position); this.setState({ position }) }}
            />
        )
    }
}

