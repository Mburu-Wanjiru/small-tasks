document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const appointmentsSection = document.getElementById('appointments');
    const appointmentsList = document.getElementById('appointmentsList');
  
    function login() {
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Replace with actual API call for authentication
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          loginForm.style.display = loadAppointments();
          appointmentsSection.style.display = 'block';
          loadAppointments();
        } else {
          alert('Invalid credentials. Please try again.');
        }
      });
    }
  
    function logout() {
      // Replace with actual API call for logout
      fetch('/logout')
        .then(() => {
          loginForm.style.display = 'flex';
          appointmentsSection.style.display = 'none';
        });
    }
  
    function loadAppointments() {
      // Replace with actual API call to fetch appointments
      fetch('/appointments')
        .then(response => response.json())
        .then(appointments => {
          // Display appointments
          appointmentsList.innerHTML = '';
          appointments.forEach(appointment => {
            const li = document.createElement('li');
            li.textContent = `Customer: ${appointment.customerName}, Service: ${appointment.service}, Date: ${appointment.date}, Time: ${appointment.time}`;
            appointmentsList.appendChild(li);
          });
        });
    }
  });
  