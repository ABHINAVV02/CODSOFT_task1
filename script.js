function toggleMenu() {
    document.querySelector('.navbar-menu').classList.toggle('active');
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        this.submit();
    } else {
        alert('Please fill in all fields.');
    }
});

              