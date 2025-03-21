"use client"
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"
import {Select, MenuItem} from "@mui/material"


export default function DateReserve() {
    return (
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2
        w-fit px-10 py-5 flex flex row justify-center">

            <label htmlFor="name-lastname" className="block text-sm font-semibold text-gray-700">Name-Lastname</label>
            <input
                type="text"
                id="name-lastname"
                name="Name-Lastname"
                className="MuiInput-input w-[200px] border-b border-gray-400 outline-none"
            />

            <label htmlFor="contact-number" className="block text-sm font-semibold text-gray-700">Contact-Number</label>
            <input
                type="text"
                id="contact-number"
                name="Contact-Number"
                className="MuiInput-input w-[200px] border-b border-gray-400 outline-none"
            />

            <Select variant="standard" name="venue"
            className="h-[2em] w-[200px]">
                <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                <MenuItem value="Spark">Spark Space</MenuItem>
                <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker className="bg-white" label="Event Date"/>
            </LocalizationProvider>

        </div>
    )
}