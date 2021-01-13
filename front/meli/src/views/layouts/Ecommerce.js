import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import SearchBox from '../../components/Searchbox/SearchBox'
import Detail from '../../views/detail';
import Results from '../../views/results';
import '../../App.scss';

function Ecommerce(props) {
  return (
    <div className="App">
      <header>
          <SearchBox props={props} />
      </header>
      <Row className="justify-content-md-center margin-side-80">
          <Col xs lg="11">
            <Switch>
                <Route path='/items/:id' render={() => <Detail props={props} />} />
                <Route path='/items' render={() => <Results props={props} />} />
            </Switch>
          </Col>
      </Row>      
    </div>
  );
}

export default Ecommerce;
