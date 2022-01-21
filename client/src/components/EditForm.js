import React, { useState } from 'react'
import axios from 'axios'


const EditForm = ({ props, id }) => {

    const [editMenu, setEditMenu] = useState(true)

    const [formValue, setFormValue] = useState({
        street: props.street,
        city: props.city,
        zipCode: props.zipCode,
        country: props.country,
        clientName: props.clientName,
        clientEmail: props.clientEmail,
        clientCity: props.clientCity,
        clientZipCode: props.clientZipCode,
        clientCountry: props.clientCountry,
        clientStreet: props.clientStreet,
        paymentDate: props.paymentDate,
        amount: props.amount,
    })

    async function handleSubmit() {
        console.log(formValue);
        try {
            const res = await axios.put("http://localhost:5000/" + id, formValue)
            console.log(res);
        } catch (err) {
            console.log(err);
        }
    }


    console.log(formValue);
    function handleClose() {
        setEditMenu(false)
    }

    function handleChange(event) {
        setFormValue(values => ({ ...values, [event.target.name]: event.target.value }))
        console.log(formValue);
    }

    return (
        <>
            {editMenu && <div className="z-50 bg-slate-800 absolute h-screen w-max overflow-auto scrollbar scrollbar-thumb-gray-500  scrollbar-track-gray-900 text-white space-y-5 px-8 py-12">
                <div className="flex flex-row mb-12 justify-between items-center">
                    <h1 className="text-2xl font-bold">Update #{(props._id).slice(0, 6).toUpperCase()}</h1>
                    {/* X */}
                    <button onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-red-600  cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <form onSubmit={handleSubmit} className="relative mt-12 overflow">
                    <div className="flex flex-col justify-center  text-l space-y-5">
                        <h3 className="text-2xl mb-5 font-bold text-purple-700 ">Bill From</h3>
                        <label htmlFor="street">Street</label>
                        <input required name="street" onChange={handleChange} value={formValue.street || ""} type="text"></input>
                        <div className="flex flex-row  items-center space-x-3 ">
                            <div className="flex flex-col">
                                <label htmlFor="city">City:</label>
                                <input required type="text" onChange={(event) => handleChange(event)} value={formValue.city} name="city" />
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
                    <div className="flex flex-col  mt-32 space-y-5 text-l  ">
                        <h3 className=" text-2xl mb-5 font-bold text-purple-700">Bill To</h3>
                        <label htmlFor="clientName">Client's Name:</label>
                        <input required name="clientName" onChange={handleChange} value={formValue.clientName || ""} type="text"></input>
                        <label htmlFor="clientEmail">Client's Email:</label>
                        <input required name="clientEmail" onChange={handleChange} value={formValue.clientEmail || ""} type="text"></input>
                        <label htmlFor="clientStreet">Street Adress:</label>
                        <input required name="clientStreet" onChange={handleChange} value={formValue.clientStreet || ""} className="" type="text"></input>
                        <div className="flex flex-row items-center space-x-3">
                            <div className="flex flex-col">
                                <label htmlFor="clientCity" className="">City:</label>
                                <input required type="text" onChange={handleChange} value={formValue.clientCity || ""} name="clientCity" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="clientZipCode">Zip Code:</label>
                                <input required onChange={handleChange} value={formValue.clientZipCode || ""} type="text" name="clientZipCode" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="clientCountry">Country:</label>
                                <input required onChange={handleChange} value={formValue.clientCountry || ""} type="text" name="clientCountry" />
                            </div>
                        </div>
                        <label htmlFor="paymentDate">Payment Date:</label>
                        <input required name="paymentDate" onChange={(event) => setFormValue({ ...formValue, paymentDate: event.target.value })} value={formValue.paymentDate || ""} type="date" />
                        <label htmlFor="projectDesc">Project Description:</label>
                        <input required name="projectDesc" onChange={handleChange} value={formValue.amount || ""} type="textarea" />
                        {/* <div>
                            <ul className="space-y-3">
                                {[...Array(itemForm.num)].map((x, i) => {

                                    return (
                                        <li key={i}>
                                            <div className="flex flex-row space-x-3 items-center justify-between text-white text-xl ">
                                                <input onChange={handleChange} type="text" name="itemName" className="w-auto" placeholder="Item Name:"></input>
                                                <input onChange={handleChange} type="number" name="itemQuantity" className="w-24 " placeholder="Quantity:"></input>
                                                <input onChange={handleChange} type="number" name="itemPrice" className="w-28 " placeholder="Price:"></input>
                                                <input onChange={handleChange} type="number" name="itemTotal" className="w-28" placeholder="Total:"></input>
                                                <svg onClick={handleRemoveItem} xmlns="http://www.w3.org/2000/svg" className="h-9 w-9  text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        </li>
                                    )
                                }
                                )}
                            </ul>
                        </div> */}
                        <label htmlFor="amount">Amount:</label>
                        <input required name="amount" onChange={handleChange} value={formValue.amount || ""} type="number" />
                    </div>

                    <button
                        className="p-5 mt-8 rounded-md hover:bg-purple-600 absolute left-1/2 bg-purple-700"
                        type="submit">Submit
                    </button>
                </form>
            </div>}
        </>
    )
}

export default EditForm
