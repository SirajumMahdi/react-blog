import post_img_1 from '../assets/images/slider-bg-1.jpg';
import post_img_2 from '../assets/images/slider-bg-2.jpg';
import post_img_3 from '../assets/images/slider-bg-3.jpg';
import about_img from '../assets/images/about.jpg';

function Section() {
    return (
        <section className="w-full m-auto my-16">
            <div className="container grid grid-cols-3 gap-5 mx-auto px-3">
                <div className="container post-side col-span-2 mx-auto">
                    <div className="section-title-box mx-auto mb-6">
                        <div className="section-tile">
                            <h2 className="text-3xl font-bold">Selected Posts</h2>
                        </div>
                        {/* <div className="section-subtitle">
                        <p className="text-md">Section subtitle</p>
                    </div> */}
                    </div>

                    <div className="latest-post-container">
                        <div className="latest-posts grid grid-cols-2 gap-5">
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
                <div className="container sidebar col-span-1 mx-auto">
                    <div className="sidebar-wrapper bg-gray-100 p-5 rounded-md">
                        <div className="about-info-box bg-white p-3 rounded">
                            <div className="section-tile mb-2">
                                <h2 className="text-xl font-bold">About Me</h2>
                            </div>
                            <div className="about-image w-28 h-28 overflow-hidden rounded-md mb-2">
                                <img src={about_img} alt="" />
                            </div>
                            <div className="about-content">
                                <p className="text-sm mb-3">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae at quisquam ratione nesciunt adipisci ipsum architecto expedita consequatur, eveniet aliquid iusto quasi, atque facilis similique harum, voluptatem ab mollitia recusandae cum corporis voluptatibus.
                                </p>
                            </div>
                            <div className="social-media">
                                <div className="w-7 inline-block mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="#0964FE" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z" />
                                </svg>
                                </div>
                                <div className="w-7 inline-block mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="#000000" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                                </svg>

                                </div>
                                <div className="w-7 inline-block mr-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="#2B3137" d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
                                </svg>

                                </div>
                                <div className="w-7 inline-block"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path fill="#222" d="M120.1 208.3c-3.9-2.9-7.8-4.4-11.7-4.4H91v104.5h17.5c3.9 0 7.8-1.5 11.7-4.4 3.9-2.9 5.8-7.3 5.8-13.1v-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32H43.9C19.7 32 .1 51.6 0 75.8v360.4C.1 460.4 19.7 480 43.9 480h360.2c24.2 0 43.8-19.6 43.9-43.8V75.8c-.1-24.2-19.7-43.8-43.9-43.8zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3h-46.4V173h47.4c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7H201.6v38.4h32.6v29.6H201.6v38.4h53.3v29.6h-62.2c-11.2 .3-20.4-8.5-20.7-19.7V193.7c-.3-11.2 8.6-20.4 19.7-20.7h63.2l0 29.5zm103.6 115.3c-13.2 30.8-36.9 24.6-47.4 0l-38.5-144.8h32.6l29.7 113.7 29.6-113.7h32.6l-38.5 144.8z" />
                                </svg>

                                </div>
                            </div>
                        </div>
                        <div className="selected-categories-list mt-8">
                            <div className="section-tile mb-2">
                                <h2 className="text-xl font-bold">Categories</h2>
                            </div>
                            <div className="categories-list-wrapper">
                                <ul className="category-list">
                                    <li className="category-item mb-2"><a className="bg-green-600 py-2 px-4 block text-white rounded-md" href="#">Artificial Intelligence</a></li>
                                    <li className="category-item mb-2"><a className="bg-green-600 py-2 px-4 block text-white rounded-md" href="#">Cybersecurity</a></li>
                                    <li className="category-item mb-2"><a className="bg-green-600 py-2 px-4 block text-white rounded-md" href="#">Cloud Computing</a></li>
                                    <li className="category-item mb-2"><a className="bg-green-600 py-2 px-4 block text-white rounded-md" href="#">Programming & Development</a></li>
                                    <li className="category-item mb-2"><a className="bg-green-600 py-2 px-4 block text-white rounded-md" href="#">Blockchain Technology</a></li>
                                    <li className="category-item mb-2"><a className="bg-green-600 py-2 px-4 block text-white rounded-md" href="#">Internet of Things (IoT)</a></li>
                                    <li className="category-item mb-2"><a className="bg-green-600 py-2 px-4 block text-white rounded-md" href="#">Data Science & Analytics</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="tags-list mt-8">
                            <div className="section-tile mb-2">
                                <h2 className="text-xl font-bold">Tags</h2>
                            </div>
                            <div className="tags-list-wrapper">
                                <ul className="tag-list flex flex-wrap gap-3">
                                    <li className="tag-item inline-block"><a className="bg-green-600 py-2 px-4 inline-block text-white rounded-md" href="#">IoT Devices</a></li>
                                    <li className="tag-item inline-block"><a className="bg-green-600 py-2 px-4 inline-block text-white rounded-md" href="#">Big Data</a></li>
                                    <li className="tag-item inline-block"><a className="bg-green-600 py-2 px-4 inline-block text-white rounded-md" href="#">Blockchain</a></li>
                                    <li className="tag-item inline-block"><a className="bg-green-600 py-2 px-4 inline-block text-white rounded-md" href="#">AR & VR</a></li>
                                    <li className="tag-item inline-block"><a className="bg-green-600 py-2 px-4 inline-block text-white rounded-md" href="#">5G Technology</a></li>
                                    <li className="tag-item inline-block"><a className="bg-green-600 py-2 px-4 inline-block text-white rounded-md" href="#">Data Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section