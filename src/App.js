import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import About from './components/About';
import LoadingBar from 'react-top-loading-bar';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from './components/Footer';


export default class App extends Component {
  
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }
  apiKey=process.env.NEWS_API
  render() {
    
    return (
      <div>
        <Router>
        <LoadingBar
          color='red'
          progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress}  key={"general"} pageSize={6} country={"in"} topic={"top-headlines"} category={"general"} apiKey={this.apiKey} />} ></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress}  key={"business"} pageSize={6} country={"in"} topic={"top-headlines"} category={"business"} apiKey={this.apiKey} />} ></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress}  key={"sports"} pageSize={6} country={"in"} topic={"top-headlines"} category={"sports"} apiKey={this.apiKey} />} ></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress}  key={"technology"} pageSize={6} country={"in"} topic={"top-headlines"} category={"technology"} apiKey={this.apiKey} />} ></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress}  key={"entertainment"} pageSize={6} country={"in"} topic={"top-headlines"} category={"entertainment"} apiKey={this.apiKey} />} ></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress}  key={"science"} pageSize={6} country={"in"} topic={"top-headlines"} category={"science"} apiKey={this.apiKey} />} ></Route>
            <Route exact path='/about' element={<About  key={"about"}/>} ></Route>
          </Routes>
        </Router>
        <Footer/>
      </div>
    )
  }
}

