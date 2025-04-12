<script>
  // Function to handle image upload and prediction
  function predictSkinDisease() {
    const input = document.getElementById('skinImage');
    const file = input.files[0];
    if (!file) {
      alert('Please select an image file.');
      return;
    }

    // Create a FormData object and append the image file
    const formData = new FormData();
    formData.append('image', file);

    // Send a POST request to your Python server for prediction
    fetch('/predict', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      // Display the predicted result
      alert(`Predicted Skin Disease: ${data.result}`);
    })
    .catch(error => {
      console.error('Prediction failed:', error);
      alert('Prediction failed. Please try again.');
    });
  }
</script>
