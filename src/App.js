import './App.css';
import Main from './components/Main';
// import RecipeReviewCard from './components/Card';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}

       <Navigation />
      {/* </header> */}
      <Main />
        {/* <RecipeReviewCard /> */}
    </div>
  );
}

export default App;
