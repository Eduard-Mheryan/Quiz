// Suchfeld und Blog-Elemente holen
const searchInput = document.querySelector('.search-input');
const blogs = document.querySelectorAll('.blog');
const Headline = document.getElementById('Headline-container');

// Event-Listener für das Suchfeld
searchInput.addEventListener('input', function() {
    const searchValue = searchInput.value.toLowerCase().trim(); // Eingabe in Kleinbuchstaben und ohne überflüssige Leerzeichen

    // Durch alle Blogs iterieren und auf Übereinstimmung prüfen
    blogs.forEach(function(blog) {
        const theme = blog.dataset.theme ? blog.dataset.theme.toLowerCase() : ''; // Theme in Kleinbuchstaben
        const blogText = blog.textContent.toLowerCase(); // Textinhalt des Blog-Elements in Kleinbuchstaben

        // Wenn der Suchbegriff im Thema oder Text enthalten ist, zeige das Element an, sonst blende es aus
        if (theme.includes(searchValue) || blogText.includes(searchValue)) {
            blog.style.display = 'block'; // Thema anzeigen
        } else {
            blog.style.display = 'none'; // Thema ausblenden
        }
    });

    // Nach der Filterung sicherstellen, dass die verbleibenden Blog-Elemente weiterhin nebeneinander angezeigt werden
    const visibleBlogs = [...blogs].filter(blog => blog.style.display === 'block');
    if (visibleBlogs.length === 0) {
        // Optional: Falls keine Übereinstimmung gefunden wurde
        Headline.innerText = "Kein Thema gefunden."
    }
});
