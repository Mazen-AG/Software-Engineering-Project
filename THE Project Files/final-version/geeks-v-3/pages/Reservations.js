import React, { Component } from 'react'
import Sidebar from '../components/Sidebar'
import ReservationForm from '../components/reserve'

export default class Reservations extends Component {
    render() {
        return (
            <div>
                <Sidebar />
                <ReservationForm />
                

            </div>
        )
    }
}