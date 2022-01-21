const mongoose = require('mongoose');

const InvoiceSchema = new mongoose.Schema(
    {
        street: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "Pending"
        },
        city: {
            type: String,
            default: "",

        },
        zipCode: {
            type: Number,
            default: 14000,

        },
        country: {
            type: String,
            default: "",
        },
        clientName: {
            type: String,
            default: "",
        },
        clientEmail: {
            type: String,
            default: "",

        },
        clientCity: {
            type: String,
            default: "",
        },
        clientZipCode: {
            type: String,
            default: "",

        },
        clientCountry: {
            type: String,
            default: "",
        },
        clientStreet: {
            type: String,
            default: "",
        },
        paymentDate: {
            type: String,
            default: "",
        },
        items: {
            type: Array,
        },
        amount: {
            type: Number,
            default: 10,
        }
    }, { timestamps: true }
)

module.exports = mongoose.model("Invoice", InvoiceSchema)