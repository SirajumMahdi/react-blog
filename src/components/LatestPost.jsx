import React from 'react';
import PostCard from './PostCard';
import posts from '../data/posts';

const LatestPost = () => (
    <section className="w-full mt-12 py-16 bg-gray-100">
        <div className="container mx-auto px-3">
            <div className="section-title-box mb-6 text-center">
                <h2 className="text-3xl font-bold">Featured Posts</h2>
            </div>
            <div className="featured-posts grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {posts.slice(0, 6).map((post, index) => (
                    <PostCard key={index} img={post.img} title={post.title} bgColor="bg-white" />
                ))}
            </div>
        </div>
    </section>
);

export default LatestPost;
