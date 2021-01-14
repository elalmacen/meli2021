import React from 'react';
import { Col } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadCrumb({categories}) {
    return (
        <Col className="breadcrumb-view">
            <Breadcrumb>
            {
                categories && categories.map((category, index) => <Breadcrumb.Item key={index} active={index === categories.length -1 ? true : false}>{category}</Breadcrumb.Item>)
            }
            </Breadcrumb>
        </Col>
    );
}

export default BreadCrumb;
