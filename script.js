function showCourseDetails(courseId) {
    // Esconde todas as descrições primeiro
    const descriptions = document.querySelectorAll('.course-description');
    descriptions.forEach(desc => {
        desc.style.display = 'none';
    });
    
    // Exibe a descrição do curso clicado
    const courseDescription = document.getElementById(courseId + '-description');
    if (courseDescription) {
        courseDescription.style.display = 'block';
    }
}
