import React from 'react'
import "./graph.css"
import { TotalCard } from '../../components/TotalCard/TotalCard'
import { OrderReport } from '../../components/OrderReport/OrderReport'
import { FilterCard } from '../../components/FilterCard/FilterCard'

export const Graph = () => {

    return (
        <div className='graph-wrapper'>
            <div className="text-wrap d-block">
            <h2 className='text-white dash'>Dashboard</h2>
            <p className='dates'>Tuesday 2 Feb, 2021</p>
            </div>
            <ul className="title-wrapp list-unstyled mt-4 d-flex justify-content-between">
            <TotalCard />
            </ul>
            <div className="order-report">
           
            </div>

        <OrderReport />

        </div>
        )
    }
    