// Leaderboard functionality
class Leaderboard {
    constructor() {
        this.storageKey = 'quizLeaderboard';
        this.entries = this.loadEntries();
        this.currentFilter = 'all';
    }

    // Load leaderboard entries from localStorage
    loadEntries() {
        const saved = localStorage.getItem(this.storageKey);
        return saved ? JSON.parse(saved) : [];
    }

    // Save leaderboard entries to localStorage
    saveEntries() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.entries));
    }


    // Add a new score to the leaderboard
    addEntry(name, score, totalQuestions, timeSpent) {
        const now = new Date();
        const entry = {
            id: Date.now().toString(),
            name: name || 'Anonymous',
            score,
            percentage: Math.round((score / totalQuestions) * 100),
            totalQuestions,
            date: now.toISOString(),
            timestamp: now.getTime(),
            timeSpent: timeSpent || 0
        };

        this.entries.unshift(entry); // Add to beginning
        this.entries = this.entries.slice(0, 100); // Keep only top 100 entries
        this.saveEntries();
        return entry;
    }

    // Get filtered entries based on time period
    getFilteredEntries(filter = 'all') {
        const now = new Date();
        const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
        const oneMonthAgo = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());

        return this.entries.filter(entry => {
            const entryDate = new Date(entry.timestamp);
            switch (filter) {
                case 'week':
                    return entryDate >= oneWeekAgo;
                case 'month':
                    return entryDate >= oneMonthAgo;
                default:
                    return true; // 'all' filter
            }
        });
    }


    // Render the leaderboard
    render(containerId = 'leaderboard-list', filter = 'all') {
        const container = document.getElementById(containerId);
        if (!container) return;

        this.currentFilter = filter;
        const filteredEntries = this.getFilteredEntries(filter);

        if (filteredEntries.length === 0) {
            container.innerHTML = `
                <div class="leaderboard-empty">
                    <i class="fas fa-trophy empty-icon"></i>
                    <p>No scores yet. Be the first to take the quiz!</p>
                </div>
            `;
            return;
        }


        container.innerHTML = filteredEntries.map((entry, index) => {
            const date = new Date(entry.timestamp).toLocaleDateString();
            const time = new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
            const rankClass = index < 3 ? `leaderboard-rank-${index + 1} top-3` : '';
            
            // Format time spent (in seconds)
            const minutes = Math.floor(entry.timeSpent / 60);
            const seconds = entry.timeSpent % 60;
            const timeSpent = `${minutes}:${seconds.toString().padStart(2, '0')}`;

            return `
                <div class="leaderboard-item">
                    <div class="leaderboard-rank ${rankClass}">
                        #${index + 1}
                    </div>
                    <div class="leaderboard-details">
                        <div class="leaderboard-name">${entry.name}</div>
                        <div class="leaderboard-meta">
                            <span>${date} • ${time}</span>
                            <span>${timeSpent} min</span>
                        </div>
                    </div>
                    <div class="leaderboard-score">
                        ${entry.score}/${entry.totalQuestions} (${entry.percentage}%)
                    </div>
                </div>
            `;
        }).join('');
    }


    // Initialize event listeners for the leaderboard
    initEventListeners() {
        // Filter buttons
        document.querySelectorAll('.btn-filter').forEach(button => {
            button.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                document.querySelectorAll('.btn-filter').forEach(btn => {
                    btn.classList.toggle('active', btn === e.target);
                });
                this.render('leaderboard-list', filter);
            });
        });
    }
}

// Initialize leaderboard when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const leaderboard = new Leaderboard();
    window.leaderboard = leaderboard; // Make it globally available
    
    // Render initial leaderboard
    leaderboard.render('leaderboard-list', 'all');
    leaderboard.initEventListeners();
    
    // Show leaderboard when clicking leaderboard links
    const showLeaderboard = (e) => {
        e.preventDefault();
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
        document.getElementById('leaderboard-screen').classList.remove('hidden');
        leaderboard.render('leaderboard-list', leaderboard.currentFilter);
    };
    
    // Add event listeners to all leaderboard links
    document.querySelectorAll('[id^="view-leaderboard"]').forEach(link => {
        link.addEventListener('click', showLeaderboard);
    });
});
