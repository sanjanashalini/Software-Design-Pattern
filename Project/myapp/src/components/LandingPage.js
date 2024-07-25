import React from 'react';


const LandingPage = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <h1>Toy Wonderland</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Welcome to Toy Wonderland</h2>
        <p>Your one-stop shop for the best toys around!</p>
        <button>Shop Now</button>
      </section>

      <section id="about" className="about">
        <h3>About Us</h3>
        <p>At Toy Wonderland, we offer a wide variety of toys for children of all ages. Our mission is to bring joy and creativity to every child.</p>
      </section>

      <section id="products" className="products">
        <h3>Our Products</h3>
        <div className="product-grid">
          <div className="product-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjKIKEIPfTgiQu6W2B1Pye5Xhf6cmuN1dpiA&s" alt="Product 1" />
            <h4>Toy Car</h4>
          </div>
          <div className="product-item">
            <img src="/path/to/product2.jpg" alt="Product 2" />
            <h4>Building Blocks</h4>
          </div>
          <div className="product-item">
            <img src="/path/to/product3.jpg" alt="Product 3" />
            <h4>Stuffed Animal</h4>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h3>Contact Us</h3>
        <p>Email: info@toywonderland.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>

      
    </div>
  );
};

export default LandingPage;
