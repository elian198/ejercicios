import React from 'react'
import { ProductsSection, SpinnerSection } from './ProductsStyles'
import Product from './Product/Product'
import { useSelector } from 'react-redux'
import Roller from '../Spinner/Roller'

const Products = () => {

    const { products, isLoading } = useSelector(state => state.products);

    return (

        <>

            <ProductsSection id="productos">

                {isLoading ?

                    <SpinnerSection>
                        <Roller />
                    </SpinnerSection>

                    :

                    products.map((data) => (
                        <Product key={data.id} product={data} />
                    ))

                }


            </ProductsSection>

        </>

    )
}

export default Products