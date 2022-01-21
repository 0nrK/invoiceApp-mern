import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useParams } from 'react-router'
import axios from "axios"
import EditForm from './EditForm'

const InvoiceInfo = (props) => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [editMenu, setEditMenu] = useState(false)

    let { id } = useParams();
    let navigate = useNavigate()

    useEffect(() => {
        async function getInvoice() {
            try {
                const res = await axios.get("http://localhost:5000/" + id)
                setData([res.data]);
                console.log(data);
                setLoading(false)
            } catch (err) {
                console.log(err);
            }
        }
        getInvoice()
    }, [])

    const handleDelete = async () => {
        await axios.delete("http://localhost:5000/" + id)
        navigate("/")
    }


    console.log(data);


    return (
        <>
            {data.map((item) => (
                <div className="w-full max-w-screen-lg mx-auto " key={item.id}>

                    {editMenu && <EditForm id={id} props={item} />}
                    <div className=" text-white">
                        <Link to="/">
                            <div className="group flex flex-row mt-12 mb-16 cursor-pointer items-center">
                                <svg className="w-6 h-6 group-hover:scale-125 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                                <span className="text-l">
                                    Go Back
                                </span>
                            </div>
                        </Link>
                        <div className="flex flex-col  space-y-3 p-5  w-full   bg-slate-700 items-center justify-between">
                            <div className="flex flex-row my-3 space-x-5">
                                <span className="ml-5  text-xl">Status:</span>
                                <span>{item.status}</span>
                            </div>
                            <div className="flex flex-row space-x-5 text-white ">
                                <button onClick={handleDelete} className="rounded-md hover:bg-red-400 p-4 bg-red-500">Delete</button>
                                <button onClick={() => setEditMenu(!editMenu)} className="rounded-md hover:bg-slate-400 p-4 bg-slate-500">Edit</button>
                                <button className="rounded-md hover:bg-green-500 bg-green-600  p-4">Mark As Paid</button>
                            </div>
                        </div>
                        <div className=" flex flex-col p-5 mt-12 space-y-12 bg-slate-700">
                            <div className="flex flex-row  items-center  ">
                                <span className="text-lg text-gray-400">#</span>
                                <h1 className="text-2xl  font-bold">{(item._id).slice(0, 6).toUpperCase()}</h1>
                            </div>
                            <div className="flex  flex-col space-y-2  justify-between mt-16 ">
                                <div className="flex flex-col">
                                    <span className="text-l text-gray-300">Invoice Date:</span>
                                    <span className="font-bold mt-2 text-2xl">{(item.createdAt).slice(0, 10)}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-l text-gray-300">Bill to:</span>
                                    <span className="font-bold mt-2 text-2xl">{item.clientName}A</span>
                                </div>
                                <div className="flex h-auto shrink flex-col">
                                    <span className="text-l text-gray-300">Sent To:</span>
                                    <span className="font-bold  mt-2 text-l sm:text-2xl">{item.clientEmail}</span>
                                </div>
                            </div>
                            <div className="flex flex-col space-y-2 mt-4">
                                <div className="flex flex-col">
                                    <span className="text-l text-gray-300">Payment Date:</span>
                                    <span className="font-bold mt-2 text-2xl">{item.paymentDate}</span>
                                </div>
                                <div className="flex flex-col self-end">
                                    <span>
                                        {item.clientZipCode}
                                    </span>
                                    <span className="text-xl">
                                        {item.clientStreet}
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col mt-12 space-y-5 rounded-md   bg-slate-800 h-auto">
                                <div className="flex flex-row text-gray-300 text-l  w-full justify-between px-8 py-5">
                                    <span className="w-1/4">Item Name</span>
                                    <span className="w-1/4">QTY</span>
                                    <span className="w-1/4">Price</span>
                                    <span className="w-1/4">Total</span>
                                </div>
                                <div className="flex flex-row  justify-between text-white text-xl px-8">
                                    <span className="w-1/4">Banner Design</span>
                                    <span className="w-1/4">1123</span>
                                    <span className="w-1/4">$145</span>
                                    <span className="w-1/4">$145</span>
                                </div>

                                <div className="flex flex-row mt-12 rounded-md px-8 h-20 bg-gray-900 justify-between items-center">
                                    <span className="text-xl">Amount Due:</span>
                                    <span className="font-bold text-4xl">$ {item.amount}</span>
                                </div>
                            </div>
                        </div>

                    </div >
                </div>
            ))

            }
        </>
    )
}

export default InvoiceInfo
