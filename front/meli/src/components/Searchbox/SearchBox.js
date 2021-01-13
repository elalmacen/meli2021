import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import logo from '../../assets/statics/logo_mercado_libre.png';
import searchIco from '../../assets/statics/ic_search.png';

function SearchBox(props) {
    const [query, setQuery] = useState('');
    
    const goHome = (event) => {
        event.preventDefault();
        props.props.history.push("/");
    }
    
    const search = (event) => {
        event.preventDefault();
        let url = `/items?search=${query}`;        

        const isMlId = query.match(/MLA[0-9]/i);
        if (isMlId !== null) {
            url = `/items/${query}`;
        }
        
        props.props.history.push(url);
    }	

    const handleQuerySearch = (event) => {
        event.preventDefault();
        setQuery(event.target.value);
    }    

    return (
        <Row className="justify-content-md-center margin-side-80">
            <Col xs lg="1">
                <img src={logo} alt='MercadoLibre' className='logo' onClick={event => goHome(event)} />
            </Col>
            <Col>
                <form action='/items/' method='get'>
                    <input
                        type='text'
                        name='search'
                        value={query}
                        onChange={handleQuerySearch}
                        placeholder='Nunca dejes de buscar'
                        autoComplete="false"
                    />
                    <button type='submit' onClick={event => search(event)}>
                        <img src={searchIco} alt='Search' className='icon-search'/>
                    </button>
                </form>
            </Col>
        </Row>        
    );
}
  
export default SearchBox;
