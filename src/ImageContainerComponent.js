import ImageSelect from "./ImageSelect Component";
import PredictButtonHandler from "./PredictButtonComponent";

const ImageButtonContainer = () => {
    return (
    <div className="input-container form">
        <ImageSelect />
        <PredictButtonHandler />
    </div>);
}

export default ImageButtonContainer;