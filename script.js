    // Function to show/hide bottom sections based on the clicked option
    document.querySelectorAll('.option').forEach((option) => {
        option.addEventListener('click', function() {
            // Hide all bottom sections
            document.querySelectorAll('.bottom').forEach((section) => {
                section.style.display = 'none';
            });
    
            // Show the bottom section for the clicked option
            this.querySelector('.bottom').style.display = 'block';
    
            // Ensure the radio button inside the clicked option is checked
            this.querySelector('input[type="radio"]').checked = true;
    
            // Get the price from the clicked option
            const priceElement = this.querySelector('.price');
            const price = priceElement.textContent; // Get the price text
    
            // Update the total price
            document.getElementById('totalPrice').textContent = price; // Set the total price to the selected option's price
        });
    });