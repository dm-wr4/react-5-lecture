import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import albums from '../data.json'
import './style.css'

class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      album: {},
    }
  }

  componentDidMount() {
    const { albumId } = this.props.match.params

    const album = albums.find((element) => element.id === +albumId)

    if (!album) {
      this.props.history.push('/404')
    } else {
      this.setState({
        album: album,
      })
    }
  }

  componentDidUpdate(prevProps) {
    const { albumId } = this.props.match.params
    if (albumId !== prevProps.match.params.albumId) {
      const album = albums.find((element) => element.id === +albumId)

      if (!album) {
        this.props.history.push('/404')
      } else {
        this.setState({
          album: album,
        })
      }
    }
  }

  handleBuyAlbum = () => {
    alert('YOU BOUGHT IT')
    this.props.history.push('/')
  }

  render() {
    return (
      <div className="single-album">
        <h2>
          {this.state.album.artist} - {this.state.album.title}
        </h2>
        <img
          src={this.state.album.image}
          alt={this.state.album.title}
          className="large-album-art"
        />
        <button onClick={() => this.handleBuyAlbum()} className="buy-button">
          Buy Now!
        </button>
      </div>
    )
  }
}
export default withRouter(SingleAlbum)
