const ImageSelect = () => {
    function imageHandler() {
      let reader = new FileReader();
      reader.onload = function () {
        let dataURL = reader.result;
        document.getElementById("selected-image").setAttribute("src", dataURL);
        let predictionList = document.getElementById("prediction-list");
        // If the list is not empty, clear it
        if (predictionList) {
          predictionList.innerHTML = "";
        }
      };
        // Read the image
    let file = document.getElementById("image-selector").files[0];
    reader.readAsDataURL(file);
    }
    return (
      <div className="file-input form__input">
        <input type="file" id="image-selector" accept="image/*" onChange={imageHandler}></input>
      </div>
    );
  }

  export default ImageSelect;