import React from 'react'


const Student = () => {
    const studentsData = [
        { id: 'BS-S12-F011', feeStatus: 'Paid' },
        { id: 'BS-S12-F011', feeStatus: 'Paid' },
        { id: 'BS-S12-F011', feeStatus: 'UnPaid' },
        { id: 'BS-S12-F011', feeStatus: 'Paid' },
        { id: 'BS-S12-F011', feeStatus: 'Paid' },
        { id: 'BS-S12-F011', feeStatus: 'UnPaid' },
        { id: 'BS-S12-F011', feeStatus: 'Paid' },
        { id: 'BS-S12-F011', feeStatus: 'Paid' },
        { id: 'BS-S12-F011', feeStatus: 'UnPaid' },
        { id: 'BS-S12-F011', feeStatus: 'Paid' },
    ];
    return (
        <div className="w-[80%] m-auto my-8 font-pop">
        <div className="bg-[#EAEAEA]  rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="flex justify-between items-center border-b-4 border-[#737090] pb-7 p-16">
                    <h2 className=" font-semibold text-3xl text-[#67647D]">Students</h2>
                    <span className="text-lg text-gray-500 pr-96">26 students</span>
                </div>
                <div className="overflow-x-auto mt-6">
                    <table className="min-w-full bg-[#EAEAEA]">
                        <thead>
                            <tr>
                                <th className="w-1/2 py-3 px-4 uppercase font-semibold text-sm text-left"></th>
                                <th className="w-1/2 py-3 px-4 uppercase font-semibold text-sm text-left"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentsData.map((student, index) => (
                                <tr key={index} className="">
                                    <td className="flex items-center py-4 px-4">
                                        <img
                                            className="w-10 h-10 rounded-full mr-4"
                                            src="https://via.placeholder.com/150"
                                            alt="Avatar"
                                        />
                                        <span>{student.id}</span>
                                    </td>
                                    <td className="py-4 px-4 mr-24">
                                        <span
                                            className={`px-4 py-2 rounded-full text-lg ${
                                                student.feeStatus === 'Paid' ? 'bg-[#63D5775C] text-[#138928]' : 'bg-[#FFD37DB0] text-[#B58A1C]'
                                            }`}
                                        >
                                            {student.feeStatus}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Student