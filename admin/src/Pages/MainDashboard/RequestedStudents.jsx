import React from 'react'
import { FaEdit } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const RequestedStudents = () => {
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
                certificate: 'issue',
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
                certificate: 'rejected',
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
        <>
           <div className=" mx-auto  overflow-x-auto font-pop w-[90%] via-gray-400">
                                <table className="min-w-full w-full overflow-x-scroll bg-gray11 border-separate  border-spacing-y-4 rounded-lg my-4 font-pop">
                                        <thead>
                                                <tr className='font-pop text-[#868686]'>
                                                        <th className="py-2 font-normal">Student</th>
                                                        <th className="py-2 font-normal">Course</th>
                                                        <th className="py-2 w-fit font-normal">Completeion</th>
                                                        <th className="py-2 font-normal">Escercise</th>
                                                        <th className="py-2 px-2 font-normal">Quizes</th>
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
                                                                key={index} className="space-x-2 bg-white  font-pop w-fit"
                                                                onClick={() => { navigate('/Admin/report/reportdetails') }}
                                                        >
                                                                <td className="py-6 rounded-l-xl px-4">
                                                                        <div className='font-pop flex items-center gap-3 w-[100%] m-auto'>
                                                                                <img src="../../images/profile.png" alt="" className='w-[20%]' />
                                                                                <div className=''>Liam Ridley</div>
                                                                        </div>
                                                                </td>
                                                                <td className="py-1 px-2 ">
                                                                        <div className='w-max'>
                                                                                {row.course}</div>
                                                                </td>
                                                                <td className="py-2 px-2">
                                                                        <div className='w-max'>
                                                                                {row.completion}
                                                                        </div>
                                                                </td>
                                                                <td className="py-2 px-2">
                                                                        <div className='w-max'>
                                                                                {row.exercise}
                                                                        </div>
                                                                </td>
                                                                <td className="py-2 px-2 ">
                                                                        <div className='w-max'>
                                                                                {row.quizes}
                                                                        </div>
                                                                </td>
                                                                <td className="py-2 px-2">
                                                                        <div className='w-max'>
                                                                                {row.videos}
                                                                        </div>
                                                                </td>
                                                                <td className="py-2 px-2">
                                                                        <div className='w-max'>
                                                                                {row.attendance}
                                                                        </div>
                                                                </td>
                                                                <td className="py-6 px-4">
                                                                        <div className={`${row.status == "new" ? 'border-2 bg-[#F4ECFE] text-[#8A39F2] border-[#8A39F2]' : row.status == "inprogress" ? 'border-2 bg-[#EBF4FE] text-[#3992F2] border-[#3992F2]' : ' border-2 border-[#63D577] rounded-r-lg rounded-l-lg font-pop text-[#63D577] w-22 pl-6  bg-[#EFFBF1]'} font-pop w-fit py-2 px-2 rounded-lg`}>
                                                                                <div className='w-max'>{row.status}</div>
                                                                        </div>
                                                                </td>
                                                                <td className="py-2 px-4 font-pop">
                                                                <div className={`${row.certificate == "issue" ? 'border-2 bg-[#63D5773B] text-[#63D577] border-[#63D577]' : 'border-2 bg-[#FEF8EE] text-[#CC1F1F] border-[#CC1F1F]'} font-pop w-fit py-2 px-2 rounded-lg`}>
                                                                                <div className='w-max'>{row.certificate}</div>
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
        </>
    )
}
export default RequestedStudents