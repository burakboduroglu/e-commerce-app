function Detail({product}) {
	return (
		<div className="main">
			<div className="product-container">
				<a href="#" className="back-button">
					<img src="./images/arrow-left.svg" alt="" />
				</a>
				<div className="product-info">
					<div className="gallery-container">
						<img src="./images/ayakkabi-1.jpg" alt="" className="product-image" />
						<div className="product-slide-container">
							<img src="./images/ayakkabi-1.jpg" alt="" className="sub-image sub-image-selected" />
							<img src="./images/ayakkabi-2.jpg" alt="" className="sub-image" />
							<img src="./images/ayakkabi-3.jpg" alt="" className="sub-image" />
							<img src="./images/ayakkabi-4.jpg" alt="" className="sub-image" />
						</div>
					</div>
					<div className="product-right-content">
						<div>
							<h1 className="product-name">Nike s300A423</h1>
							<p className="product-detail">A sportive sneaker for runners</p>
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
							<button type="button" className="add-to-cart">
								<img src="./images/cart.svg" className="cart-svg" alt="" />
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
		</div>
	);
}

export default Detail;
