document.addEventListener('DOMContentLoaded', () => {
  const loginFormElement = document.getElementById('loginForm');
  const loginErrorMessage = document.getElementById('loginErrorMessage');
  const userPortal = document.getElementById('userPortal');
  const userDetails = document.getElementById('userDetails');
  const previousBilling = document.getElementById('previousBilling');
  const hairstyles = document.getElementById('hairstyles');
  const shoppingCart = document.getElementById('shoppingCart');
  const productDisplay = document.getElementById('productDisplay');
  const imageUpload = document.getElementById('imageUpload');
  const uploadedImage = document.getElementById('uploadedImage');
  const employees = document.getElementById('employees');

  // Test data for James and Peter
  const users = [
    { username: 'James', pin: '1111', lastHairstyle: 'Short Bob', previousHairstyles: ['Pixie Cut', 'Long Layers'], cart: [], image: null },
    { username: 'Peter', pin: '2222', lastHairstyle: 'Crew Cut', previousHairstyles: ['Mohawk', 'Taper Fade'], cart: [], image: null }
  ];

  // Test data for products
  const products = [
    { id: 1, name: 'Shampoo', price: 10, image: 'shampoo.jpg' },
    { id: 2, name: 'Conditioner', price: 8, image: 'conditioner.jpg' },
    { id: 3, name: 'Hair Gel', price: 12, image: 'hair_gel.jpg' },
    { id: 4, name: 'Hair Brush', price: 5, image: 'hair_brush.jpg' }
  ];

  function login() {
    const username = document.getElementById('username').value;
    const pin = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.pin === pin);

    if (user) {
      loginFormElement.style.display = 'none';
      userPortal.style.display = 'block';
      displayUserDetails(user);
      displayPreviousBilling(user);
      displayHairstyles(user);
      displayProducts();
      displayEmployees();
      startLogoutTimer();
    } else {
      loginErrorMessage.textContent = 'Invalid credentials. Please try again.';
    }
  }

  // Add an event listener to the login form
  loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    login(); // Call the login function when the form is submitted
  });

  // ... (unchanged code) ...
});
