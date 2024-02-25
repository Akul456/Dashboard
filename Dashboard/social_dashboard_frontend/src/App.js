import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/posts/')
            .then(res => setPosts(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Social Dashboard</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.title}>
                        <h3>{post.title}</h3>
                        <p>{post.description}</p>
                        <p>{post.scheduled_at}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
