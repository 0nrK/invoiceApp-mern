import React, { useState, useEffect, useContext } from 'react'
import InvoiceItem from './InvoiceItem'
import axios from 'axios'
import { Link } from "react-router-dom"
import { openMenu } from "../context/FormActions"
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../context/FormContext'
import InvoiceContainer from './InvoiceContainer'
const Main = ({ props }) => {


    const [data, setData] = useState([])
    const { dispatch } = useContext(FormContext);
    const [filterMenu, setFilterMenu] = useState(false)

    useEffect(() => {
        axios.get("http://localhost:5000/")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])


    return (
        <main className="max-w-screen-lg w-full px-3 overflow-hidden flex flex-col py-24  mx-auto flex-1">
            <div className="flex flex-row px-1 items-center justify-between">
                <div className="flex flex-col">
                    <h1 className="text-white  md:mb-4 text-4xl md:text-5xl">Invoices</h1>
                    <span className=" text-gray-300 ">{data.length} invoices</span>
                </div>
                <span className="hidden md:display text-gray-300 ">There are {data.length} total invoices</span>
                <div className="flex flex-row space-x-1 items-center ">
                    <div className="flex flex-row w-full  relative items-center justify-center  cursor-pointer">
                        <div
                            onClick={() => setFilterMenu(!filterMenu)}
                            className="flex flex-row space-x-3 mr-3 items-center  justify-center">
                            <span
                                className="invisible md:visible text-white text-xl">
                                Filter by status
                            </span>
                            <span className="sm:visible text-white text-xl">
                                Filter
                            </span>
                            {filterMenu ? <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-300 h-6 w-6 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
                            </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-300 h-6 w-6 transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                                </svg>}
                        </div>
                        {filterMenu &&
                            <ul className="flex flex-col cursor-pointer absolute top-8">
                                <button className="h-8 w-40 hover:bg-slate-500 bg-slate-600">
                                    <li className=" text-white">A</li>
                                </button>
                                <button className="h-8 w-40 hover:bg-slate-500 bg-slate-600">
                                    <li className=" text-white">A</li>
                                </button>
                                <button className="h-8 w-40 hover:bg-slate-500 rounded-b-md bg-slate-600">
                                    <li className=" text-white">A</li>
                                </button>

                            </ul>}
                    </div>
                    <button onClick={() => dispatch({ type: "OPEN_MENU" })} className="flex flex-row text-l py-2  px-3 font-bold bg-purple-500 md:text-xl   justify-center items-center text-white rounded-3xl text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8  mr-3 flex items-center justify-center bg-white rounded-full text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                        </svg>
                        New
                    </button>
                </div>
            </div>
            <InvoiceContainer />
        </main >
    )
}

export default Main
