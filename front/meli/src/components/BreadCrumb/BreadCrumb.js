import React from 'react';
import { Row } from 'react-bootstrap';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function BreadCrumb({categories}) {
    return (
        <Row>
            <Breadcrumb>
            {
                categories && categories.map((category, index) => <Breadcrumb.Item key={index} active={index === categories.length -1 ? true : false}>{category}</Breadcrumb.Item>)
            }
            </Breadcrumb>
        </Row>
    );
}

export default BreadCrumb;
