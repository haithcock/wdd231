// storage.js

// Function to save data to localStorage
function saveData(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

// Function to retrieve data from localStorage
function getData(key) {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
}

// Function to save learning progress
function saveProgress(topic, status) {
    let progress = getData('learningProgress') || {};
    progress[topic] = status; // e.g., "completed", "in progress"
    saveData('learningProgress', progress);
}

// Function to retrieve learning progress
function getProgress() {
    return getData('learningProgress') || {};
}

// Function to display progress on the page
function displayProgress() {
    const progress = getProgress();
    const progressSection = document.getElementById('progress-section');

    if (progressSection) {
        let html = '<h3>Your Learning Progress</h3><ul>';
        for (const [topic, status] of Object.entries(progress)) {
            html += `<li><strong>${topic}:</strong> ${status}</li>`;
        }
        html += '</ul>';
        progressSection.innerHTML = html;
    }
}

// Example: Save progress when a topic is marked as completed
function markTopicCompleted(topic) {
    saveProgress(topic, 'completed');
    displayProgress(); // Update the displayed progress
}

// Example: Initialize progress display when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayProgress();
});