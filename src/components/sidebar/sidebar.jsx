import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, Person, Store, AttachMoney, BusinessCenter } from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Painel de Controle</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Início
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Análises
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Vendas
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu rápido</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Person className="sidebarIcon"/>
                            Clientes
                        </li>
                        <li className="sidebarListItem">
                            <Store className="sidebarIcon"/>
                            Produtos
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Movimentações
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Gerência</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <BusinessCenter className="sidebarIcon"/>
                            Gerenciar brechó
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
