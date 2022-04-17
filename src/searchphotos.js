import React, {useState} from "react";
import Unsplash, {toJson} from "unsplash-js";
const unsplash = new Unsplash({
    accessKey: process.env.REACT_APP_API_KEY,
})
export default function SearchPhotos(){
    const [query, setQuery] = useState(" ");
    const [pics, setPicks] = useState([]);
    console.log(query);
    const SearchPhotos = async(e) => {
        e.preventDefault();
        unsplash.search
        .photos(query, 1, 20)
        .then(toJson)
        .then((json) => {
            setPicks(json.results);
        })
        console.log("Submitting the form");
    }
    return (
        <>
        <form className="form" onSubmit={SearchPhotos}>
            <label className="label" htmlFor="query">
                {" "}
            </label>
            <input type="text"
            name="query" className="input"
            placeholder = {`Try "nature" or "wildlife"`}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="button">
                Search
            </button>
        </form>
        <div className="card-list">
        {
          pics.map((pic) => 
            <div className="card" key={pic.id}>
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>)
        }
      </div>

        </>
    )
}