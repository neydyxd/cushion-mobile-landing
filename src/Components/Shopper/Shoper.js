import logo from '../../images/Trustpilot.png'
import black from '../../images/black.png'
import orange from '../../images/orange.png'
import pink from '../../images/pink.png'
import yellow from '../../images/yellow.png'
import start from '../../images/stars.svg'

import { useState } from 'react';

function Shoper() {
    const [color, setColor] = useState('Black')
    const [size, setSize] = useState('2')
    const [image, setImage] = useState(black);

    function putColor(anyColor){
        setColor(anyColor);
    }

    function putSize(anySize){
        setSize(anySize);
    }

    function putImage(anyImage){
        setImage(anyImage);
    }
    
    return(
        <section className="shoper">
            <div className="shoper__header">
                <h4 className="shoper__mark">Excellent 4.8/5</h4>
                <img className="shoper__logo" src={logo} alt='логотип' />
                <h4 className="shoper__sale">best selling</h4>
            </div>
            <h2 className='shoper__title'>Orthopedic Slippers</h2>
            <img className='shoper__main-image' src={image} alt='черная обувь' />
            <div className='shoper__list'>
                <img className='shoper__list-item' onClick={() => putImage(black)} src={black} alt='черная обувь'/>
                <img className='shoper__list-item' onClick={() => putImage(orange)} src={orange} alt='оранжевая обувь'/>
                <img className='shoper__list-item' onClick={() => putImage(pink)} src={pink} alt='розовая обувь'/>
                <img className='shoper__list-item' onClick={() => putImage(yellow)} src={yellow} alt='желтая обувь'/>
            </div>
            <div className='shoper__info'>
                <p className='shoper__info-title'>Fast Delivery: <span className='shoper__info-text'>2-4 days from SA &#127487;&#127462;</span></p>
                <p className='shoper__info-title'>In Stock: <span className='shoper__info-text'>Shipping from Johannesburg &#127487;&#127462;</span></p>
                <div className='shoper__rating'>
                    <div className='shoper__stars-box'>
                        <img className='shoper__stars' src={start} alt='звезда' />
                        <img className='shoper__stars' src={start} alt='звезда' />
                        <img className='shoper__stars' src={start} alt='звезда' />
                        <img className='shoper__stars' src={start} alt='звезда' />
                        <img className='shoper__stars' src={start} alt='звезда' />
                    </div>
                    <p className='shoper__rating-number'>(10)</p>
                </div>
            </div>
            <div className='shoper__menu'>
                <div className='shoper__choice'>
                    <p className='shoper__choice-title'>color</p>
                    <div className='shoper__dropdown'>
                        <button className='shoper__choice-button'>{color}</button> 
                        <div className="shoper__dropdown-content">
                            <p onClick={() => putColor('Black')} className="shoper__dropdown-item">Black</p>
                            <p onClick={() => putColor('Orange')} className="shoper__dropdown-item">Orange</p>
                            <p onClick={() => putColor('Pink')} className="shoper__dropdown-item">Pink</p>
                            <p onClick={() => putColor('Yellow')} className="shoper__dropdown-item">Yellow</p>
                        </div>
                    </div>          
                </div>
                <div className='shoper__choice'>
                    <p className='shoper__choice-title'>size</p>
                    <div className='shoper__dropdown'>
                        <button className='shoper__choice-button'>{size}</button> 
                        <div className="shoper__dropdown-content">
                            <p onClick={() => putSize('2')} className="shoper__dropdown-item">2</p>
                            <p onClick={() => putSize('3')} className="shoper__dropdown-item">3</p>
                            <p onClick={() => putSize('4')} className="shoper__dropdown-item">4</p>
                            <p onClick={() => putSize('5')} className="shoper__dropdown-item">5</p>
                        </div>
                    </div>       
                </div>
            </div>
            <a href="https://youtube.com" target='_blank' className='shoper__btn'>BUY NOW</a>
        </section>
    );
}

export default Shoper;