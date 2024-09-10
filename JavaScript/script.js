document.addEventListener('DOMContentLoaded', function () {
    const blogs = document.querySelectorAll('.blog');

    blogs.forEach(blog => {
        blog.addEventListener('click', function () {
            // Get the data-theme attribute to know which theme was clicked
            const theme = blog.getAttribute('data-theme');
            
            // Navigate to the corresponding quiz page (e.g., quiz.html?theme=mathe)
            window.location.href = `quiz.html?theme=${theme}`;
        });
    });
});
