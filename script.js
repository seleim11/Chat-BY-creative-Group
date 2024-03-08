document.addEventListener('DOMContentLoaded', () => {
    const postsDiv = document.getElementById('posts');
    const newPostForm = document.getElementById('new-post-form');
    const newPostTextarea = document.getElementById('new-post');
  
    // Load posts from local storage
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.forEach(post => {
      const postDiv = document.createElement('div');
      postDiv.textContent = post;
      postsDiv.appendChild(postDiv);
    });
  
    // Save post to local storage
    newPostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!newPostTextarea.value.trim()) return;
  
      const post = newPostTextarea.value.trim();
      savedPosts.push(post);
      localStorage.setItem('posts', JSON.stringify(savedPosts));
  
      const postDiv = document.createElement('div');
      postDiv.textContent = post;
      postsDiv.appendChild(postDiv);
  
      // Clear textarea
      newPostTextarea.value = '';
    });
  });