import React from 'react';
import PostCard from './PostCard';
import SocialMediaIcons from './SocialMediaIcons';
import posts from '../data/posts';
import aboutImg from '../assets/images/about.jpg';
import categories from '../data/categories';
import tags from '../data/tags';

const Section = () => (

    <section className="w-full my-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-5 px-3">
            <div className="col-span-1 md:col-span-2">
                <div className="section-title-box mb-6">
                    <h2 className="text-3xl font-bold">Selected Posts</h2>
                </div>
                <div className="latest-posts grid grid-cols-1 lg:grid-cols-2 gap-5">
                    {posts.map((post, index) => (
                        <PostCard key={index} img={post.img} title={post.title} bgColor="bg-gray-100" />
                    ))}
                </div>
            </div>
            <aside className="col-span-1 md:col-span-2 lg:col-span-1 bg-gray-100 p-5 rounded-md">
                <div className="about-info-box bg-white p-3 rounded">
                    <h2 className="text-xl font-bold mb-2">About Me</h2>
                    <img
                        className="w-28 h-28 rounded-md mb-2 object-cover"
                        src={aboutImg}
                        alt="About Me"
                    />
                    <p className="text-sm mb-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at quisquam ratione nesciunt adipisci ipsum architecto expedita consequatur, eveniet aliquid iusto quasi, atque facilis similique harum, voluptatem ab mollitia recusandae cum corporis voluptatibus.
                    </p>
                    <SocialMediaIcons />
                </div>
                <div className="selected-categories-list mt-8">
                    <h2 className="text-xl font-bold mb-2">Categories</h2>
                    <ul className="category-list">
                        {categories.map((category, index) => (
                            <li key={index} className="mb-2">
                                <a className="bg-green-600 py-2 px-4 block text-white rounded-md" href="#">
                                    {category}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="tags-list mt-8">
                    <h2 className="text-xl font-bold mb-2">Tags</h2>
                    <ul className="tag-list flex flex-wrap gap-3">
                        {tags.map((tag, index) => (
                            <li key={index} className="tag-item inline-block">
                                <a className="bg-green-600 py-2 px-4 inline-block text-white rounded-md" href="#">
                                    {tag}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    </section>
);

export default Section;
