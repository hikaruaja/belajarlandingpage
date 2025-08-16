document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const ageInput = document.getElementById('age');
    const messageDiv = document.getElementById('message');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Mencegah form untuk refresh halaman

        const age = parseInt(ageInput.value, 10);
        const videoURL = 'URL_VIDEO_ANDA_DI_SINI'; // Ganti dengan link video Anda

        // Periksa jika umur kurang dari 25
        if (age < 25) {
            messageDiv.textContent = 'Maaf, Anda tidak bisa melanjutkan ke halaman berikutnya.';
            messageDiv.style.color = '#dc3545';
        } else {
            messageDiv.textContent = ''; // Hapus pesan kesalahan jika ada
            window.location.href = videoURL; // Arahkan ke URL video
        }
    });
});