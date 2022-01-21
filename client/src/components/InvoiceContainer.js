import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import InvoiceItem from './InvoiceItem'
import axios from 'axios'

const InvoiceContainer = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        axios.get("http://localhost:5000/")
            .then((res) => setData(res.data))
            .then(setLoading(false))
            .then(console.log(data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <div className="mt-12 px-3 md:mt-24 space-y-6">
            {loading ? <span>A.</span>
                :
                data.slice(0, 6).map((invoice) => {
                    console.log(invoice);
                    return (
                        <div key={invoice._id} >
                            <Link to={`/${invoice._id}`}>
                                <InvoiceItem props={invoice} />
                            </Link>
                        </div>
                    )
                })}
        </div>
    )
}

export default InvoiceContainer
