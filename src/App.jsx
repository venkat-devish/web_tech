import LetterSearch from "./components/letterSearch/LetterSearch";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      {/* <LetterSearch /> */}
      <Timer duration={2 * 24 * 60 * 60 * 1000} />
    </div>
  );
}

export default App;
