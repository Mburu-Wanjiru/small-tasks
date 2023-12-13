document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
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
        loginForm.style.display = 'none';
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

    document.addEventListener('DOMContentLoaded', () => {
        // ... (unchanged code) ...
      
        // Add an event listener to the login form
        const loginFormElement = document.getElementById('loginForm');
        loginFormElement.addEventListener('submit', function(event) {
          event.preventDefault(); // Prevent the default form submission
          login(); // Call the login function when the form is submitted
        });
      
        // ... (unchanged code) ...
      });
      
  
    function logout() {
      loginForm.style.display = 'flex';
      userPortal.style.display = 'none';
      clearTimeout(logoutTimer);
    }
  
    function displayUserDetails(user) {
      userDetails.innerHTML = `
        <p><strong>Name:</strong> ${user.username}</p>
        <p><strong>Last Hairstyle:</strong> ${user.lastHairstyle}</p>
      `;
    }
  
    function displayPreviousBilling(user) {
      // Placeholder for fetching and displaying previous billing data
    }
  
    function displayHairstyles(user) {
      hairstyles.innerHTML = `<h3>Previous Hairstyles</h3>`;
      user.previousHairstyles.forEach(style => {
        const p = document.createElement('p');
        p.textContent = style;
        hairstyles.appendChild(p);
      });
    }
  
    function displayProducts() {
      productDisplay.innerHTML = `<h3>Available Products</h3>`;
      products.forEach(product => {
        const div = document.createElement('div');
        div.classList.add('product');
        div.innerHTML = `
          <img src="${product.image}" alt="${product.name}" class="product-image">
          <p><strong>${product.name}</strong></p>
          <p>${product.price} USD</p>
          <button onclick="addToCart(${user.username}, ${product.id})">Add to Cart</button>
        `;
        productDisplay.appendChild(div);
      });
    }
  
    function displayEmployees() {
      const employeeData = [
        { name: 'Alice', profession: 'Hairstylist', image: 'employee1.jpg' },
        { name: 'Bob', profession: 'Makeup Artist', image: 'employee2.jpg' },
        // Add more employee data as needed
      ];
  
      employees.innerHTML = `<h3>Our Team</h3>`;
      employeeData.forEach(employee => {
        const div = document.createElement('div');
        div.classList.add('employee');
        div.innerHTML = `
          <img src="${employee.image}" alt="${employee.name}" class="employee-image">
          <p><strong>${employee.name}</strong></p>
          <p>${employee.profession}</p>
        `;
        employees.appendChild(div);
      });
    }
  
    function addToCart(username, productId) {
      const user = users.find(u => u.username === username);
      const product = products.find(p => p.id === productId);
  
      if (user && product) {
        user.cart.push(product);
        alert(`${product.name} added to your cart.`);
        displayShoppingCart(user);
      }
    }
  
    function displayShoppingCart(user) {
      shoppingCart.innerHTML = `<h3>Shopping Cart</h3>`;
      if (user.cart.length === 0) {
        shoppingCart.innerHTML += `<p>Your cart is empty.</p>`;
      } else {
        user.cart.forEach(product => {
          const p = document.createElement('p');
          p.textContent = `${product.name} - ${product.price} USD`;
          shoppingCart.appendChild(p);
        });
      }
    }
  
    function checkout() {
      // Placeholder for actual checkout logic (e.g., processing payment, clearing the cart)
      const user = users.find(u => u.username === username);
      if (user && user.cart.length > 0) {
        alert('Checkout successful! Thank you for shopping.');
        user.cart = [];
        displayShoppingCart(user);
      } else {
        alert('Your cart is empty. Add products before checking out.');
      }
    }
  
    function startLogoutTimer() {
      logoutTimer = setTimeout(() => {
        logout();
        alert('You have been automatically logged out due to inactivity.');
      }, 60000); // Logout after 1 minute of inactivity
    }
  
    function displayImage() {
      const file = imageUpload.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          users.find(u => u.username === 'James').image = e.target.result;
          uploadedImage.src = e.target.result;
          alert('Image uploaded successfully!');
        };
        reader.readAsDataURL(file);
      }
    }
  });
  