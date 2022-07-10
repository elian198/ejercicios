import React from 'react'
import { ProductButtonContainer, ProductButton, ProductContainer, ProductDataContainer, ProductDescription, ProductDescriptionContainer, ProductImage, ProductName, ProductNameContainer } from './ProductStyles'

const Product = ({ product }) => {

    const initial = {
        y: -40,
        opacity: 0,
    };
    const animate = {
        y: 0,
        opacity: 1,
    };

    return (

        <ProductContainer
            initial={initial}
            animate={animate}
            transition={{ delay: 1 }}
        >

            <ProductImage src={product.imageUrl} />

            <ProductDataContainer>

                <ProductNameContainer>
                    <ProductName> {product.name} </ProductName>
                </ProductNameContainer>


                <ProductDescriptionContainer>
                    <ProductDescription>{product.description}</ProductDescription>
                </ProductDescriptionContainer>

                <ProductButtonContainer to={{ pathname: product.productUrl }} target="_blank">
                    <ProductButton>COMPRAR</ProductButton>
                </ProductButtonContainer>

            </ProductDataContainer>


        </ProductContainer>

    )
}

export default Product