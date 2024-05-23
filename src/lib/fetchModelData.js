import React, { useState, useEffect } from "react";

/**
 * fetchModel - Fetch a model from the web server.
 *
 * @param {string} url      The URL to issue the GET request.
 *
 */
function FetchModel(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => {return response.json()})
      .then((body) => {
        console.log(body);
        setData(body);
      }); 
  }, [url]);
  return data;
}

export default FetchModel;
