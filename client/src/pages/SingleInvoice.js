import React, { useState, useEffect } from 'react'
import InvoiceInfo from '../components/InvoiceInfo'
import Sidebar from '../components/Sidebar'
import axios from 'axios'
import { useParams } from 'react-router'


const SingleInvoice = ({ props }) => {

    return (
        <div className="flex flex-col w-full h-max   bg-gray-800">
            <Sidebar />
            <InvoiceInfo />
        </div>
    )
}

export default SingleInvoice
