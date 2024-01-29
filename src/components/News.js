import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
      console.log("hello bro")
      this.state = {

      }
  }
  
  render() {
    return (
      <div className='container my-3'>
        <h2>headlines</h2>

        {this.state.articles.map(()=>{  })}
        <div className="row">

            <div className="col-md-4">
              <NewsItem key={element.url} title = "mytitle" description={"mydesc"} newsURL="todo" imageURL=" " />
            </div>
            
          
        </div>

        


      </div>
    )
  }
}

export default News