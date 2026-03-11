import React from "react";

const appointments = [
  {
    id: 1,
    patient: "Richard James",
    department: "General Physician",
    age: 28,
    date: "24th July, 2024, 10:AM",
    doctor: "Dr. Richard James",
    fees: "$50",
  },
  {
    id: 2,
    patient: "Richard James",
    department: "General Physician",
    age: 28,
    date: "24th July, 2024, 10:AM",
    doctor: "Dr. Richard James",
    fees: "$50",
  },
];

const AllAppointments = () => {
  return (
    <div className="p-6">

      <h2 className="text-lg font-semibold mb-4">
        All Appointments
      </h2>

      <div className="bg-white rounded-xl shadow overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-gray-600">
            <tr className="text-left">

              <th className="p-4">#</th>
              <th className="p-4">Patient</th>
              <th className="p-4">Department</th>
              <th className="p-4">Age</th>
              <th className="p-4">Date & Time</th>
              <th className="p-4">Doctor</th>
              <th className="p-4">Fees</th>
              <th className="p-4"></th>

            </tr>
          </thead>

          <tbody>

            {appointments.map((item, index) => (
              <tr
                key={index}
                className="border-t"
              >

                <td className="p-4">{item.id}</td>

                <td className="p-4 flex items-center gap-3">

                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    className="w-8 h-8 rounded-full"
                  />

                  {item.patient}

                </td>

                <td className="p-4">
                  {item.department}
                </td>

                <td className="p-4">
                  {item.age}
                </td>

                <td className="p-4">
                  {item.date}
                </td>

                <td className="p-4 flex items-center gap-3">

                  <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    className="w-8 h-8 rounded-full"
                  />

                  {item.doctor}

                </td>

                <td className="p-4">
                  {item.fees}
                </td>

                <td className="p-4">

                  <button className="w-8 h-8 flex items-center justify-center border border-red-200 text-red-500 rounded-full hover:bg-red-50">
                    ✕
                  </button>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default AllAppointments;