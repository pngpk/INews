import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

const News = (props) => {
  // const [pageSize, setPageSize] = useState(12);
  const [articles, setArticle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=6c7a4d881829415aabe5cddab74b49e9&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticle(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
  };

  useEffect(() => {
    updateNews();
  }, []);

  const handlePrevClick = async () => {
    setPage(page - 1);
    updateNews();
  };

  const handleNextClick = async () => {
    setPage(page + 1);
    updateNews();
  };

  return (
    <div className="container my-3">
      <div className="row">
        <h1 className="text-center" style={{ margin: "35px 0px", marginTop: '90px' }}>
          INews - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {loading && <Spinner />}

        {!loading &&
          articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgurl={element.urlToImage}
                  newsurl={element.url}
                  source={element.source.name}
                />
              </div>
            );
          })}
      </div>

      <div className="container d-flex justify-content-between">
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={handlePrevClick}
        >
          {" "}
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / 9)}
          type="button"
          className="btn btn-dark"
          onClick={handleNextClick}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: "general",
};

News.propsType = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News;
