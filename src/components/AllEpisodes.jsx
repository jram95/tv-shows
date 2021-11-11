//react function component that will retrieve:
// name, season, number, image.medium, summary
// pad the start 


export default function AllEpisodes({name, season, number, image, summary}) {
  
  return (

    <>
      <h1>{name} S{season.toString().padStart(2, '0')}E{number.toString().padStart(2, '0')}</h1>
      <img src={image} alt={"Game of Thrones related"}/>
      <p>{summary.slice(3,-4)}</p> 
    </>
  );
}
