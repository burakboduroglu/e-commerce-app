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
	const { addToCart } = useContext(CartContext);

	// Review and rating state
	const [randomReviewNumber, setRandomReviewNumber] = useState(0);
	const [reviews, setReviews] = useState([]);
	const [avgRating, setAvgRating] = useState(0);

	// Number of products state
	const [numberOfProducts, setNumberOfProducts] = useState(1);

	useEffect(() => {
		// Fetch product data
		fetch(`https://dummyjson.com/products/${productId}`)
			.then((res) => res.json())
			.then((data) => setProduct(data));

		// Initialize reviews and ratings data
		const reviewArray = [
			{
				point: 1,
				comment: "I did not like it at all",
			},
			{
				point: 2,
				comment: "It came late and the box is smashed",
			},
			{
				point: 3,
				comment: "It is average",
			},
			{
				point: 4,
				comment: "Actually liked it :)",
			},
			{
				point: 5,
				comment: "Best thing I have ever had...",
			},
		];

		const newReviews = [];
		let totalRating = 0;
		const randomReviewNumber = Math.floor(Math.random() * 10) + 1;

		for (let i = 0; i < randomReviewNumber; i++) {
			const randomIndex = Math.floor(Math.random() * 5);
			totalRating += reviewArray[randomIndex].point;
			const review = {
				userName: randomNameLetters(),
				rating: reviewArray[randomIndex].point,
				comment: reviewArray[randomIndex].comment,
			};
			newReviews.push(review);
		}

		setRandomReviewNumber(randomReviewNumber);
		setReviews(newReviews);
		setAvgRating((totalRating / randomReviewNumber).toFixed(1));
	}, [productId]);

	const handleSubImageClick = (index) => {
		setSelectedImageIndex(index);
	};

	return !product ? (
		<div className="w-screen h-screen">
			<div className="w-20 h-20 rounded-full border-b-2 border-t-2 animate-spin"></div>
		</div>
	) : (
		<div className="main">
			<div className="mt-3">
				<NavbarWithMegaMenu />
			</div>
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
										<span className="avg-rating">{avgRating}</span>
										{renderRatingStars(avgRating)}
									</div>
									<p className="rating-text">
										<span className="rating-number">{randomReviewNumber}</span> ratings
									</p>
								</a>
							</div>
						</div>
						<div className="add-to-cart-form">
							<button
								onClick={() => {
									addToCart(product);
								}}
								type="button"
								className="add-to-cart"
							>
								<img src={CartLogo} className="cart-svg" alt="" />
								<p>Add To Cart</p>
							</button>
						</div>
					</div>
				</div>
				<div className="product-description">
					<h2>Product Information</h2>
					<ul className="properties">
						<li>{product.description}</li>
						<li>The product is refurbished, fully functional, and in acceptable condition. Backed by the 90-day Shire Renewed Guarantee.</li>
						<li>This pre-owned product has been professionally inspected, tested and cleaned by Shire qualified vendors.</li>
					</ul>
				</div>
				<div id="reviews">
					<h2>Product Reviews</h2>
					<p className="review-number-text">There are {randomReviewNumber} reviews for this product.</p>
					<ul className="comment-and-review">
						{reviews.map((review, index) => (
							<li key={index}>
								<p className="user-name-capitals">{review.userName}</p>
								<div>
									<div className="stars">{renderStars(review.rating)}</div>
									<p>{review.comment}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="container m-auto mt-3 tile col-span-3 md:col-span-5 lg:col-span-8">
				<Footer />
			</div>
		</div>
	);
}

function randomNameLetters() {
	let nameLetters = "";
	for (let i = 0; i < 2; i++) {
		let randomLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
		nameLetters += randomLetter.toUpperCase();
	}
	return nameLetters;
}

function renderStars(rating) {
	const filledStars = Math.floor(rating);
	const remainder = rating - filledStars;
	const stars = [];

	for (let i = 0; i < filledStars; i++) {
		stars.push(<div key={i} className="star filled"></div>);
	}

	if (remainder > 0) {
		stars.push(<div key="half" className="star half-filled" style={{ width: `${remainder * 100}%` }}></div>);
	}

	return stars;
}

function renderRatingStars(avgRating) {
	const stars = [];
	for (let i = 0; i < 5; i++) {
		stars.push(<div key={i} className={`star ${i < avgRating ? "filled" : ""}`}></div>);
	}
	return stars;
}

export default Detail;
