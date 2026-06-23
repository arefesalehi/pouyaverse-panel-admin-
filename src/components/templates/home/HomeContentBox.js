
'use client'
import { useTranslation } from 'react-i18next'

const HomeContentBox = ({ src, title, name }) => {

  const { t } = useTranslation()


  return (
    <>
      <div className='w-[280px] h-[70px] mb-5 shadow rounded-[10px] bg-white flex justify-between items-center rtl'>
        <div><img className='w-[60px] h-[50px] p-1' src={src} /></div>
        <div className='flex flex-col p-2' >
          <span>{t(title)}</span>
          <span className='text-center'>{t(name)}</span>
        </div>
      </div>
    </>
  )
}

export default HomeContentBox