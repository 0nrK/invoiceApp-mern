const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require("mongoose");
const Invoice = require("./models/Invoice.js")
const app = express();

dotenv.config()
app.use(express.json())
app.use(cors())

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB Connection Successfull!"))
    .catch((err) => {
        console.log(err);
    });

// GET ALL INVOICES
app.get("/", async (req, res) => {
    try {
        const invoices = await Invoice.find()
        res.status(200).json(invoices)
    } catch (err) {
        res.status(400).json(err)
    }
})

// GET SINGLE INVOICE
app.get("/:id", async (req, res) => {
    console.log(req);
    try {
        const invoice = await Invoice.findById(req.params.id)
        console.log(invoice)
        res.status(200).json(invoice)
    } catch (err) {
        res.status(500).json(err)
    }
})


// CREATE
app.post("/addinvoice", async (req, res) => {
    console.log(req.body);

    try {
        const newInvoice = new Invoice({
            street: req.body.formValue.street,
            city: req.body.formValue.city,
            zipCode: req.body.formValue.zipCode,
            country: req.body.formValue.country,
            clientName: req.body.formValue.clientName,
            clientEmail: req.body.formValue.clientEmail,
            clientCity: req.body.formValue.clientCity,
            clientZipCode: req.body.formValue.clientZipCode,
            clientCountry: req.body.formValue.clientCountry,
            clientStreet: req.body.formValue.clientStreet,
            paymentDate: req.body.formValue.paymentDate,
            amount: req.body.formValue.amount
        })
        await newInvoice.save()
        res.status(200).json(newInvoice)
    } catch (err) {
        res.status(400).json(err)
    }
})

// UPDATE
app.put("/:id", async (req, res) => {
    try {
        const updatedInvoice = await Invoice.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(updatedInvoice)
    } catch (err) {
        res.status(400).json()
    }
})

// DELETE 
app.delete("/:id", async (req, res) => {
    try {
        await Invoice.findByIdAndDelete(req.params.id)
        res.status(200).json("Invoice has been deleted.")
    } catch (err) {
        res.status(400).json(err)
    }
})

app.listen(5000, () => {
    console.log("server is working")
})