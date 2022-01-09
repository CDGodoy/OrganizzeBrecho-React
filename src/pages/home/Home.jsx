import React from 'react'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetLg from '../../components/widgetsLg/WidgetLg'
import WidgetSm from '../../components/widgetsSm/WidgetSm'
import "./home.css"

export default function Home() {
    return (
        <div className="home">
            <FeaturedInfo/>
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
