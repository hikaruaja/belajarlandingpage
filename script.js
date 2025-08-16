document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = nameInput.value.trim();
        const age = parseInt(ageInput.value, 10);
        
        // Replace with your Web App URL
        const webAppURL = 'https://script.google.com/macros/s/AKfycbzCdcRLJH4IcTKGtOOJ1FEyEA_CH5-UNIx87EvWrbGlO_-oV3A17YkqX8bgug5Xbu3T/exec'; 
        const videoURL = 'https://www.youtube.com/watch?v=E2lUhw5KF10';

        // Clear previous messages
        messageDiv.textContent = '';
        
        // Validate inputs
        if (!name || isNaN(age)) {
            showMessage('Harap isi semua field dengan benar', 'error');
            return;
        }

        if (age < 25) {
            showMessage('Maaf, Anda tidak bisa melanjutkan ke halaman berikutnya.', 'error');
            return;
        }

        showMessage('Berhasil! Mengirim data...', 'loading');

        try {
            // Send data to Google Apps Script
            const response = await fetch(webAppURL, {
                method: 'POST',
                // Important: Use 'no-cors' for Google Apps Script
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    nama: name,
                    umur: age
                })
            });

            // Note: With 'no-cors' mode, we can't read the response directly
            // But we know it succeeded if we get here
            showMessage('Data berhasil terkirim. Mengalihkan...', 'success');
            
            // Redirect after delay
            setTimeout(() => {
                window.location.href = videoURL;
            }, 1500);

        } catch (error) {
            console.error('Error:', error);
            showMessage('Terjadi kesalahan saat mengirim data.', 'error');
        }
    });

    function showMessage(text, type) {
        messageDiv.textContent = text;
        messageDiv.className = ''; // Clear previous classes
        messageDiv.classList.add(type);
        
        // Set color based on type
        const colors = {
            'error': '#dc3545',
            'success': '#28a745',
            'loading': '#007bff'
        };
        messageDiv.style.color = colors[type] || '#6c757d';
    }
});