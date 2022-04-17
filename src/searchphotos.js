import React, {useState} from "react";
import Unsplash, {toJson} from "unsplash-js";
const unsplash = new Unsplash({
    accessKey: "",
})
export default function SearchPhotos(){
    const [query, setQuery] = useState(" ");
    console.log(query);
    const searchphotos = async(e) => {
        e.preventDefault();
        unsplash.search
        .photos(query)
        .then(toJson)
        .then((json) => {
            console.log(json);
        })
        console.log("Submitting the form");
    }
    return (
        <>
        <form className="form" onSubmit={searchPhotos}>
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
        
        </>
    )
}