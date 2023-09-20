import logo from '../../images/under-header.png'

function UnderHeader() {
    return(
        <section className="under-header">
            <div className="under-header__logo-box">
                <img className="under-header__logo" src={logo} alt="логотип" />
                <div className="under-header__radius"></div>
            </div>
            <h2 className="under-header__title">orthopedic slippers</h2>
        </section>
    );
}

export default UnderHeader;