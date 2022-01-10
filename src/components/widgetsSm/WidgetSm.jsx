import { Visibility } from '@material-ui/icons'
import React from 'react'
import "./widgetSm.css"

export default function WidgetSm() {
    return (
        <div className="widgetSm">
            <span className="widgetSmTitle">Novas peças</span>
            <ul className="widgetSmList">
                <li className="widgetSmListItem">
                    <img src="https://cdn-icons.flaticon.com/png/512/1785/premium/1785896.png?token=exp=1641755774~hmac=966f6704bad02c071939dbdcc04c09a0" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Calça Sport</span>
                        <span className="widgetSmUserTitle">Azul</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                        Mostrar
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn-icons.flaticon.com/png/512/1785/premium/1785896.png?token=exp=1641755774~hmac=966f6704bad02c071939dbdcc04c09a0" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Blusa sanfonada</span>
                        <span className="widgetSmUserTitle">Colorida</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                        Mostrar
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn-icons.flaticon.com/png/512/1785/premium/1785896.png?token=exp=1641755774~hmac=966f6704bad02c071939dbdcc04c09a0" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Camisa regata</span>
                        <span className="widgetSmUserTitle">Rosa</span>
                    </div>
                    <button className="widgetSmButton">
                    <Visibility className="widgetSmIcon"/>
                    Mostrar
                    </button>
                </li>
                <li className="widgetSmListItem">
                    <img src="https://cdn-icons.flaticon.com/png/512/1785/premium/1785896.png?token=exp=1641755774~hmac=966f6704bad02c071939dbdcc04c09a0" alt="" className="widgetSmImg" />
                    <div className="widgetSmUser">
                        <span className="widgetSmUserName">Calça jeans</span>
                        <span className="widgetSmUserTitle">Branca</span>
                    </div>
                    <button className="widgetSmButton">
                        <Visibility className="widgetSmIcon"/>
                        Mostrar
                    </button>
                </li>
            </ul>
        </div>
    )
}
