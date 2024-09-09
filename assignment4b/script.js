document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.getElementById('startButton');
    const timerDisplay = document.getElementById('timerDisplay');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    let timerInterval;

    function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    }

    function startTimer() {
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        let totalSeconds = (minutes * 60) + seconds;

        if (totalSeconds <= 0) {
            alert('Please enter a positive time.');
            return;
        }

        // Clear any existing timer
        clearInterval(timerInterval);

        // Update the display immediately
        timerDisplay.textContent = formatTime(totalSeconds);

        // Start the countdown
        timerInterval = setInterval(() => {
            if (totalSeconds <= 0) {
                clearInterval(timerInterval);
                timerDisplay.textContent = '00:00';
                return;
            }
            totalSeconds--;
            timerDisplay.textContent = formatTime(totalSeconds);
        }, 1000);
    }

    startButton.addEventListener('click', startTimer);
});
