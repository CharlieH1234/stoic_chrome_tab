function updateTime() {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');
    const now = new Date();
    
    // Update time
    const hours = now.getHours();
    const minutes = now.getMinutes();
    timeElement.textContent = `${hours}:${minutes.toString().padStart(2, '0')}`;
    
    // Update date
    const day = now.getDate().toString().padStart(2, '0');
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
        'July', 'August', 'September', 'October', 'November', 'December'];
    const month = monthNames[now.getMonth()];
    const year = now.getFullYear();
    dateElement.textContent = `${day} ${month} ${year}`;
}

function updateBackground() {
    document.body.style.backgroundImage = `url(https://bingw.jasonzeng.dev/?index=random)`;
}

function updateQuote() {
    const quoteElement = document.getElementById('quote');
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = randomQuote;
}

// Initial updates
updateTime();
updateBackground();
updateQuote();

// Update time every minute
setInterval(updateTime, 60000);

// Add this after the existing code
document.getElementById('searchForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const query = document.getElementById('searchInput').value;
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});

// Add this after the searchForm event listener
document.getElementById('refreshQuote').addEventListener('click', updateQuote); 