import { useState, useEffect } from 'react'
import { getPadTime } from '../../helpers/getPadTime'

function Banner() {
    const [timeLeft, setTimeLeft] = useState(4*60*60 + 51*60 + 16);
    const hours = getPadTime(Math.floor(timeLeft / 3600));
    const minutes = getPadTime(Math.floor((timeLeft - hours * 3600) / 60));
    const seconds = getPadTime(timeLeft - hours * 3600 - minutes * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
        }, 1000)
    }, [])
    return(
        <section className="banner">
            <div className="banner__timer">
                <p className="banner__timer-title">LIMITTED OFFER</p>
                <div className="banner__timer-box">
                    <span className="banner__timer-item">{hours}</span>
                    <span className="banner__timer-item">:</span>
                    <span className="banner__timer-item">{minutes}</span>
                    <span className="banner__timer-item">:</span>
                    <span className="banner__timer-item">{seconds}</span>
                </div>
            </div>
            <div className="banner__sale">
                <p className="banner__sale_title">R 250.00</p>
                <p className="banner__sale_subtitle">R 160.00</p>
            </div>
        </section>
    );
}

export default Banner;