import React, { useState, useRef, useEffect } from 'react';

function Home() {
  const [expandedImage, setExpandedImage] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const expandedImageRef = useRef(null);

  const handleExpandClick = (imageUrl) => {
    setExpandedImage((prevExpandedImage) => (prevExpandedImage === imageUrl ? null : imageUrl));
  };

  const handleClickOutside = (event) => {
    if (expandedImageRef.current && !expandedImageRef.current.contains(event.target)) {
      setExpandedImage(null);
    }
  };

  const handleAddToCart = (imageUrl) => {
    setCartItems((prevCartItems) => [...prevCartItems, imageUrl]);
  };

  const handleRemoveFromCart = (index) => {
    setCartItems((prevCartItems) => prevCartItems.filter((_, i) => i !== index));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const products = [
    {
      imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/06/gojo-from-jujutsu-kaisen-season-2.jpg",
      name: "Gojo",
      price: "10000 Curse Technique"
    },
    {
      imageUrl: "https://static1.srcdn.com/wordpress/wp-content/uploads/2024/04/itadori-yuji-as-seen-during-the-shijuku-showdown-with-red-hands-surrounded-by-black-sparks-of-black-flash-in-jujutsu-kaisen.jpg",
      name: "Yuji",
      price: "2000 Curse Technique"
    },
    {
      imageUrl: "https://cdn.oneesports.gg/cdn-data/2021/06/JujutsuKaisenPhamtomParade_KentoNanami-min-1.jpeg",
      name: "Nanami",
      price: "3000 Curse Technique"
    },
    {
      imageUrl: "https://staticg.sportskeeda.com/editor/2023/12/ea6c8-17035939751121-1920.jpg",
      name: "Megumi",
      price: "4000 Curse Technique"
    },
    {
      imageUrl: "https://pop.inquirer.net/files/2022/06/jujutsu-kaisen-3.jpeg",
      name: "Sukuna",
      price: "5000 Curse Technique"
    },
    {
        imageUrl: "https://cdn.epicstream.com/images/ncavvykf/epicstream/3fb87cdbb4e53a07342a2383f82cd529bebff2e8-1200x675.jpg?rect=0,23,1200,630&w=1200&h=630&auto=format",
        name: "Geto",
        price: "6000 Curse Technique"
    }
  ];

  return (
    <div>
      <div className="Title">
        <h1><p>JuJutSu Kaisen Shop</p></h1>
      </div>

      <div className="bannerHolder">
        <img className="bannerImage" src="https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/jujutsu-kaisen-0-banner-poster.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5" alt="Featured" />
      </div>
      
      <div className="product-holder">
        {products.map((product, index) => (
          <div className="product-item" key={index}>
            <img src={product.imageUrl} alt={product.name} />
            <div className="product-details">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
              <button className="button" onClick={() => handleExpandClick(product.imageUrl)}>
                Expand
              </button>
            </div>
          </div>
        ))}
      </div>

      {expandedImage && (
        <div className="expanded-image" ref={expandedImageRef}>
          <img src={expandedImage} alt="Expanded" />
          <button className="add-to-cart-button" onClick={() => handleAddToCart(expandedImage)}>Add to Cart</button>
        </div>
      )}

      <div className="cart">
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item} alt="Cart Item" style={{ width: '300px' }} />
              <button className="button" onClick={() => handleRemoveFromCart(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Home;
