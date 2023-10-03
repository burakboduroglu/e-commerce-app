import React, { useState, useEffect, useContext } from "react";
import "../css/detail.css";
import { useParams } from "react-router-dom";
import { NavbarWithMegaMenu } from "../components/Header";
import Footer from "../components/Footer";
import ArrowLogo from "../img/arrow-left.svg";
import CartLogo from "../img/cart.svg";
import { CartContext } from "../contexts/CartContext";

function Detail() {
	let { productId } = useParams();
	const [product, setProduct] = useState(null);
	const [selectedImageIndex, setSelectedImageIndex] = useState(0);
	const {addToCart}=useContext(CartContext);

	useEffect(() => {
		fetch(`https://dummyjson.com/products/${productId}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));
	}, []);

	const handleSubImageClick = (index) => {
		setSelectedImageIndex(index);
	};

	return !product ? (
		<div className="w-screen h-screen">
			<div className="w-20 h-20 rounded-full border-b-2 border-t-2 animate-spin"></div>
		</div>
	) : (
		<div className="main">
			<NavbarWithMegaMenu />
			<div className="product-container">
				<a href="/" className="back-button">
					<img src={ArrowLogo} alt="" />
				</a>
				<div className="product-info">
					<div className="gallery-container">
						<div className="product-image-container">
							<img src={product.images[selectedImageIndex]} alt="" className="product-image" />
						</div>
						<div className="product-slide-container">
							{product.images.map((image, index) => (
								<img key={index} src={image} alt="" className={`sub-image ${index === selectedImageIndex ? "sub-image-selected" : ""}`} onClick={() => handleSubImageClick(index)} />
							))}
						</div>
					</div>
					<div className="product-right-content">
						<div>
							<h1 className="product-name">{product.title}</h1>
							<p className="product-detail">{product.description}</p>
						</div>
						<div className="price-and-rating">
							<span className="price">{product.price} $</span>
							<div>
								<a href="#reviews">
									<div className="stars">
										<span className="avg-rating">4.2</span>
										<span className="star"></span>
										<span className="star"></span>
										<span className="star"></span>
										<span className="star"></span>
										<span className="star"></span>
									</div>
									<p className="rating-text">
										<span className="rating-number"></span> ratings
									</p>
								</a>
							</div>
						</div>
						<div className="add-to-cart-form">
							<div className="number-of-product">
								<button type="button" className="minus">
									-
								</button>
								<p className="number">1</p>
								<button type="button" className="plus">
									+
								</button>
							</div>
							<button 
							onClick={()=>{
								addToCart(product);
							}}
							type="button" className="add-to-cart">
								<img src={CartLogo} className="cart-svg" alt="" />
								<p>Add To Cart</p>
							</button>
						</div>
					</div>
				</div>
				<div className="product-description">
					<h2>Product Information</h2>
					<ul className="properties">
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quisquam molestiae molestias ducimus reprehenderit sunt minus doloremque suscipit consequuntur quae. Voluptates exercitationem nobis iste minus? Modi, culpa, quisquam veniam doloremque ratione pariatur explicabo beatae repellendus sed similique iste mollitia placeat vel quos officiis quis dolor totam. Quia dolor beatae fuga, modi minima vitae? Fuga inventore nam sunt molestiae sit aspernatur rerum facere alias suscipit. Officia sunt veritatis tempora ipsum ut saepe quod sint ipsa beatae amet eligendi cumque, vel aliquam quisquam velit exercitationem id voluptas distinctio eum. Harum error veniam architecto et quidem saepe distinctio similique, explicabo id aperiam vel?</li>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quisquam molestiae molestias ducimus reprehenderit sunt minus doloremque suscipit consequuntur quae. Voluptates exercitationem nobis iste minus? Modi, culpa, quisquam veniam doloremque ratione pariatur explicabo beatae repellendus sed similique iste mollitia placeat vel quos officiis quis dolor totam. Quia dolor beatae fuga, modi minima vitae? Fuga inventore nam sunt molestiae sit aspernatur rerum facere alias suscipit. Officia sunt veritatis tempora ipsum ut saepe quod sint ipsa beatae amet eligendi cumque, vel aliquam quisquam velit exercitationem id voluptas distinctio eum. Harum error veniam architecto et quidem saepe distinctio similique, explicabo id aperiam vel?</li>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quisquam molestiae molestias ducimus reprehenderit sunt minus doloremque suscipit consequuntur quae. Voluptates exercitationem nobis iste minus? Modi, culpa, quisquam veniam doloremque ratione pariatur explicabo beatae repellendus sed similique iste mollitia placeat vel quos officiis quis dolor totam. Quia dolor beatae fuga, modi minima vitae? Fuga inventore nam sunt molestiae sit aspernatur rerum facere alias suscipit. Officia sunt veritatis tempora ipsum ut saepe quod sint ipsa beatae amet eligendi cumque, vel aliquam quisquam velit exercitationem id voluptas distinctio eum. Harum error veniam architecto et quidem saepe distinctio similique, explicabo id aperiam vel?</li>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium quisquam molestiae molestias ducimus reprehenderit sunt minus doloremque suscipit consequuntur quae. Voluptates exercitationem nobis iste minus? Modi, culpa, quisquam veniam doloremque ratione pariatur explicabo beatae repellendus sed similique iste mollitia placeat vel quos officiis quis dolor totam. Quia dolor beatae fuga, modi minima vitae? Fuga inventore nam sunt molestiae sit aspernatur rerum facere alias suscipit. Officia sunt veritatis tempora ipsum ut saepe quod sint ipsa beatae amet eligendi cumque, vel aliquam quisquam velit exercitationem id voluptas distinctio eum. Harum error veniam architecto et quidem saepe distinctio similique, explicabo id aperiam vel?</li>
					</ul>
				</div>
				<div id="reviews">
					<h2>Product Reviews</h2>
					<p className="review-number-text"></p>
					<ul className="comment-and-review"></ul>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Detail;
