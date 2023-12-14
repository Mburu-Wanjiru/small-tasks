document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const loginButton = document.getElementById('loginButton');
    const loginErrorMessage = document.getElementById('loginErrorMessage');
    const userPortal = document.getElementById('userPortal');
    const userDetails = document.getElementById('userDetails');
    const previousBilling = document.getElementById('previousBilling');
    const hairstyles = document.getElementById('hairstyles');
    const shoppingCart = document.getElementById('shoppingCart');
    const productDisplay = document.getElementById('productDisplay');
    const spaServices = document.getElementById('spaServices');
    const girlServices = document.getElementById('girlServices');
    const boyHaircuts = document.getElementById('boyHaircuts');
    const imageUpload = document.getElementById('imageUpload');
    const uploadedImage = document.getElementById('uploadedImage');
    const employees = document.getElementById('employees');
  
    // Test data for users
    const users = [
      { username: 'James', pin: '1111', lastHairstyle: 'Short Bob', previousHairstyles: ['Pixie Cut', 'Long Layers'], cart: [], image: null },
      { username: 'Peter', pin: '2222', lastHairstyle: 'Crew Cut', previousHairstyles: ['Mohawk', 'Taper Fade'], cart: [], image: null },
      { username: 'John', pin: '3333', lastHairstyle: 'Messy Bun', previousHairstyles: ['Straight Hair', 'Bob Cut'], cart: [], image: null },
      { username: 'Jane', pin: '4444', lastHairstyle: 'French Braid', previousHairstyles: ['Ponytail', 'Layered Cut'], cart: [], image: null },
      { username: 'Emma', pin: '5555', lastHairstyle: 'Slicked Back', previousHairstyles: ['Top Knot', 'Bantu Knots'], cart: [], image: null }
    ];
  
    // Test data for products
    const products = [
      { id: 1, name: 'Shampoo', price: 10, image: 'shampoo.jpg' },
      { id: 2, name: 'Conditioner', price: 8, image: 'conditioner.jpg' },
      { id: 3, name: 'Hair Gel', price: 12, image: 'hair_gel.jpg' },
      { id: 4, name: 'Hair Brush', price: 5, image: 'hair_brush.jpg' }
      // Add more products as needed
    ];
  
    // Test data for spa services
    const spaServicesData = [
      { name: 'Relaxation Massage', price: 50, image: 'spa1.jpg' },
      { name: 'Facial Treatment', price: 30, image: 'spa2.jpg' },
      { name: 'Hot Stone Massage', price: 60, image: 'spa3.jpg' },
      { name: 'Manicure', price: 20, image: 'spa4.jpg' }
      // Add more spa services as needed
    ];
  
    // Test data for services for girls
    const girlServicesData = [
      { name: 'Princess Braids', price: 25, image: 'girl1.jpg' },
      { name: 'Sparkle Manicure', price: 15, image: 'girl2.jpg' },
      { name: 'Fairy Tale Makeup', price: 30, image: 'girl3.jpg' },
      { name: 'Glitter Tattoos', price: 10, image: 'girl4.jpg' }
      // Add more services for girls as needed
    ];
  
    // Test data for haircuts for boys
    const boyHaircutsData = [
      { name: 'Classic Crew Cut', price: 15, image: 'boy1.jpg' },
      { name: 'Spiky Top Fade', price: 20, image: 'boy2.jpg' },
      { name: 'Side Part Pompadour', price: 18, image: 'boy3.jpg' },
      { name: 'Mohawk Fade', price: 25, image: 'boy4.jpg' }
      // Add more haircuts for boys as needed
    ];
  
    // Test data for employees
    const employeeData = [
      { name: 'Alice', profession: 'Hairstylist', image: 'employee1.jpg' },
      { name: 'Bob', profession: 'Makeup Artist', image: 'employee2.jpg' },
      { name: 'Eva', profession: 'Spa Therapist', image: 'employee3.jpg' },
      { name: 'David', profession: 'Barber', image: 'employee4.jpg' },
      { name: 'Grace', profession: 'Nail Technician', image: 'employee5.jpg' }
      // Add more employees as needed
    ];
  
    // Added this event listener for the submit button
    loginButton.addEventListener('click', function(event) {
      event.preventDefault();
      login();
    });
  
    function login() {
      const username = document.getElementById('username').value;
      const pin = document.getElementById('password').value;
  
      const user = users.find(u => u.username === username && u.pin === pin);
  
      if (user) {
        loginForm.style.display = 'none';
        userPortal.style.display = 'block';
        displayUserDetails(user);
        displayPreviousBilling(user);
        displayHairstyles(user);
        displayProducts();
        displaySpaServices();
        displayGirlServices();
        displayBoyHaircuts();
        displayEmployees();
        startLogoutTimer();
      } else {
        loginErrorMessage.textContent = 'Invalid credentials. Please try again.';
      }
    }
  
    // ... (unchanged code) ...
  
    function displaySpaServices() {
      spaServices.innerHTML = `<h3>Spa Services</h3>`;
      spaServicesData.forEach(service => {
        const div = createServiceDiv(service);
        spaServices.appendChild(div);
      });
    }
  
    function displayGirlServices() {
      girlServices.innerHTML = `<h3>Services for Girls</h3>`;
      girlServicesData.forEach(service => {
        const div = createServiceDiv(service);
        girlServices.appendChild(div);
      });
    }
  
    function displayBoyHaircuts() {
      boyHaircuts.innerHTML = `<h3>Haircuts for Boys</h3>`;
      boyHaircutsData.forEach(haircut => {
        const div = createServiceDiv(haircut);
        boyHaircuts.appendChild(div);
      });
    }
  
    function createServiceDiv(service) {
      const div = document.createElement('div');
      div.classList.add('service');
      div.innerHTML = `
        <img src="${service.image}" alt="${service.name}" class="service-image">
        <p><strong>${service.name}</strong></p>
        <p>${service.price} USD</p>
        <button onclick="addToCart(${user.username}, ${service.name}, ${service.price})">Add to Cart</button>
      `;
      return div;
    }
  
    function addToCart(username, itemName, itemPrice) {
      const user = users.find(u => u.username === username);
  
      if (user) {
        const item = { name: itemName, price: itemPrice };
        user.cart.push(item);
        alert(`${item.name} added to your cart.`);
        displayShoppingCart(user);
      }
    }
  
    // ... (unchanged code) ...
  });
  