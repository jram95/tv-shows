// component to make search bar
// search bar made LIVE using .filter 
// made case insensitive using helper function

import { useState } from "react"
import FilteredList from "./FilteredList";
import "./SearchForEpisodes.css";

export default function SearchForEpisodes({episodes}){
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const filteredResults = filterSearch(episodes, searchTerm)
    console.log( filteredResults)

    return (
        <>
        <div class="search-input">
            <input 
                class="search-box"
                placeholder="search away..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div>Displaying {filteredResults.length}/{episodes.length} episodes</div>
        </div>
        <FilteredList episodes={filteredResults} />
        </>
    )
}

//utility function for live search
function filterSearch(episodes, searchTerm){
    return episodes.filter((episode) => (episodeMatchesSearchTerm(episode, searchTerm)))
}

// function that returns true if search term is in name/summary of episode
// if it returns true, the filter method will return everything that matches
function episodeMatchesSearchTerm(episode, searchTerm){
    return (
        !searchTerm ||
        contains(episode.name, searchTerm) || contains(episode.summary, searchTerm)
    )
}

function contains(property, searchTerm){
    return property.toLowerCase().includes(searchTerm.toLowerCase())
}
