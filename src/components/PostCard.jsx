import React from 'react';

const PostCard = ({ img, title, bgColor }) => (
    <div className={`post-card group ${bgColor} rounded-md shadow-sm p-3`}>
        <div className="post-image-box">
            <div className="post-img relative h-64 overflow-hidden rounded mb-3">
                <img
                    className="object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                    src={img}
                    alt={title}
                />
            </div>
        </div>
        <div className="post-content">
            <h3 className="text-lg font-bold">{title}</h3>
        </div>
    </div>
);

export default PostCard;
