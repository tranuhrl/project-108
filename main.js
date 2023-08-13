function startRecording()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_hvrGXmZ8/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if (error)
    {
        console.error(error)
    } else {
        console.log(results)

        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("label").innerHTML = "Detected Sound - " + results[0].label;
        document.getElementById("confidence").innerHTML = "Accuracy of Sound -" +(results[0].confidence*100).toFixed(2)+'%';
        document.getElementById("label").style.color = "rgb("+random_number_r+','+random_number_g+','+random_number_b+")";
        document.getElementById("confidence").style.color = "rgb("+random_number_r+','+random_number_g+','+random_number_b+")";

        ear = document.getElementById("ear");

        if (results[0].label == "barking") {
            ear.src = "dog.jpg"
        } else if (results[0].label == "meowing") {
            ear.src = "cat.jpg"
        } else if (results[0].label == "roaring") {
            ear.src = "dino.jpg"
        } else {
            ear.src = "cow.jpg"
        }
    }


}