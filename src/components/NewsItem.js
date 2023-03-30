import "./style.css"
import React, { Component } from "react"

export class NewsItem extends Component {
  render(){
    let{imageUrl,title,url,date,source}=this.props;
    return (
        <div>
        <div className="card  ml-5 mt-2" >
        <img className="card-img-top " src={imageUrl} alt="Card ima ge cap"/>
        <div className="card-body ">
          <h5 className="card-title">{title}</h5>
          <p className='card-text my-0'><small className='text-muted'>{new Date(date).toGMTString()}</small></p>
          <p className='card-text mb-1'><small className='text-muted'>{source}</small></p>
          <a href={url} rel="noreferrer"className="btn btn-primary">Read More</a>
        </div>
      </div>
        </div>
    )
  }
}
export default NewsItem   
