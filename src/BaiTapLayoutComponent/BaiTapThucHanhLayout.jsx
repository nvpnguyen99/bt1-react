import React, { Component } from 'react'
import Footer from './Footer'
import Body from './Body'
import Header from './Header'

export default class BaiTapThucHanhLayout extends Component {
  render() {
    return (
      <>
        <Header />
        <Body/>
        <Footer />
      </>
    )
  }
}
