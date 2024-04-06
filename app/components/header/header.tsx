export default function Header() {
    return (
        <>
            <header id="header" className="header d-flex align-items-center fixed-top">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <a href="index.html" className="logo d-flex align-items-center">

                        <h1>ZenBlog</h1>
                    </a>

                    <nav id="navbar" className="navbar">
                        <ul>
                            <li><a href="index.html">Blog</a></li>
                            <li><a href="single-post.html">Single Post</a></li>
                            <li className="dropdown"><a href="category.html"><span>Categories</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                <ul>
                                    <li><a href="search-result.html">Mussorie Blog</a></li>
                                    <li><a href="#">Kashmir Blog</a></li>
                                    
                                    <li><a href="#">Vrindavan</a></li>
                                    <li><a href="#">Treking</a></li>
                                    
                                </ul>
                            </li>

                            <li><a href="about.html">About</a></li>
                            <li><a href="contact.html">Contact</a></li>
                        </ul>
                    </nav>

                    <div className="position-relative">
                        <a href="#" className="mx-2"><span className="bi-facebook"></span></a>
                        <a href="#" className="mx-2"><span className="bi-twitter"></span></a>
                        <a href="#" className="mx-2"><span className="bi-instagram"></span></a>

                        <a href="#" className="mx-2 js-search-open"><span className="bi-search"></span></a>
                        <i className="bi bi-list mobile-nav-toggle"></i>


                        <div className="search-form-wrap js-search-form-wrap">
                            <form action="search-result.html" className="search-form">
                                <span className="icon bi-search"></span>
                                <input type="text" placeholder="Search" className="form-control"/>
                                    <button type="button" className="btn js-search-close"><span className="bi-x"></span></button>
                            </form>
                        </div>

                    </div>

                </div>

            </header>
        </>
    )
}