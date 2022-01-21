import React from 'react'


const InvoiceItem = ({ props }) => {


    return (
        <div className="max-w-screen-l  rounded-xl w-full  h-44 md:h-20 bg-slate-700 hover:bg-slate-600 cursor-pointer">
            <div className="flex flex-row flex-wrap  group  w-full h-full px-6 md:px-12 justify-between items-center">
                <div className="flex flex-col w-full md:flex-row items-center">
                    <div className="flex flex-row w-1/5 items-center">
                        <span className="text-2xl md:text-xl text-gray-400">#</span>
                        <span className="text-xl md:text-2xl text-white font-bold">{props._id.slice(0 - 5).toUpperCase()}</span>
                    </div>
                    <span className="text-xl md:text-2xl ml-12 md:w-3/5 text-gray-300">{props.paymentDate}</span>

                </div>
                <div className="flex flex-col justify-center w-1/5 space-x-12 md:flex-row items-center">
                    <span className="text-xl md:w-1/5 mr-12 text-gray-300">{props.clientName}</span>
                    <div className="bg-orange-400  py-2 flex flex-row items-center">
                        <span className="text-xl  sm:w-1/5 px-5  text-orange-100  ">{props.status}</span>
                    </div>
                </div>
                <div className="flex flex-row md:w-1/5 items-center space-x-2">
                    <p className="text-white text-2xl  md:text-4xl font-bold">${props.amount}</p>
                    <p className="invisible sm:visible">
                        <svg xmlns="http://www.w3.org/2000/svg" className="text-purple-300 group-hover:scale-150 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InvoiceItem
