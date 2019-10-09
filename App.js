import React, { Component } from 'react'
import MainNavigation from './src/navigator/mainNavigation'

export default class App extends Component {
  render() {
    return (
      <MainNavigation screenProps={this.state} />
    )
  }
}
