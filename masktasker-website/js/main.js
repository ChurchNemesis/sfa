/**
 * Mask Tasker - Main JavaScript File
 * This file contains utility functions used across the website
 */

/**
 * Load the main configuration file
 * @returns {Promise<Object>} Configuration object with months list
 */
async function loadConfig() {
    try {
        const response = await fetch('data/config.json');
        if (!response.ok) {
            throw new Error('Failed to load config.json');
        }
        return await response.json();
    } catch (error) {
        console.error('Error loading config:', error);
        throw error;
    }
}

/**
 * Load data for a specific month
 * @param {string} monthId - The month ID to load
 * @returns {Promise<Object>} Month data object
 */
async function loadMonth(monthId) {
    try {
        const response = await fetch(`data/months/month${monthId}.json`);
        if (!response.ok) {
            throw new Error(`Failed to load month${monthId}.json`);
        }
        return await response.json();
    } catch (error) {
        console.error(`Error loading month ${monthId}:`, error);
        throw error;
    }
}

/**
 * Format a date string for display
 * @param {string} dateString - Date string to format
 * @returns {string} Formatted date
 */
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', options);
}

/**
 * Calculate total scores across all months
 * @param {Array} months - Array of month IDs
 * @returns {Promise<Object>} Object with team names as keys and total scores as values
 */
async function calculateTotalScores(months) {
    const teamScores = {};

    for (const monthId of months) {
        try {
            const monthData = await loadMonth(monthId);
            monthData.submissions.forEach(submission => {
                if (!teamScores[submission.teamName]) {
                    teamScores[submission.teamName] = 0;
                }
                teamScores[submission.teamName] += submission.score;
            });
        } catch (error) {
            console.warn(`Could not load month ${monthId}:`, error);
        }
    }

    return teamScores;
}

/**
 * Show error message in a container
 * @param {string} containerId - ID of the container element
 * @param {string} message - Error message to display
 */
function showError(containerId, message) {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `<p style="text-align: center; color: red;">${message}</p>`;
    }
}

/**
 * Show loading message in a container
 * @param {string} containerId - ID of the container element
 * @param {string} message - Loading message to display (default: "Loading...")
 */
function showLoading(containerId, message = 'Loading...') {
    const container = document.getElementById(containerId);
    if (container) {
        container.innerHTML = `<div class="loading">${message}</div>`;
    }
}

/**
 * Escape HTML to prevent XSS
 * @param {string} text - Text to escape
 * @returns {string} Escaped text
 */
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Export functions for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadConfig,
        loadMonth,
        formatDate,
        calculateTotalScores,
        showError,
        showLoading,
        escapeHtml
    };
}
