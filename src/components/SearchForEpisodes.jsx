// component to make search bar
// search bar made LIVE using .filter 
// made case insensitive using helper function

import { useState } from "react"
import EpisodesList from "./EpisodesList";
import "./SearchForEpisodes.css";

export default function SearchForEpisodes({episodes}){
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
    }

    const filteredResults = filterSearch(episodes, searchTerm)

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
        <EpisodesList episodes={filteredResults} />
        </>
    )
}

//helper function to filter
function filterSearch(episodes, searchTerm){
    return episodes.filter(episodeMatchesSearchTerm(episode, searchTerm));
}

function episodeMatchesSearchTerm(episode, searchTerm){
    return (
        episode.name.includes(searchTerm) || episode.summary.includes(searchTerm)
    )
}

function contains(property, searchTerm){
    return property.toLowerCase().includes(searchTerm.toLowerCase())
}
