import Articles from "./component.js/Articles";
import User from "./component.js/User";
function App() {
  return (
    <div className="App">
      <header>
        <h1>React Skeletons</h1>
      </header>
      <div className="content">
        <Articles />
        <User />
      </div>
    </div>
  );
}

export default App;
