import AllEpisodes from "./AllEpisodes"

export default function FilteredList({episodes}){
    
    return (
        <div>
            {episodes.map((episode) => 
                <AllEpisodes
                key={episode.id}
                name={episode.name}
                season={episode.season}
                number={episode.number}
                image={episode.image.medium}
                summary={episode.summary}
                />
            )
            }
        </div>
    )

}
