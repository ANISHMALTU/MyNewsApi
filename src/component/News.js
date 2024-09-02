import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number,
  };

  constructor() {
    super(); //***
    console.log("hello");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async updatenews() {
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-24&to=2024-08-24&sortBy=popularity&apiKey=694f6148815e419891543e48d6da4855&page=${this.state.page}&pageSize=${this.props.pageSize}`;

    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseddata = await data.json();
    this.props.setProgress(50);
    console.log(parseddata);
    this.setState({
      articles: parseddata.articles,
      totalResults: parseddata,
      loading: false,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updatenews();
  }

  tohandelprevious = async () => {
    this.setState({
      page: this.state.page - 1,
    });
    this.updatenews();
  };

  tohandelnext = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      this.setState({
        page: this.state.page + 1,
      });
      this.updatenews();
    }
  };

    fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/everything?q=apple&from=2024-08-24&to=2024-08-24&sortBy=popularity&apiKey=694f6148815e419891543e48d6da4855&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
    this.setState({
      page: this.state.page + 1,
    });
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseddata = await data.json();
    console.log(parseddata);

    this.setState({
      articles: this.state.articles.concat(parseddata.articles),
      totalResults: parseddata,
      loading: false,
    });
  };

  render() {
    return (
      <>
        <div className="container my-3">
          <h1 className="text-center " style={{marginTop:"4rem"}}>Taza Khabar - Top headlines </h1>
          {this.state.loading && <Spinner />}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row =3 my-4">
                {this.state.articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <Newsitem
                        title={element.title ? element.title.slice(0, 95) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 220)
                            : ""
                        }
                        imgUrl={element.urlToImage}
                        nxtUrl={element.url}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
        </div>

        {/* <div className="container d-flex justify-content-between my-3 "  >
        <button disabled={this.state.page<=1} type="button" onClick={this.tohandelprevious} className="btn btn-sm btn-dark">&larr; Previous</button>
        <button disabled= {this.state.page+1 >Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" onClick={this.tohandelnext} className="btn btn-sm btn-dark">Next &rarr;</button>
        </div> */}
      </>
    );
  }
}

export default News;
