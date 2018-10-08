import React, { Component } from 'react'

export default class Icon extends Component {
  static defaultProps = {
    color: 'black'
  }

  render() {
    switch (this.props.name) {
      case 'close':
        return (
          <svg width="36" height="36" viewBox="0 0 36 36">
            <rect x="1.11787" y="6.38678" width="7.74518" height="41.3076" rx="3.87259" transform="rotate(-45 1.11787 6.38678)" fill={this.props.color}/>
            <rect x="6.28011" y="35.5932" width="7.74518" height="41.3076" rx="3.87259" transform="rotate(-135 6.28011 35.5932)" fill={this.props.color}/>
          </svg>
        )
      default:
          return (
            <div>No icon provided...</div>
          )
    }
  }
}
