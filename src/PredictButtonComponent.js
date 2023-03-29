import * as tf from '@tensorflow/tfjs';
import { loadGraphModel } from '@tensorflow/tfjs';

// Labels
const Result = {
    0: "Aerosol",
    1: "Battery",
    2: "Cardboard",
    3: "Food can",
    4: "Glass bottle",
    5: "Ink cartridge",
    6: "Magazine",
    7: "Paper bag",
    8: "Plastic bag",
    9: "Plastic bottle",
    10: "Plastic utensils",
    11: "Soda can"
  };

const url = {
    model: 'https://raw.githubusercontent.com/hexbacon/Model/main/model.json',
    };

let model;

// Helper funciton to load mode
const loadModel = async () => {
    try {
        model = await loadGraphModel(url.model);
    } catch (error) {
        console.log(error);
        return;
    }
    if(model && model.predict) {
        console.log('Model is loaded and has predict method!');
    }
}
// PredictButton Handler
const PredictButtonHandler = () => {
    loadModel();
    async function predictButtonHandler() {
        // Check if model is loaded
        if(!model) {
            console.log("Model not loaded");
            return;
        }
        const resultList = document.getElementById("list");
        // Start processing image
        const image = document.getElementById("selected-image");
        const preImage = tf.browser.fromPixels(image, 3)
            .resizeNearestNeighbor([224, 224])
            .expandDims()
            .toFloat()
            .reverse(-1);
        // Start Predicting
        try {
            const predictResult = await model.executeAsync(preImage);
            const predictOutput = await predictResult.data();

            const order = Array.from(predictOutput)
                .map((p, i) => {
                    return {
                        probability: p,
                        className : Result[i]
                    };
                })
                .sort((first, second) => {
                    return second.probability - first.probability;
                })
                .slice(0, 13);

            // Insert in the result
            resultList.innerHTML = "";
            order.forEach((p) => {
                resultList.insertAdjacentHTML("beforeend", `<li>${p.className}: ${parseInt(Math.trunc(p.probability * 100))} %</li>`);
            });
        } catch (error) {
            console.log(error);
        }
    }
    return (
      <div className="button-input form__input">
        <button id="predictBtn" onClick={predictButtonHandler}>Predict</button>
      </div>
    );
}

export default PredictButtonHandler;