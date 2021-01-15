import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';

function Card({product}) {
    return (
        <li>       
            <Link to={`/items/${product.id}`}>
                <Row>
                    <Col xs={12} md={2}>
                        <img width={180} height={180} src={product.picture} alt='thumbnail' className='img-fluid picture' />
                    </Col>
                    <Col xs={12} md={8}>  
                        <p className={product.free_shipping ? 'price free' : 'price'}>
                            <CurrencyFormat value={product.price.amount} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'$ '} />
                            <span className='decimals'>{product.price.decimals || ""}</span>
                        </p>
                        <h2>{product.title}</h2>
                    </Col>
                    <Col xs={12} md={2}>
                        <span>{product.region}</span>
                    </Col>
                </Row>
            </Link>
        </li>
    );
}

export default Card;
