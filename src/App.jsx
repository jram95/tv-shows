import AllEpisodes from "./components/AllEpisodes";
import SearchForEpisodes from "./components/SearchForEpisodes";
import episodeData from "./ShowData.json";

function App() {
  return (
  <>
  <SearchForEpisodes episodes={episodeData}/>
  </>
  );
}

export default App;