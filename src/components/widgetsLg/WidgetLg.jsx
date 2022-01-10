import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {
    
    const Button = ({type}) =>{
        return <button className={"widgetLgButton " + type}>{type}</button>
    }

    return (
        
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Últimas vendas</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Cliente</th>
                    <th className="widgetLgTh">Data</th>
                    <th className="widgetLgTh">Valor</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="" 
                        alt="" 
                        className="widgetLgIM" />
                        <span className="widgetLgName">Letícia Vidal</span>
                    </td>
                    <td className="widgetLgDate">10 Jan 2022</td>
                    <td className="widgetLgAmount">R$50</td>
                    <td className="widgetLgStatus"><Button type="Aprovado"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">R$1500</td>
                    <td className="widgetLgStatus"><Button type="Aprovado"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">R$1500</td>
                    <td className="widgetLgStatus"><Button type="Cancelado"/></td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src="" 
                        alt="" 
                        className="widgetLgIM" />
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2021</td>
                    <td className="widgetLgAmount">R$1500</td>
                    <td className="widgetLgStatus"><Button type="Pendente"/></td>
                </tr>
            </table>
        </div>
    )
}
