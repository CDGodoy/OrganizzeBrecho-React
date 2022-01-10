import React from 'react'
import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, Person, Store, AttachMoney, BusinessCenter } from '@material-ui/icons'
import { useNavigate } from 'react-router'

export default function Sidebar() {
    
    const navigate = useNavigate();
    
    return (

        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Painel de Controle</h3>
                    <ul className="sidebarList">
                        <li onClick={() => {navigate(`/`)}} className="sidebarListItem">
                            <LineStyle className="sidebarIcon"/>
                            Início
                        </li>
                        <li onClick={() => {navigate(`/analytics`)}} className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Análises
                        </li>
                        <li onClick={() => {navigate(`/sales`)}} className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Vendas
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Menu rápido</h3>
                    <ul className="sidebarList">
                        <li onClick={() => {navigate(`/costumers`)}} className="sidebarListItem">
                            <Person className="sidebarIcon"/>
                            Clientes
                        </li>
                        <li onClick={() => {navigate(`/products`)}} className="sidebarListItem">
                            <Store className="sidebarIcon"/>
                            Produtos
                        </li>
                        <li onClick={() => {navigate(`/transactions`)}} className="sidebarListItem">
                            <AttachMoney className="sidebarIcon"/>
                            Movimentações
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Gerência</h3>
                    <ul className="sidebarList">
                        <li onClick={() => {navigate(`/manage`)}} className="sidebarListItem">
                            <BusinessCenter className="sidebarIcon"/>
                            Gerenciar brechó
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
