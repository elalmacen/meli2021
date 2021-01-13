import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import CurrencyFormat from 'react-currency-format';
import BreadCrumb from '../../components/BreadCrumb/BreadCrumb';
import Loader from '../../components/Loader/Loader';
import useFetchDataItem from "../../hooks/useFetchDataItem";

function Detail(props) {
    const [product, categories, loading, notFound] = useFetchDataItem(); 

    console.log('notFound', notFound);

    return (product && 
        <>            
            {(loading) 
            ? <Loader />
            : <>
            <BreadCrumb categories={categories} />
            {(notFound)
            ? <div>Parece que esta página no existe</div>
            : <Col className='product-view'>
                <Row>
                    <Col xs={12} md={8}>
                        <img src={product.picture} alt='thumbnail'/>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className='new'>{product.condition === 'new' ? 'Nuevo' : 'Usado'} - {product.sold_quantity > 1 ? `${product.sold_quantity} vendidos` : `${product.sold_quantity} vendido`}</div>
                        <h2 className='product-title'>{product.title}</h2>
                        <CurrencyFormat value={product?.price?.amount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} className='price' />
                        <Button>Comprar</Button>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={12}>
                        <div className='description'>
                            <h3>Descripción del producto</h3>
                            <p>{product.description ? product.description : "-"}</p>
                        </div>
                    </Col>
                </Row>
            </Col>}            
            </>}
        </>
    );
}

export default Detail;
