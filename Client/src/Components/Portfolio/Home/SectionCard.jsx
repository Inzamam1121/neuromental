import React from 'react'

const SectionCard = () => {
  return (
    <div>
      <div className='container mx-auto'>
      <div className=' grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 
       items-center justify-center'>
     
       <div className='flex flex-col gap-5 justify-center items-center'>
        <img src='../Images/sectioncard.png' alt='nothing' className='w-[30%] h-[40%]'/>
        <div className='font-pop font-semibold text-center'>
        OUR COMPETENCIES FOR YOUR <br/>SUCCESS
        </div>
        <div className='text-center font-pop text-[#73737B] w-[80%]'>
        The academy team exchanges information regularly and combines its  extensive  and  long-standing practical experience  with the various  areas of knowledge  from  brain research .
        </div>
       </div>
       
       <div className='flex flex-col gap-5 justify-center items-center'>
        <img src='../Images/sectioncardtwo.png' alt='nothing' className='mt-5 w-[30%] h-[60%]'/>
        <div className='font-pop font-semibold'>
        KNOWLEDGE CREATES A LEAD
        </div>
        <div className='text-center  font-pop text-[#73737B] w-[70%]'>
        We have summarized the latest findings in  brain research ,  neurodidactics  and  mental training  in NEUROMENTAL TRAINING for you and implemented them for practical application in training.
        </div>
       </div>
       
       <div className='flex flex-col gap-5 justify-center items-center'>
        <img src='../Images/sectioncardthree.png' alt='nothing' className='w-[30%] h-[60%]'/>
        <div className='font-pop font-semibold text-center'>
        FROM KNOWLEDGE TO PERSONAL<br/> EXPERIENCE
        </div>
        <div className='text-center  font-pop text-[#73737B] w-[70%]'>
        The best theories for building mental strength are useless if they are not put into practice.  Real learning can only come from you. We give you important impulses in your change process.
        </div>
       </div>

       </div>

      </div>
      <div className="py-12  mt-32 text-center font-semibold flex justify-center items-center text-3xl">
      PRESENCE | ONLINE | COMPACT<br/>
Training · Further training · Workshops
      </div>
    </div>
  )
}

export default SectionCard
