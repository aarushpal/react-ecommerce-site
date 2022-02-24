import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import PropTypes from "prop-types";
import { ProductConsumer } from "../context";

export default class ProductList extends Component {
  /* <Product></Product> */
  render() {
    return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />

            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key="product.id" product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

//basically checking the data that we give.
Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
  }).isRequired,
};
