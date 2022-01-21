import React, { useEffect } from 'react';

const InvoiceItem = ({ props }) => {

    const paymentDate = new Date(props.paymentDate)
    console.log(props);

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const paymentDateMonth = monthNames[paymentDate.getMonth()]
    const paymentDateDay = paymentDate.getDay()
    const paymentDateYear = paymentDate.getFullYear()


    const statusStyle =
    {
        Pending: "bg-red-700 text-white rounded-md text-xl p-3 flex items-center space-x-2 flex-row",
        Paid: "bg-green-800 text-white rounded-md text-xl p-3 flex items-center space-x-2 flex-row",
        Draft: "bg-gray-400 text-black rounded-md text-xl p-3 flex items-center space-x-2 flex-row"
    }

    return (
        <div className="">
            <div className="flex flex-row space-between   bg-slate-700 p-5 hover:bg-slate-600 h-auto w-full rounded-lg">
                <div className="space-y-12">
                    <div>
                        <span className="text-bust text-gray-400">#</span>
                        <span className="text-white font-bold  text-xl">{props._id.slice(0 - 5).toUpperCase()}</span>

                    </div>
                    <div className="flex space-y-1 flex-col">
                        <span className="text-bust  text-gray-200">{paymentDateDay + " " + paymentDateMonth + " " + paymentDateYear}</span>
                        <span className="text-white font-bold text-3xl">$ {props.amount}</span>
                    </div>
                </div>
                <div className="flex flex-col justify-between ml-auto">
                    <span className=" text-gray-400 ">{props.clientName}</span>
                    <div className={statusStyle.Draft}>
                        <span className=" ">·</span>
                        <span className="">{props.status}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InvoiceItem;
