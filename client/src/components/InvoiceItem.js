import React, { useEffect } from 'react';

const InvoiceItem = ({ props }) => {

    const paymentDate = new Date(props.paymentDate)

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const paymentDateMonth = monthNames[paymentDate.getMonth()]
    const paymentDateDay = paymentDate.getDay()
    const paymentDateYear = paymentDate.getFullYear()

    const statusStyle =
    {
        Pending: ["text-red-700 text-lg md:text-2xl underline"],
        Paid: ["text-green-800 text-lg md:text-2xl underline"],
        Draft: ["text-lg text-gray-900 md:text-2xl underline"]
    }

    return (
        <div className="">
            <div className="flex flex-row p-3 md:p-8 justify-between space-x-5  items-center   bg-slate-700 hover:bg-slate-600 h-40 w-full rounded-xl">
                <span className=" flex-1 text-lg text-purple-500  font-bold  md:text-2xl">#{props._id.slice(0 - 5).toUpperCase()}</span>
                <span className=" flex-1 text-lg md:text-2xl font-bold text-gray-200 ">{props.clientName}</span>
                <span className=" flex-1 text-  ">{props.status}</span>
                <span className=" flex-1 text-lg md:text-lg  text-gray-200">{paymentDateDay + " " + paymentDateMonth + " " + paymentDateYear}</span>
                <span className=" flex-1  text-lg text-white font-bold md:text-3xl">${props.amount}</span>
            </div>
        </div>
    );
};

export default InvoiceItem;
