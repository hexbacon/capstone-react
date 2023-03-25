import "./App.css"


function App() {
  return (
    <>
      <ImageButtonContainer />
      <Results />
    </>
  );
}

const ImageSelect = () => {
  return (
    <div className="file-input form__input">
      <input type="file" id="image-selector" accept="image/*"></input>
    </div>
  );
}

const InputButton = () => {
  return (
    <div className="button-input form__input">
      <button id="predictBtn">Predict</button>
    </div>
  );
}

const ImageButtonContainer = () => {
  return <div className="input-container form">
  <ImageSelect />
  <InputButton />
  </div>
}

const Results = () => {
  return (
    <div className="results">
    <div className="result-in">
      <div className="result-image">
        <h2>Image</h2>
        <img id="selected-image" className="ml-3" width="250" alt="" />
      </div>
      <div className="result-list">
        <ol id="list"></ol>
      </div>
    </div>
  </div>
  );
}

export default App;
