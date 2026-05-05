document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.querySelector('.booking-container form');
    const flightGrid = document.querySelector('.flight-grid');

    // 1. Form Validation and Search Handling
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get input values
        const origin = document.getElementById('origin').value.trim();
        const destination = document.getElementById('destination').value.trim();
        const date = document.getElementById('date').value;

        // Basic validation
        if (!origin || !destination || !date) {
            alert("Please fill in all fields.");
            return;
        }

        if (origin.toLowerCase() === destination.toLowerCase()) {
            alert("Origin and Destination cannot be the same.");
            return;
        }

        // 2. Mock Search Results
        // In a real app, you would fetch() data from a backend server here.
        displayMockResults(origin, destination);
    });

    // 3. Display Results Dynamically
    function displayMockResults(from, to) {
        // Clear previous results
        flightGrid.innerHTML = '<h3>Searching for flights...</h3>';

        setTimeout(() => {
            const mockFlights = [
                { id: 101, airline: "SkyHigh", price: 299, time: "10:00 AM" },
                { id: 102, airline: "Oceanic", price: 350, time: "02:30 PM" },
                { id: 103, airline: "Global", price: 410, time: "08:15 PM" }
            ];

            flightGrid.innerHTML = ''; // Clear loading text

            mockFlights.forEach(flight => {
                const card = document.createElement('div');
                card.className = 'flight-card';
                card.innerHTML = `
                    <h3>${flight.airline}: ${from} to ${to}</h3>
                    <p>Departure: ${flight.time}</p>
                    <p>Price: $${flight.price}</p>
                    <button class="book-now" onclick="handleBooking(${flight.id})">Book Now</button>
                `;
                flightGrid.appendChild(card);
            });
        }, 800); // Simulate network delay
    }
});

// 4. Booking Action
function handleBooking(flightId) {
    alert(`Flight ${flightId} selected! Redirecting to seat selection...`);
    // Example: window.location.href = `seats.html?id=${flightId}`;
}
