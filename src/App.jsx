import SearchForEpisodes from "./components/SearchForEpisodes";
import episodeData from "./ShowData.json";
import "./App.css";

function App() {
  return (
  <>
  <SearchForEpisodes episodes={episodeData}/>
  </>
  );
}

export default App;