import React from 'react'
import Home from './components/Home'
import About from './components/About'
import AlbumList from './components/AlbumList'
import SingleAlbum from './components/SingleAlbum'
import NotFound from './components/NotFound'
import { Switch, Route } from 'react-router-dom'

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/albums" component={AlbumList} />
    <Route exact path="/album/:albumId" component={SingleAlbum} />
    <Route component={NotFound} />
  </Switch>
)
