import React, {useState} from "react";

export default function Article({ item, index}) {
   // var isShow = false;
    const [isShow, setShow] = useState(false)

    return (
        <div className={isShow ? "article article--active" : "article"}>
            <div onClick={() => setShow(!isShow)} className="article__title">
                <p>{ item['turbo:topic']._text }</p>
                <span className="article__arrow" />
            </div>
            <div className="article__content">
                { isShow ? <div dangerouslySetInnerHTML={{__html:item['turbo:content']._cdata}}></div> : ''}
            </div>
        </div>
    )
}