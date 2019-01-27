import React from 'react'
import Header from './Header'

export default class ChannelList extends React.Component {
  constructor(props) {
    super(props)
  }

  getLink(channel) {
    const userAgent = navigator.userAgent
    if (this.props.isStatus) {
      return `https://get.status.im/chat/public/${channel.substring(1)}`
    } else if (/Android/.test(userAgent)) {
      return 'https://play.google.com/store/apps/details?id=im.status.ethereum'
    } else if (/iPad|iPhone|iPod/.test(userAgent)) {
      return 'https://testflight.apple.com/join/J8EuJmey';
    } else if (/Macintosh|Windows|Linux/.test(userAgent)) {
      return 'https://status.im/get_desktop/'
    } else {
      return 'https://status.im/'
    }
  }

  render() {
    return(<>
       <Header/>
        <ul className="list pl0 ml0 center mw7 w6 br3 bg-white">
          {
            this.props.channels.map((channel, index) => {
              return(
              <a key={index} className="link black" href={this.getLink(channel)}>
                <li className={`pa4 tc dim db ${index === this.props.channels.length -1 ? '' : 'bb b--black-20'}`}>{channel}</li>
              </a>)
            })
          }
        </ul>
    </>)
  }
}