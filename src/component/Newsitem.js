import React, { Component } from 'react'

export   class Newsitem extends Component {
  render() {
  let {title , description , imgUrl ,nxtUrl,date,source} = this.props;
    return (  
      <div className="my-4">
        <div   className="card" style={{width:"19rem"}}>
          <img src= {!imgUrl?"https://s.yimg.com/ny/api/res/1.2/4wCWYh81PtQHR1B8Dd21Rg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02MDA-/https://media.zenfs.com/en/the_wall_street_journal_hosted_996/80c4d69d35afc85e88b2dee1a5ebcbab":imgUrl}   className="card-img-top" alt="..."/>
          <div   className="card-body">
          <h5   className="card-title">{title}... src:- <span className="badge text-bg-danger">{source}</span></h5>
          <p   className="card-text">{description}...</p>
          <p className="card-text"><small className="text-body-secondary"> on { new Date(date).toGMTString()}</small></p>

          <a rel="noreferrer" href={nxtUrl} target="_blank"   className="btn  btn-sm btn-dark"> read more</a>
        </div>
      </div>
      </div>
    )
  }
}

export default Newsitem
