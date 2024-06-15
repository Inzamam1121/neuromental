import React from 'react'
import { FaEdit } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
const Installments = () => {
    const data = [
        {
            ID: '#109',
            course: 'Neuromental deploma',
            Fee: '100$',
            Installments: '2',
            Installmentsfee: '20$, 30$, 10$',
            date: '10 DEC',
            attendance: '70%',
            status: 'completed',
            certificate: 'issue',
            total: '20'

        },
        {
            ID: '#109',
            course: 'Neuromental deploma',
            Fee: '100$',
            Installments: '2',
            Installmentsfee: '20$, 30$, 10$',
            date: '10 DEC',
            attendance: '70%',
            status: 'completed',
            certificate: 'issue',
            total: '20'

        },
        {
            ID: '#109',
            course: 'Neuromental deploma',
            Fee: '100$',
            Installments: '2',
            Installmentsfee: '20$, 30$, 10$',
            date: '10 DEC',
            attendance: '70%',
            status: 'completed',
            certificate: 'issue',
            total: '20'

        },
    
        
    ]
    const navigate=useNavigate();
    return (

        <>
            <div className=" mx-auto  overflow-x-auto font-pop w-[90%] via-gray-400">
                <table className="min-w-full w-full overflow-x-scroll bg-gray11 border-separate  border-spacing-y-4 rounded-lg my-4 font-pop">
                    <thead>
                        <tr className='font-pop text-[#868686]'>
                            <th className="py-2 font-normal">ID</th>
                            <th className="py-2 font-normal">Students</th>
                            <th className="py-2 w-fit font-normal">Fee Amount</th>
                            <th className="py-2 font-normal">Installments</th>
                            <th className="py-2  font-normal">Installment fee</th>
                            <th className="py-2 font-normal">Till Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={index} className="space-x-2 bg-white   font-pop w-fit"
                                onClick={() => { navigate('/Admin/installments/installmentsdetails') }}
                            >
                                 <td className="py-1 px-2 rounded-l-xl">
                                    <div className='w-max'>
                                        {row.ID}</div>
                                </td>
                                <td className="py-6  px-4">
                                    <div className='font-pop flex items-center gap-3 w-[100%] m-auto'>
                                        <img src="../../images/profile.png" alt="" className='w-[20%]' />
                                        <div className=''>Liam Ridley</div>
                                    </div>
                                </td>
                               
                                <td className="py-2 px-2">
                                    <div className='w-max'>
                                        {row.Fee}
                                    </div>
                                </td>
                                <td className="py-2 px-2">
                                    <div className='w-max'>
                                        {row.Installments}
                                    </div>
                                </td>
                                <td className="py-2 px-2 ">
                                    <div className='w-max text-[#7A7A7A] font-pop'>
                                        {row.Installmentsfee}
                                    </div>
                                </td>
                                <td className="py-2 px-2 rounded-r-xl">
                                    <div className='w-max'>
                                        {row.date}
                                    </div>
                                </td>
                                
                                
                                
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </>
    )
}
export default Installments