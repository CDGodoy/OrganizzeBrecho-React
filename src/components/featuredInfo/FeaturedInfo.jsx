import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons'

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Vendas</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">R$100</span>
                    <span className="featuredMoneyRate">+15 <ArrowUpward className="featuredIcon positive"/></span>
                </div>
                <span className="featuredSub">Comparado ao último mês</span>
            </div>
            

            <div className="featuredItem">
                <span className="featuredTitle">Receita</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">R$50</span>
                    <span className="featuredMoneyRate">-10 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                    <span className="featuredSub negative">Comparado ao último mês</span>
            </div>
        </div>
    )
}
