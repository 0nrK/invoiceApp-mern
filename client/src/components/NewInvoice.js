import React, { useState, useContext } from 'react'
import { FormContext } from '../context/FormContext'
import axios from 'axios'

const NewInvoice = () => {

    const { state, dispatch } = useContext(FormContext)
    const [showForm, setShowForm] = useState(state)
    const [itemForm, setItemForm] = useState({ num: 1 })

    const [formValue, setFormValue] = useState({
        street: "",
        city: "",
        zipCode: "",
        country: "",
        clientName: "",
        clientEmail: "",
        clientCity: "",
        clientZipCode: "",
        clientCountry: "",
        clientStreet: "",
        paymentDate: "",
        items: [{
            itemName: "",
            itemQuantity: "",
            itemPrice: "",
            itemTotal: "",
        }],
        amount: "",
    })

    function handleClose() {
        dispatch({ type: "CLOSE_MENU" })
        setShowForm(false)
    }

    function handleChange(event) {
        setFormValue(values => ({ ...values, [event.target.name]: event.target.value }))
        console.log(formValue)
    }



    function handleSubmit(e) {
        e.preventDefault()
        dispatch({ type: "CLOSE_MENU" })
        axios.post("http://localhost:5000/addinvoice", { formValue })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    const handleAddItem = (e) => {
        e.preventDefault();
        setItemForm((itemForm) => ({ num: itemForm.num + 1 }))
    }

    const handleRemoveItem = (e) => {
        e.preventDefault();
        setItemForm((itemForm) => ({ num: itemForm.num - 1 }))
    }


    return (
        <div className="transition w-full delay-150 duration-300 ease-in-out">
            {
                state &&
                <aside className="z-50 bg-slate-800  absolute top-0 md:left-15 overflow-auto scrollbar scrollbar-thumb-gray-500  scrollbar-track-gray-900 text-white space-y-5 px-8 py-12">
                    <div className="flex flex-row mb-12 justify-between items-center">
                        <h1 className="text-3xl ">New Invoice</h1>
                        {/* X */}
                        <button onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-red-600  cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>

                        </button>
                    </div>
                    <form onSubmit={handleSubmit} className="relative flex flex-col overflow w-full">
                        <div className="flex flex-col justify-center text-l space-y-3">
                            <h3 className="text-2xl text-purple-600">Bill From</h3>
                            <label htmlFor="street">Street</label>
                            <input required name="street" onChange={handleChange} value={formValue.street || ""} type="text"></input>
                            <div className="flex flex-wrap md:flex-row space-y-3 items-center md:space-x-3 ">
                                <div className="flex flex-col ">
                                    <label htmlFor="city">City:</label>
                                    <input required type="text" onChange={handleChange} value={formValue.city || ""} name="city" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="zipCode">Zip Code:</label>
                                    <input required type="text" onChange={handleChange} value={formValue.zipCode || ""} name="zipCode" />
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="country">Country:</label>
                                    <input required type="text" onChange={handleChange} value={formValue.country || ""} name="country" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col  mt-12 space-y-3 text-l  ">
                            <h3 className=" text-2xl mb-5 text-purple-600">Bill To</h3>
                            <label htmlFor="clientName">Name:</label>
                            <input required name="clientName" onChange={handleChange} value={formValue.clientName || ""} type="text"></input>
                            <label htmlFor="clientEmail">Email:</label>
                            <input required name="clientEmail" onChange={handleChange} value={formValue.clientEmail || ""} type="text"></input>
                            <label htmlFor="clientStreet">Street:</label>
                            <input required name="clientStreet" onChange={handleChange} value={formValue.clientStreet || ""} className="" type="text"></input>
                            <div className="flex flex-col  space-y-3 md:flex-row items-center md:space-x-3">
                                <div className="flex w-full flex-col">
                                    <label htmlFor="clientCity" className="">City:</label>
                                    <input className="" required type="text" onChange={handleChange} value={formValue.clientCity || ""} name="clientCity" />
                                </div>
                                <div className="flex w-full flex-col">
                                    <label htmlFor="clientZipCode">Zip Code:</label>
                                    <input required onChange={handleChange} value={formValue.clientZipCode || ""} type="text" name="clientZipCode" />
                                </div>
                                <div className="flex w-full flex-col">
                                    <label htmlFor="clientCountry">Country:</label>
                                    <input required onChange={handleChange} value={formValue.clientCountry || ""} type="text" name="clientCountry" />
                                </div>
                            </div>
                            <div className="flex flex-col space-y-5 rounded-md   bg-slate-800 h-auto">

                                <h1 className="mt-16 text-2xl text-purple-600">Add Item</h1>
                                <ul className="space-y-3">
                                    {[...Array(itemForm.num)].map((x, i) => {

                                        return (
                                            <li key={i}>
                                                <div className="flex flex-col md:flex-row space-y-3 md:space-x-3 items-center justify-between text-white text-xl ">
                                                    <input onChange={handleChange} type="text" name="itemName" className="w-full md:w-auto" placeholder="Item Name:"></input>
                                                    <input onChange={handleChange} type="number" name="itemQuantity" className="w-full md:w-24 " placeholder="Quantity:"></input>
                                                    <input onChange={handleChange} type="number" name="itemPrice" className="w-full md:w-28 " placeholder="Price:"></input>
                                                    <input onChange={handleChange} type="number" name="itemTotal" className="w-full md:w-28" placeholder="Total:"></input>
                                                    <svg onClick={handleRemoveItem} xmlns="http://www.w3.org/2000/svg" className="h-9 w-9  text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                    </svg>
                                                </div>
                                            </li>
                                        )
                                    }
                                    )}
                                </ul>
                                <button onClick={handleAddItem} className="bg-slate-900 mx-auto py-4 rounded-xl text-xl w-48 ">+ Add New Item</button>

                            </div>

                            <label htmlFor="date">Date:</label>
                            <input required name="date" onChange={(event) => setFormValue({ ...formValue, paymentDate: event.target.value })} value={formValue.paymentDate || ""} type="date" />
                            <label htmlFor="amount">Amount:</label>
                            <input required name="amount" onChange={handleChange} value={formValue.amount || ""} type="number" />
                        </div>
                        <button
                            className="p-5 mt-3 rounded-md hover:bg-purple-600 float-right bg-purple-700"
                            type="submit">
                            Submit
                        </button>
                    </form>
                </aside>
            }
        </div >
    )
}

export default NewInvoice
