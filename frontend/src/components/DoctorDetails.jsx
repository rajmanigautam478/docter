import React from "react";

const DoctorDetails = () => {

const times = [
"03:00 pm","03:30 pm","04:00 pm","04:30 pm",
"05:00 pm","05:30 pm","06:00 pm","06:30 pm",
"07:00 pm","07:30 pm","08:00 pm","08:30 pm"
]

const days = [
{day:"TUE",date:"10"},
{day:"WED",date:"11"},
{day:"THU",date:"12"},
{day:"FRI",date:"13"},
{day:"SAT",date:"14"},
{day:"SUN",date:"15"},
{day:"MON",date:"16"}
]

return (
<div className="max-w-6xl mx-auto p-6">

{/* Doctor Info */}
<div className="flex gap-6 border rounded-xl p-4">

<img
src="/doctor.png"
className="w-40 h-40 object-cover rounded-lg bg-indigo-500"
/>

<div>

<h2 className="text-xl font-semibold">
Dr. Richard James
<span className="text-blue-500 ml-2">✔</span>
</h2>

<p className="text-gray-500 text-sm">
MBBS - General physician • 4 Years
</p>

<h3 className="mt-3 font-medium">About</h3>

<p className="text-gray-500 text-sm max-w-xl">
Dr. Davis has a strong commitment to delivering comprehensive medical
care focusing on preventive medicine, early diagnosis, and effective
treatment strategies.
</p>

<p className="mt-2 font-medium">
Appointment fee: <span className="text-gray-600">$50</span>
</p>

</div>

</div>

{/* Booking slots */}
<div className="mt-8">

<h3 className="font-semibold mb-4">Booking slots</h3>

<div className="flex gap-3 mb-4">

{days.map((d,i)=>(
<div
key={i}
className={`w-14 h-16 rounded-full flex flex-col items-center justify-center border cursor-pointer
${i===0 ? "bg-indigo-500 text-white":"bg-white"}
`}
>
<p className="text-xs">{d.day}</p>
<p className="font-semibold">{d.date}</p>
</div>
))}

</div>

<div className="flex flex-wrap gap-3">

{times.map((time,i)=>(
<button
key={i}
className="border px-4 py-1 rounded-full text-sm hover:bg-indigo-500 hover:text-white"
>
{time}
</button>
))}

</div>

<button className="mt-6 bg-indigo-500 text-white px-6 py-2 rounded-full">
Book an appointment
</button>

</div>

{/* Related Doctors */}

<div className="mt-16 text-center">

<h2 className="text-xl font-semibold">Related Doctors</h2>

<p className="text-gray-500 text-sm">
Simply browse through our extensive list of trusted doctors.
</p>

<div className="grid grid-cols-4 gap-6 mt-8">

<div className="border rounded-xl overflow-hidden">
<img src="/doc2.png" className="w-full h-48 object-cover"/>
<div className="p-3 text-left">
<p className="text-green-500 text-sm">● Available</p>
<h3 className="font-semibold">Dr. Christopher Davis</h3>
<p className="text-sm text-gray-500">General Physician</p>
</div>
</div>

<div className="border rounded-xl overflow-hidden">
<img src="/doc3.png" className="w-full h-48 object-cover"/>
<div className="p-3 text-left">
<p className="text-green-500 text-sm">● Available</p>
<h3 className="font-semibold">Dr. Chloe Evans</h3>
<p className="text-sm text-gray-500">General Physician</p>
</div>
</div>

</div>

</div>

</div>
)
}

export default DoctorDetails