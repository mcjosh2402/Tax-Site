import React from 'react'

const FormCards = () => {
  return (
    <section>
        <div className='my-5 mx-auto w-3/4 md:w-1/2 border'>
            <form className="mx-5 my-4 space-y-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="salary" className='text-sm md:text-xl font-bold'>Lương gộp hàng tháng (Gross)</label>
                    <input type="number" id="salary" className='border rounded-lg p-1 w-fit md:w-auto'></input>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="baohiem" className='text-sm md:text-xl font-bold'>Mức lương đóng bảo hiểm</label>
                    
                    <div className="flex items-center gap-2">
                        <input type="radio" id="luongGross" name="baohiem" className='mr-2' defaultChecked></input>
                        <label htmlFor='luongGross' className='text-sm md:text-xl'>Sử dụng lương gộp</label>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <input type="radio" id="luongCustom" name="baohiem" className='mr-2'></input>
                        <label htmlFor='luongCustom' className='text-sm md:text-xl'>Khác</label>
                      </div>
                        <input type="number"className='border block rounded-lg p-1'></input>
                    </div>
                </div>
                    
                <div className="flex flex-col gap-2">
                    <label className='text-sm md:text-xl font-bold mr-5'>Vùng kinh tế</label>
                    <select className='text-sm md:text-xl border rounded-lg p-1'>
                        <option>Vùng I</option>
                        <option>Vùng II</option>
                        <option>Vùng III</option>
                        <option>Vùng IV</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="salary" className='text-sm md:text-xl font-bold'>Số người phụ thuộc</label>
                    <input type="number" id="salary" className='border rounded-lg p-1 w-fit md:w-auto'></input>
                </div>
            </form>
        </div>
    </section>
  )
}

export default FormCards
