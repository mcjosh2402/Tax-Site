import React from 'react'
import Card from './Card'
const HomeCards = () => {
  return (
    <>
      <section className='py-5'>
        {/* <h2 className='text-3xl font-bold text-center text-(--dark-blue)'>Các khoản khấu trừ tiền lương</h2> */}
        <div className='grid m-5 text-center grid-cols-1 md:grid-cols-2 gap-8 rounded-lg'>
          <Card>
            <p>Giảm trừ gia cảnh: 15.500.000đ</p>
          </Card>

          <Card>
            <p>Người phụ thuộc: 620.000đ</p>
          </Card>
        </div>

        <div className='grid mx-3 text-center grid-cols-1 md:grid-cols-3 gap-8 rounded-lg'>
            <Card>
              <p>Bảo hiểm xã hội: 8%</p>
            </Card>

            <Card>
              <p>Bảo hiểm y tế: 1.5%</p>
            </Card>

            <Card>
              <p>Bảo hiểm thất nghiệp: 1%</p>
            </Card>
          </div>
      </section>
    </>
  )
}

export default HomeCards