import post_img_1 from '../assets/images/slider-bg-1.jpg';
import post_img_2 from '../assets/images/slider-bg-2.jpg';
import post_img_3 from '../assets/images/slider-bg-3.jpg';

function PostCard() {
    return (
        <section className="w-full m-auto my-16">
            <div className="container mx-auto px-3">
                <div className="section-title-box mx-auto mb-6">
                    <div className="section-tile">
                        <h2 className="text-3xl font-bold text-center">Latest Posts</h2>
                    </div>
                    {/* <div className="section-subtitle">
                        <p className="text-md">Section subtitle</p>
                    </div> */}
                </div>

                <div className="latest-post-container">
                    <div className="latest-posts grid grid-cols-3 gap-5">
                        <div className="post-card group bg-gray-100 rounded-md shadow-sm p-3">
                            <div className="post-image-box">
                                <div className="post-img relative h-52 overflow-hidden rounded mb-3">
                                    <img className="left-1/2 top-1/2 transform transition-transform duration-300 ease-in-out group-hover:scale-110" src={post_img_1} alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="post-title">
                                        <h3 className="text-lg font-bold">How Machine Learning is Revolutionizing Industries</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-card group bg-gray-100 rounded-md shadow-sm p-3">
                            <div className="post-image-box">
                                <div className="post-img relative h-52 overflow-hidden rounded mb-3">
                                    <img className="left-1/2 top-1/2 transform transition-transform duration-300 ease-in-out group-hover:scale-110" src={post_img_2} alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="post-title">
                                        <h3 className="text-lg font-bold">10 Essential Tips for Securing Your Online Presence</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-card group bg-gray-100 rounded-md shadow-sm p-3">
                            <div className="post-image-box">
                                <div className="post-img relative h-52 overflow-hidden rounded mb-3">
                                    <img className="left-1/2 top-1/2 transform transition-transform duration-300 ease-in-out group-hover:scale-110" src={post_img_3} alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="post-title">
                                        <h3 className="text-lg font-bold">How 5G Technology Will Transform the Internet</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-card group bg-gray-100 rounded-md shadow-sm p-3">
                            <div className="post-image-box">
                                <div className="post-img relative h-52 overflow-hidden rounded mb-3">
                                    <img className="left-1/2 top-1/2 transform transition-transform duration-300 ease-in-out group-hover:scale-110" src={post_img_2} alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="post-title">
                                        <h3 className="text-lg font-bold">The Rise of Quantum Computing</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-card group bg-gray-100 rounded-md shadow-sm p-3">
                            <div className="post-image-box">
                                <div className="post-img relative h-52 overflow-hidden rounded mb-3">
                                    <img className="left-1/2 top-1/2 transform transition-transform duration-300 ease-in-out group-hover:scale-110" src={post_img_3} alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="post-title">
                                        <h3 className="text-lg font-bold">The Ethical Implications of AI in Healthcare</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="post-card group bg-gray-100 rounded-md shadow-sm p-3">
                            <div className="post-image-box">
                                <div className="post-img relative h-52 overflow-hidden rounded mb-3">
                                    <img className="left-1/2 top-1/2 transform transition-transform duration-300 ease-in-out group-hover:scale-110" src={post_img_1} alt="" />
                                </div>
                                <div className="post-content">
                                    <div className="post-title">
                                        <h3 className="text-lg font-bold">Cloud Computing 101: Everything You Need to Know</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PostCard