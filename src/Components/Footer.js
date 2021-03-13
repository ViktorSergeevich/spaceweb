import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer__container">
                <div className="footer__license">
                    <div className="footer__item">© 2001– 2018 ООО <a href="#">«СпейсВэб»</a></div>
                    <div className="footer__item">Все права защищены.</div>
                    <div className="footer__item">Лицензия <a href="#">№163230</a></div>
                </div>
                <div className="footer__contacts">
                    <div className="footer__item"><a href="#">+7 (812) 334-12-22</a> (в Санкт-Петербурге)</div>
                    <div className="footer__item"><a href="#">+7 (495) 663-16-12</a> (в Москве)</div>
                    <div className="footer__item"><a href="#">(800) 100-16-15</a> (бесплатно по России)</div>
                </div>
            </div>
        </div>
    );
}