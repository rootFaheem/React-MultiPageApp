import React, { Component } from 'react';
// import axios from 'axios';
import './Blog.css';
import Posts from '../Posts/Posts';

class Blog extends Component {
    render () {
                return (
            <div>
                <header className="Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Posts />
            </div>
        );
    }
}

export default Blog;