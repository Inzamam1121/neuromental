import React from 'react'
import { CiSearch } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";



const Result = () => {
    const data = [
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
        {
            batch: 'DSTP2.0-BATCH-03',
            course: 'Neuromental deploma',
            completion: '50%',
            exercise: '0.00',
            quizes: '0.00',
            videos: '50%',
            attendance: '70%',
            status: 'completed',
            certificate: 'N/A',
            total: '20'

        },
    ]
    return (
        <div>
            <div className='flex items-center justify-between w-[90%] m-auto'>
                <div className='flex font-pop mt-10 gap-5'>
                    <select name="" id="" className='bg-white px-7 py-2 text-xl rounded-2xl'>
                        <option value="" selected>Course</option>
                    </select>
                    <select name="" id="" className='bg-white px-7 py-2 text-xl rounded-2xl'>
                        <option value="" selected>Teacher</option>
                    </select>
                </div>
                <div className='mt-10'>
                    <div className='flex items-center bg-white px-4 py-2 gap-2 rounded-3xl'>
                            <CiSearch className=" text-2xl" />
                            <input type="email" name="email" id="email" placeholder="Search" className="inline-block  font-pop border-none outline-none" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto  overflow-x-auto font-pop w-full via-gray-400">
                <table className="min-w-full w-full overflow-x-scroll bg-gray11 border-separate  border-spacing-y-4 rounded-lg my-4">
                    <thead>
                        <tr className='font-pop text-[#868686]'>
                            <th className="py-2 font-normal">Batch</th>
                            <th className="py-2 font-normal">Course</th>
                            <th className="py-2 font-normal">Completeion</th>
                            <th className="py-2 font-normal">Escercise</th>
                            <th className="py-2 font-normal">Quizes</th>
                            <th className="py-2 font-normal">Video</th>
                            <th className="py-2 font-normal">Attendance</th>
                            <th className="py-2 font-normal">Status</th>
                            <th className="py-2 font-normal">Certificate</th>
                            <th className="py-2 font-normal">Total</th>
                            <th className="py-2 font-normal"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((row, index) => (
                            <tr
                                key={index} className="space-x-2 bg-white my-2"
                                onClick={() => { navigate('/admin-dashboard/recentorders/orderdetail') }}
                            >
                                <td className="py-6 rounded-l-xl px-4">
                                    <div className='font-pop'>
                                        <div className='w-max'>{row.batch}</div>
                                    </div>
                                </td>
                                <td className="py-2 px-4 font-bold">
                                    <div className='w-max'>
                                        {row.course}</div>
                                </td>
                                <td className="py-2 px-4 font-bold">
                                    <div className='w-max'>
                                        {row.completion}
                                    </div>
                                </td>
                                <td className="py-2 px-4">
                                    <div className='w-max'>
                                        {row.exercise}
                                    </div>
                                </td>
                                <td className="py-2 px-4 font-bold">
                                    <div className='w-max'>
                                        {row.quizes}
                                    </div>
                                </td>
                                <td className="py-2 px-4">
                                    <div className='w-max'>
                                        {row.videos}
                                    </div>
                                </td>
                                <td className="py-2 px-4 font-bold">
                                    <div className='w-max'>
                                        {row.attendance}
                                    </div>
                                </td>
                                <td className="py-6 px-4">
                                    <div className={`${row.status == "new" ? 'border-2 bg-[#F4ECFE] text-[#8A39F2] border-[#8A39F2]' : row.status == "inprogress" ? 'border-2 bg-[#EBF4FE] text-[#3992F2] border-[#3992F2]' : ' border-2 border-[#63D577] rounded-r-lg rounded-l-lg font-pop text-[#63D577] w-22 pl-6  bg-[#EFFBF1]'} font-pop w-fit py-2 px-4 rounded-lg`}>
                                        <div className='w-max'>{row.status}</div>
                                    </div>
                                </td>
                                <td className="py-2 px-4 font-bold ">
                                    <div className='w-max'>
                                        {row.certificate}
                                    </div>
                                </td>
                                <td className="py-2 px-4 font-bold rounded-r-lg">
                                    <div className='w-max'>
                                        <p><IoDownloadOutline /></p>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Result