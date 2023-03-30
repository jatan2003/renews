import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'

export default class News extends Component {
  articles = [];
  static defaultProps ={
    country:"in",
    pageSize:9,
    topic:"top-headlines",
    category:"business",
    apiKey:"b87a7e1babb54a54989e6ef3a756bca0"
    
  }
  

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: true,
      page:1
    }
  }
  async componentDidMount(){
    let {country,topic,category,apiKey}=this.props
    this.props.setProgress(5);
    this.setState({loading:true})
    let url = `https://newsapi.org/v2/${topic}?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${1}`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(this.totalResults);
    url = `https://newsapi.org/v2/${topic}?country=${country}&category=${category}&apiKey=${apiKey}&page=1&pageSize=${parseData.totalResults}`;
   data = await fetch(url);
  parseData = await data.json()
    console.log(this.totalResults);
    this.setState({articles:parseData.articles,
      totalResults:parseData.totalResults,
      
      loading:false
    })

    document.title=`ReNews-${category}`
    this.props.setProgress(100);

  }
  render() {
    let {category}=this.props
    
  
    return (
      
      <div className="container text-center">
        
        {this.state.loading &&<Loading />}
        <h1 className='mt-5 pt-1' >ReNews-{category}</h1>
        {<div className='row'>
          {!this.state.loading &&this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} imageUrl={element.urlToImage} url={element.url} date={element.publishedAt} source={element.source.name}/>
            </div>
          }
          )}
        </div>}
  
        
      </div>

    )
  }
}
