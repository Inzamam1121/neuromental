import React from 'react'
import { useNavigate } from 'react-router-dom'

const Verification = () => {
    const data = [
        {
            ID: '#109',
            Student: 'Random',
            FeeAmount: '100%',
            image: 'image',
            feepaid: 'paid',
            date: "10 DEC"

        },
        {
            ID: '#109',
            Student: 'Random',
            FeeAmount: '100%',
            image: 'image',
            feepaid: 'Not paid',
            date: "10 DEC"

        },
        {
            ID: '#109',
            Student: 'Random',
            FeeAmount: '100%',
            image: 'image',
            feepaid: 'paid',
            date: "10 DEC"

        },
         {
            ID: '#109',
            Student: 'Random',
            FeeAmount: '100%',
            image: 'image',
            feepaid: 'Not paid',
            date: "10 DEC"

        },

    ]
    const navigate =useNavigate();
    return (
        <>
            <div className=" mx-auto  overflow-x-auto font-pop w-[90%] via-gray-400">
                <table className="min-w-full w-full overflow-x-scroll bg-gray11 border-separate  border-spacing-y-4 rounded-lg my-4 font-pop">
                    <thead>
                        <tr className='font-pop text-[#868686]'>
                            <th className="py-2 font-normal">ID</th>
                            <th className="py-2 font-normal">Students</th>
                            <th className="py-2 w-fit font-normal">Fee Amount</th>
                            <th className="py-2 font-normal">Image</th>
                            <th className="py-2  font-normal">fee Paid</th>
                            <th className="py-2 font-normal">Till Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={index} className="space-x-2 bg-white   font-pop w-fit"
                                onClick={() => { navigate('/Admin/verification/verificationdetails') }}
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
                                        {row.FeeAmount}
                                    </div>
                                </td>
                                <td className="py-2 px-2">
                                    <div className='w-max'>
                                        {row.image}
                                    </div>
                                </td>
                                <td className="py-2 px-2 ">
                                    <div className={`${row.feepaid == "paid" ? 'border-2 bg-[#63D5773B] text-[#63D577] border-[#63D577]' :'border-2 bg-[#FEF8EE] text-[#CC1F1F] border-[#CC1F1F]'} font-pop w-fit py-2 px-4 rounded-lg`}>
                                        <div className='w-max'>{row.feepaid}</div>
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
export default Verification