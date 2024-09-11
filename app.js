// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

// Sign Up
document.getElementById('signup-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            return db.collection('users').doc(userCredential.user.uid).set({
                name: name,
                email: email,
                role: 'user'
            });
        })
        .then(() => {
            window.location.href = 'feed.html';
        })
        .catch((error) => {
            document.getElementById('signup-status').textContent = `Error: ${error.message}`;
        });
});

// Login
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            window.location.href = 'feed.html';
        })
        .catch((error) => {
            document.getElementById('login-status').textContent = `Error: ${error.message}`;
        });
});

// Profile Page
document.addEventListener('DOMContentLoaded', () => {
    auth.onAuthStateChanged((user) => {
        if (user) {
            loadUserProfile(user.uid);
        } else {
            window.location.href = 'login.html';
        }
    });
});

function loadUserProfile(uid) {
    db.collection('users').doc(uid).get().then((doc) => {
        if (doc.exists) {
            const user = doc.data();
            document.getElementById('profile-name').textContent = user.name;
            document.getElementById('profile-email').textContent = user.email;
        }
    }).catch((error) => {
        console.error('Error loading user profile:', error);
    });

    db.collection('posts').where('uid', '==', uid).orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
        const postsContainer = document.getElementById('posts-container');
        postsContainer.innerHTML = '';

        snapshot.forEach((doc) => {
            const post = doc.data();
            const postElement = document.createElement('div');
            postElement.classList.add('border', 'p-3', 'mb-3', 'rounded');
            postElement.innerHTML = `<p>${post.content}</p>`;
            postsContainer.appendChild(postElement);
        });
    });
}

// Edit Profile
document.getElementById('edit-profile-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const uid = auth.currentUser.uid;
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;

    db.collection('users').doc(uid).update({
        name: name,
        email: email
    }).then(() => {
        document.getElementById('edit-profile-status').textContent = 'Profile updated successfully';
    }).catch((error) => {
        document.getElementById('edit-profile-status').textContent = `Error: ${error.message}`;
    });
});

// Settings Page
document.getElementById('settings-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const newPassword = document.getElementById('new-password').value;

    if (newPassword) {
        auth.currentUser.updatePassword(newPassword)
            .then(() => {
                document.getElementById('settings-status').textContent = 'Password updated successfully';
            })
            .catch((error) => {
                document.getElementById('settings-status').textContent = `Error: ${error.message}`;
            });
    } else {
        document.getElementById('settings-status').textContent = 'Please enter a new password';
    }
});
