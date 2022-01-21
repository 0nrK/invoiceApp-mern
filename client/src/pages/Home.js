import React, { useState, useEffect } from 'react'
import InvoiceInfo from '../components/InvoiceInfo'
import axios from "axios"
import Main from '../components/Main'
import NewInvoice from '../components/NewInvoice'
import Sidebar from '../components/Sidebar'

const Home = ({ props }) => {


    return (
        <div className="flex flex-col  h-screen w-full   bg-gray-800">
            <Sidebar />
            <NewInvoice />
            <Main props={props} />
        </div>
    )
}

export default Home
