import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import FilterBody from "./Components/FilterBody";
import AllReviews from "./Components/AllReviews";

const App = () => {
  const [postData, setPostData] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/`).then((res) => {
      console.log("re-render");
      setPostData(res.data);
    });
  }, []);

  return (
    <>
      <Header setFilter={setFilter} />
      {filter > 0 ? (
        <FilterBody filter={filter} postData={postData} />
      ) : (
        <AllReviews postData={postData} />
      )}
    </>
  );
};

export default App;
