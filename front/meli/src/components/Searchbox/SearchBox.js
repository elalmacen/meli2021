import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import logo from '../../assets/statics/logo_mercado_libre.png';
import searchIco from '../../assets/statics/ic_search.png';

function SearchBox() {
    const [query, setQuery] = useState('');
    
    const goHome = () => {
        window.location.assign('/');
    }
    
    const search = () => {
        let url = `/items?search=${query}`;        

        const isMlId = query.match(/MLA[0-9]/i);
        if (isMlId !== null) {
            url = `/items/${query}`;
        }
        window.location.href = url;        
    }	

    const handleQuerySearch = (event) => {
        setQuery(event.target.value);
    }    

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            search();
        }
      }

    return (
        <Row className="searchbox-view">
            <Col xs lg="1">
                <img src={logo} alt='MercadoLibre' className='logo' onClick={goHome} />
            </Col>
            <Col>
                    <div className="form">
                        <input
                            type='text'
                            name='search'
                            value={query}
                            onChange={handleQuerySearch}
                            onKeyDown={handleKeyDown}
                            placeholder='Nunca dejes de buscar'
                            autoComplete="false"
                        />
                        <button onClick={search}>
                            <img src={searchIco} alt='Search' className='icon-search'/>
                        </button>
                    </div>
            </Col>
        </Row>        
    );
}
  
export default SearchBox;
