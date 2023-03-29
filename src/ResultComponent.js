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

export default Results;