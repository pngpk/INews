import React from 'react'

const NewsItem = (props)=>{

    let {title, description,imgurl,newsurl,author,date,source} = props;
    return (
      <div>
        <div className="card" >
          <div style ={ {display: 'flex',
          justyfyContent: 'flex-end',
          position:'absolute',
          right:'0'}}>
          <span className=" badge rounded-pill bg-danger"> {source} </span> 
          </div>
        
            <img src={!imgurl?"https://c.ndtvimg.com/2023-01/c51kea6_haryana-auto-fight_625x300_06_January_23.jpg":imgurl} className="card-img-top" alt="..."/>
             <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown": author} on {new Date (date).toGMTString()}</small></p>
              <a href={newsurl} target="_blank" rel="noopener noreferrer" className="btn btn-primary bg-black">Read More</a>
             </div>
        </div>
      </div>
    )
  
}

export default NewsItem