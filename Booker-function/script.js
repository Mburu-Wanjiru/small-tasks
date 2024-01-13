function bookCommodity() {
    const name = document.getElementById('name').value;
    const identityNumber = document.getElementById('identityNumber').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
  
    // Assuming you have a backend endpoint for booking and data storage
    const bookingData = {
      name: name,
      identityNumber: identityNumber,
      phoneNumber: phoneNumber,
    };
  
    // Send data to the backend
    sendDataToBackend(bookingData);
  
    // Send a confirmation message to the booker
    sendMessage(phoneNumber, `Hello ${name}, your booking is confirmed!`);
  
    // Clear the form after booking
    clearForm();
  }
  
  function sendDataToBackend(data) {
    // This is a simplified example; you would replace this with your actual backend logic
    // For example, you might use AJAX, Fetch API, or another method to send data to the server
    console.log('Sending data to the backend:', data);
  }
  
  function sendMessage(phoneNumber, message) {
    // This is a simplified example; you would replace this with your actual SMS or notification sending logic
    // For example, you might use a third-party SMS service or your server-side logic
    console.log(`Sending message to ${phoneNumber}: ${message}`);
  }
  
  function clearForm() {
    // Clear the form fields after booking
    document.getElementById('name').value = '';
    document.getElementById('identityNumber').value = '';
    document.getElementById('phoneNumber').value = '';
  }
  