import React from 'react'
import { useState } from 'react'
import { FaMoneyBillAlt } from 'react-icons/fa'
const FormCards = () => {
    const [salary, setSalary] = useState() // default number for salary form

  return (
    <section>
        <div className='my-20 mx-auto w-3/4 lg:w-2/3 border'>
            <form className="mx-5 my-4 space-y-6">
                <div className="flex flex-col gap-2">
                    <label htmlFor="salary" className='text-base lg:text-xl font-bold'>Lương gộp hàng tháng (Gross)</label>
                    <div className="border rounded-xl flex w-full lg:w-2/3 items-center">
                        <FaMoneyBillAlt className="inline shrink-0 text-base lg:text-xl text-(--dark-blue) my-auto mx-2"/>
                        <input 
                            type="number" 
                            id="salary" 
                            className='rounded-lg flex-1 min-w-0 p-1 text-xl text-right focus:outline-none
                                       [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' // hide arrowkeys
                            value={salary}
                            onChange={(e) => setSalary(e.target.value)}
                        /> 
                        <span className="mx-2 inline-block shrink-0 pointer-events-none font-semibold opacity-50">VND</span>
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="baohiem" className='text-base lg:text-xl font-bold'>Mức lương đóng bảo hiểm</label>
                    
                    <div className="flex items-center gap-2">
                        <input 
                            type="radio" 
                            id="luongGross" 
                            name="baohiem" 
                            className='mr-2' 
                            defaultChecked
                        />
                        <label htmlFor='luongGross' className='text-base lg:text-xl'>Sử dụng lương gộp</label>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <input type="radio" id="luongCustom" name="baohiem" className='mr-2'/>
                        <label htmlFor='luongCustom' className='text-base lg:text-xl'>Khác</label>
                      </div>
                        <input 
                            type="number" 
                            className='border block rounded-lg p-1 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                        />
                    </div>
                </div>
                    
                <div className="flex flex-col gap-2">
                    <label className='text-base lg:text-xl font-bold mr-5'>Vùng kinh tế</label>
                    <select className='text-base lg:text-xl border rounded-lg p-1'>
                        <option>Vùng I</option>
                        <option>Vùng II</option>
                        <option>Vùng III</option>
                        <option>Vùng IV</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="salary" className='text-base lg:text-xl font-bold'>Số người phụ thuộc</label>
                    <input 
                        type="number" 
                        // id
                        className='border rounded-lg p-1 w-fit lg:w-auto [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <button 
                        className='text-base lg:text-xl font-bold bg-(--dark-blue) rounded-lg text-(--white) p-2 w-1/2 mx-auto'
                        type="submit">
                        Tính thuế TNCN
                    </button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default FormCards
