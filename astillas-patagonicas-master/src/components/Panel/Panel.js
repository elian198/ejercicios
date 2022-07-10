import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar/AdminNavbar'
import { ButtonContainer, DescriptionButton, TextArea, PanelBackground, Input, EditCard, EditPanelContainer, ProductPanelContainer, ProductCard, ProductButton, ProductId, ProductTitle, ProductSection, ProductButtonContainer, FileBaseContaine, SobreNosotros, Title, Info } from './PanelStyles'
import FileBase from 'react-file-base64'
import { AiFillDelete } from 'react-icons/ai'
import { RiEditBoxFill } from 'react-icons/ri'
import toast, { Toaster } from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, postProduct, updateProduct } from '../../store/slices/products/productsSlice'
import { updateAboutUsData } from '../../store/slices/aboutUs/aboutUsSlice'
import { SpinnerSection } from '../Products/ProductsStyles'
import Roller from '../Spinner/Roller'

const Panel = () => {

    const dispatch = useDispatch();
    const { products } = useSelector(state => state.products);
    const { aboutUs, isLoading } = useSelector(state => state.aboutUs);

    const [aboutUsData, setAboutUsData] = useState('');
    const [prevAboutUsData, setPrevAboutUsData] = useState('');

    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productUrl, setProductUrl] = useState('');
    const [productId, setProductId] = useState('');

    const [prevProductName, setPrevProductName] = useState('');
    const [prevProductDescription, setPrevProductDescription] = useState('');
    const [prevProductImage, setPrevProductImage] = useState('');
    const [prevProductUrl, setPrevProductUrl] = useState('');

    const [edit, setEdit] = useState(false);

    const isAboutInvalid = prevAboutUsData === aboutUsData;

    const handleSubmit = e => {
        e.preventDefault();
    };

    // About Us Section

    const handleAboutUsDataTextArea = () => {
        setAboutUsData(aboutUs);
        setPrevAboutUsData(aboutUs);
    };

    const handleAboutUsData = () => {
        if (prevAboutUsData === aboutUsData) {
            toast.error('No se realizaron los cambios.');
        } else {
            dispatch(updateAboutUsData(aboutUsData));
            toast.success('Descripción Modificada.');
            setAboutUsData('');
            setPrevAboutUsData('');
        }
    };
    
    const handleEditOrAdd = () => {

        if (prevProductName === productName && prevProductDescription === productDescription && prevProductImage === productImage && prevProductUrl === productUrl) {
            toast.error('No se realizaron los cambios.');
        } else if (productName === '' || productDescription === '' || productImage === '' || productUrl === '') {
            toast.error('Complete los campos.');
        } else {
            if (edit) {
                dispatch(updateProduct({ productName, productDescription, productImage, productUrl, productId: productId }));
                handleClean();
                toast.success('Producto Modificado.');
            } else {
                dispatch(postProduct({ productName, productDescription, productImage, productUrl }));
                handleClean();
                toast.success('Producto Agregado.');
            }
        }

    };

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    };

    // Product Section

    const handleEditClick = (data) => {
        setPrevProductName(data.name);
        setPrevProductDescription(data.description);
        setPrevProductImage(data.imageUrl);
        setPrevProductUrl(data.productUrl);
        setEdit(true);
        setProductName(data.name);
        setProductDescription(data.description);
        setProductImage(data.imageUrl);
        setProductUrl(data.productUrl);
        setProductId(data.id);
    };

    const handleClean = () => {
        setEdit(false);
        setProductName('');
        setProductDescription('');
        setProductImage('');
        setProductUrl('');
        setProductId('');
    };

    return (

        <PanelBackground>

            <AdminNavbar />

            <EditPanelContainer onSubmit={handleSubmit}>

                <Toaster
                    position="bottom-right"
                    reverseOrder={false}
                />

                <EditCard>

                    <SobreNosotros>

                        {aboutUsData === '' ?

                            <>
                                <Title>Sobre Nosotros</Title>
                                {isLoading ?
                                    <SpinnerSection>
                                        <Roller />
                                    </SpinnerSection>
                                    :
                                    <Info onClick={() => handleAboutUsDataTextArea()}> {aboutUs} </Info>}
                            </>

                            :

                            <TextArea
                                type="text"
                                value={aboutUsData}
                                onChange={(e) => setAboutUsData(e.target.value)}
                            />

                        }

                    </SobreNosotros>

                    <ButtonContainer>
                        <DescriptionButton
                            disabled={isAboutInvalid}
                            onClick={() => handleAboutUsData()}
                        >
                            Agregar Cambios
                        </DescriptionButton>
                    </ButtonContainer>

                </EditCard>

                <EditCard>

                    <Input
                        placeholder='Nombre del Producto' type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                    />

                    <TextArea
                        setenta placeholder='Descripción' type="text"
                        value={productDescription}
                        onChange={(e) => setProductDescription(e.target.value)}
                    />

                    <Input placeholder='Link del Producto' type="text"
                        value={productUrl}
                        onChange={(e) => setProductUrl(e.target.value)}
                    />

                    <FileBaseContaine>
                        <FileBase
                            type="file"
                            multiple={false}
                            onDone={({ base64 }) => setProductImage(base64)}

                        />
                    </FileBaseContaine>

                    <ButtonContainer>

                        <DescriptionButton onClick={() => handleEditOrAdd()}>
                            {edit ? 'Modificar Producto' : 'Agregar Producto'}
                        </DescriptionButton>

                        <DescriptionButton small onClick={() => handleClean()}>
                            X
                        </DescriptionButton>

                    </ButtonContainer>

                </EditCard>

            </EditPanelContainer>

            <ProductPanelContainer>

                <ProductCard>

                    {products.map(data => (
                        <ProductSection key={data.id}>
                            <ProductId> {data.id} </ProductId>
                            <ProductTitle> {data.name} </ProductTitle>
                            <ProductButtonContainer>
                                <ProductButton onClick={() => handleEditClick(data)} > <RiEditBoxFill /> </ProductButton>
                                <ProductButton onClick={() => handleDelete(data.id)} > <AiFillDelete /> </ProductButton>
                            </ProductButtonContainer>
                        </ProductSection>
                    ))}

                </ProductCard>

            </ProductPanelContainer>

        </PanelBackground>

    )

}

export default Panel