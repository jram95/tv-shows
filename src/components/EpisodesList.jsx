

export default function EpisodesList({episodes}){
    
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

export default function AllEpisodes({name, season, number, image, summary}) {
  
    return (
  
      <>
        <h1>{name} S{season.toString().padStart(2, '0')}E{number.toString().padStart(2, '0')}</h1>
        <img src={image} alt={"Game of Thrones related"}/>
        <p>{summary.slice(3,-4)}</p> 
      </>
    );
  }
  