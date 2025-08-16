// Nama file: script.js

document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const nameInput = document.getElementById('name');
    const ageInput = document.getElementById('age');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = nameInput.value;
        const age = parseInt(ageInput.value, 10);
        
        // Ganti dengan URL Web App Anda
        const webAppURL = 'https://script.google.com/macros/s/AKfycbxjXLPkot2Fn-QXOKjTOxX4QWDT9FeQr7eInTwO23I/dev'; 
        const videoURL = 'https://www.youtube.com/watch?v=E2lUhw5KF10'; 

        if (age < 25) {
            messageDiv.textContent = 'Maaf, Anda tidak bisa melanjutkan ke halaman berikutnya.';
            messageDiv.style.color = '#dc3545';
        } else {
            messageDiv.textContent = 'Berhasil! Mengirim data...';
            messageDiv.style.color = '#007bff';

            // Data yang akan dikirim
            const data = {
                nama: name,
                umur: age
            };

            // Mengirim data ke Google Apps Script
            fetch(webAppURL, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            .then(response => response.text())
            .then(result => {
                console.log('Sukses:', result);
                messageDiv.textContent = 'Data berhasil terkirim. Mengalihkan...';
                // Setelah data berhasil dikirim, arahkan pengguna ke halaman video
                setTimeout(() => {
                    window.location.href = videoURL;
                }, 1500); // Tunda 1.5 detik sebelum mengalihkan
            })
            .catch(error => {
                console.error('Error:', error);
                messageDiv.textContent = 'Terjadi kesalahan saat mengirim data.';
                messageDiv.style.color = '#dc3545';
            });
        }
    });
});