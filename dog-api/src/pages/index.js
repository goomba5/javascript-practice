import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import DogList from "../components/list"

const IndexPage = () => {
  const [useDogList, setDogList] = useState(false);
  const [hasError, setError] = useState({});

  async function getData() {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    response
      .json()
      .then(res => setDogList(res))
      .catch(err => setError(err))
  }

  useEffect(() => {
    getData();
  }, []);

}

export default IndexPage
