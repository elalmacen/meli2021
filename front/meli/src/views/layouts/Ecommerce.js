import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';
import SearchBox from '../../components/Searchbox/SearchBox'
import Detail from '../detail/detail';
import Results from '../../views/results/results';
import '../../App.scss';

function Ecommerce(props) {
  return (
    <div className="App">      
      <header>
        <Row className="justify-content-md-center margin-side-80">
          <Col xs md="10" className="content">
              <SearchBox />
          </Col>
        </Row>
      </header>
      <Row className="justify-content-md-center margin-side-80">
        <Col xs md="10" className="content">
          <Switch>
              <Route path='/items/:id' render={() => <Detail props={props} />} />
              <Route path='/items' render={() => <Results searchParam={props.location.search} />} />
          </Switch>
        </Col>
      </Row>      
    </div>
  );
}

export default Ecommerce;
