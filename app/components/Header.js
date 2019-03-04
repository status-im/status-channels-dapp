import React from 'react'
export default class ChannelList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <header className="tc pa2">
        <img src="https://status.im/img/status-logo.svg" className="pt3" />
        <h1 className="f1 black-70">Trending Channels</h1>
        <h2 className="f2 black-70">Chat securly in open source communities</h2>
      </header>
    )
  }
}