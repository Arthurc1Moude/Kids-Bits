// Handling Login Logic
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username === '' || password === '') {
        showNotification('Please fill in all fields!', 'error');
    } else {
        // Simulating successful login
        showNotification('Login successful!', 'success');
        setTimeout(function() {window.location.href = 'index.html'}, 3000);
    }
}

// Handling Notification Box
function showNotification(message, type) {
    let notification = document.getElementById('notification');
    let notificationText = document.getElementById('notification-text');
    
    notification.style.display = 'flex';
    notificationText.textContent = message;
    
    if (type === 'error') {
        document.querySelector('.btn-green').style.display = 'block';
        document.querySelector('.btn-blue').style.display = 'block';
    } else {
        document.querySelector('.btn-green').style.display = 'block';
        document.querySelector('.btn-blue').style.display = 'none';
    }
}

// Close Notification
function closeNotification() {
    document.getElementById('notification').style.display = 'none';
}

// Reload Page (Retry Button)
function reloadPage() {
    window.location.reload();
}