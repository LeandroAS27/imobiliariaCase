import '../styles/search.scss';

const Search = () => {
    return(
        <section className="search-container">
            <div className='search-modal'>
                <h2>Buscas mais populares</h2>
                <div className='search-grid'>
                    <div className='search-group'>
                        <ul className='search-list'>
                            <li className='search-item'>
                                <a href='/categoria1'>Casas para alugar</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Apartamento para alugar</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Casas à venda</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Imóveis à venda</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Apartamento à venda</a>
                            </li>
                        </ul>
                    </div>
                    {/* grid 2 */}
                    <div className='search-group'>
                        <ul className='search-list'>
                            <li className='search-item'>
                                <a href=''>Casas à venda na Mooca</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Casas à venda em Itaquera</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Casas à venda na Lapa</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Casas à venda em Santana</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Casas à venda no Tucuruvi</a>
                            </li>
                        </ul>
                    </div>
                    {/* grid 3 */}
                    <div className='search-group'>
                        <ul className='search-list'>
                            <li className='search-item'>
                                <a href=''>Apartamentos à venda na Vila Mariana</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Apartamento à venda na Mooca</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Apartamento à venda em Pinheiros</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Apartamento à venda no Tucuruvi</a>
                            </li>
                            <li className='search-item'>
                                <a href=''>Apartamento à venda no Pacaembú</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Search;