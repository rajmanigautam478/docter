import React from "react";
import doctorIcon from "../assets/doc1.png";
import appointmentIcon from "../assets/appointment_img.png";
import patientIcon from "../assets/group_profiles.png";

const Dashboard = () => {

const appointments = [1,2,3,4,5]

return (
<div className="p-6 bg-gray-50 min-h-screen">

{/* Stats Cards */}

<div className="grid grid-cols-3 gap-6 mb-8">

<div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">
<img src={doctorIcon} className="w-12"/>
<div>
<p className="text-xl font-semibold">14</p>
<p className="text-gray-500">Doctors</p>
</div>
</div>

<div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">
<img src={appointmentIcon} className="w-12"/>
<div>
<p className="text-xl font-semibold">2</p>
<p className="text-gray-500">Appointments</p>
</div>
</div>

<div className="flex items-center gap-4 bg-white p-5 rounded-xl shadow">
<img src={patientIcon} className="w-12"/>
<div>
<p className="text-xl font-semibold">5</p>
<p className="text-gray-500">Patients</p>
</div>
</div>

</div>

{/* Latest Appointment */}

<div className="bg-white rounded-xl shadow">

<div className="border-b p-4 font-semibold">
Latest Appointment
</div>

<div>

{appointments.map((item,index)=>(
<div
key={index}
className="flex items-center justify-between p-4 border-b"
>

<div className="flex items-center gap-3">

<img
src="https://randomuser.me/api/portraits/men/32.jpg"
className="w-10 h-10 rounded-full"
/>

<div>
<p className="font-medium">
Dr. Richard James
</p>
<p className="text-sm text-gray-500">
Booking on 24th July, 2024
</p>
</div>

</div>

<button className="w-8 h-8 flex items-center justify-center rounded-full border border-red-200 text-red-500 hover:bg-red-50">
✕
</button>

</div>
))}

</div>

</div>

</div>
)
}

export default Dashboard