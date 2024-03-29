import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  const sortByDate = () => {
    let values = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
    setData(values);
  }

  const sortByViews = () => {
    let values = [...data].sort((a, b) => a.views - b.views);
    setData(values);
  }



  useEffect(() => {
    setData(dataTable);
  }, [])

  return (
    <div >
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>
        </thead>
        {
          data.map((item) => (
            <tr>
              <td>{item.date}</td>
              <td>{item.views}</td>
              <td>{item.article}</td>
            </tr>
          ))
        }
      </table>
    </div>
  );
}

const dataTable =
  [

    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

  ]



export default App;
