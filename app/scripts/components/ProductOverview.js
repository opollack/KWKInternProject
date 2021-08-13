/**
 * This file renders the product overview
 *
 */
import React from 'react';
import ProductReviews from './ProductReviews';

class ProductOverview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            quantity: 1,
            price: this.props.product.default_price
        }
        this.state = {
            quantity: 2,
            price: this.props.product.default_price
        }
        this.state = {
            quantity: 3,
            price: this.props.product.default_price
        }
    }

    /**
     * Triggers anytime a new size is selected
     * @param e
     */
    onSelectChange = (e) => {
        const selectedSize = this.props.product.sizes.find(size => {
            return size.label === e.target.value;
        })

        this.setState({
            price: selectedSize.price
        });

        document.getElementById("prod-price").innerHTML = selectedSize.price;
    }

    /**
     * On quantity add
     */
    addQuantity = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    /**
     * On quantity subtract
     */
    subtractQuantity = () => {
        const { quantity } = this.state;

        this.setState({
            quantity: quantity === 1 ? 1 : quantity - 1
        })
    }

    render() {
        const { display_name, display_description, reviews, short_description, sizes, is_replenishable, default_price } = this.props.product;

        return (
            <div className="elc-product-overview">
                <h4>{display_name}</h4>
                <h4>{display_description}</h4>
                <div className="product-review">
                        <ProductReviews reviews={reviews}/>
                </div>
                <div className="product-short-description">{short_description}</div>
                <div className="product-size">
                    <select name="cars" id="cars" onChange={this.onSelectChange}>
                        {sizes.map(size => {
                            return <option key={size.label} value={size.label}>{size.label}</option>
                        })}
                    </select>
                </div>
                <div id = "prod-price" className="product-price">{default_price}</div>
                {is_replenishable && <div className="product-auto-replenish">Auto Replenish 
                <button class="replenish-button">i</button>
                </div>}
                <div className="replenish-description">E-Listers earn 15 points for each replenishment order!</div>
                <div className="product-qty">
                    QTY
                    <div className="quantity buttons_added">
                    <input type="button" value="-" className="minus" onClick={this.subtractQuantity}/>
                    <input type="number" step="1"
                            value={this.state.quantity}
                            title="Qty"
                            className="input-text qty text" />
                    <input type="button" value="+" className="plus" onClick={this.addQuantity}/>
                    </div>
                    <button className = "add-to-bag">Add To Bag</button>
                </div>
                <div className="product-after-pay">afterpay</div>
                <div className="product-promo-message">Free Standard Shipping & Returns</div>
            </div>
        );
    }
}

// Export out the React Component
export default ProductOverview;