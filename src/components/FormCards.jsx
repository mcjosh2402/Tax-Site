import React from 'react'
import { useState } from 'react'
import { FaMoneyBill, FaUserGroup } from "react-icons/fa6";

const FormCards = () => {
    const [salary, setSalary] = useState("")              // default value
    const [insurance, setInsurance] = useState("")
	const [dependant, setDependant] = useState("")
    const [isEnabled, setIsEnabled] = useState(false)

    const thousandSeparator = (setValue) => (e) => {
      const input = e.target.value.replace(/\D/g, '')
      const formatted = input === '' ? '' : Number(input).toLocaleString()
      setValue(formatted);
    }

	return (
		<section>
			<div className='my-15 mx-auto w-3/4 lg:w-2/3 border'>
				<form className="mx-5 my-4 space-y-6" autoComplete="off">
					{/* Salary input */}
					<div className="flex flex-col gap-2 items-center">
						<label htmlFor="salary" className='text-base lg:text-xl font-bold'>Lương gộp hàng tháng (Gross)</label>
						<div className="border rounded-lg flex w-full lg:w-1/2 items-center">
							<FaMoneyBill className="inline shrink-0 text-base lg:text-xl text-(--dark-blue) my-auto mx-2"/>
							<input 
								type="text" 
								id="salary" 
								className='rounded-lg flex-1 min-w-0 p-1 text-xl text-right focus:outline-none
										[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' // hide arrowkeys
								value={salary}
								onChange={thousandSeparator(setSalary)}
							/> 
							<span className="mx-2 inline-block shrink-0 pointer-events-none font-semibold opacity-50">VND</span>
						</div>
					</div>

					{/* Insurance fields */}
					<div className="flex flex-col gap-2 items-center">
						<label htmlFor="baohiem" className='text-base lg:text-xl font-bold'>Mức lương đóng bảo hiểm</label>
					
						<div className="flex items-center gap-2">
							<input 
								type="radio" 
								id="luongGross" 
								name="baohiem" 
								className='mr-2 accent-(--dark-blue)' 
								onChange={(e) => {setIsEnabled(!isEnabled)}}
								defaultChecked
							/>
							<label htmlFor='luongGross' className='text-base lg:text-xl'>Sử dụng lương gộp</label>
						</div>
						
							<div className="flex items-center gap-2">
								<input 
									type="radio" 
									id="luongCustom" 
									name="baohiem" 
									className='mr-2 accent-(--dark-blue)'
									onChange={(e) => {setIsEnabled(!isEnabled)}}
								/>
								<label htmlFor='luongCustom' className='text-base lg:text-xl'>Khác</label>
							</div>

							<div className={`border rounded-lg flex w-full lg:w-1/2 items-center
								transition ${!isEnabled ? "bg-(--gray) opacity-70 pointer-events-none select-none" : ""}`} // toggle div on and off
							>      
								<FaMoneyBill className="inline shrink-0 text-base lg:text-xl text-(--dark-blue) my-auto mx-2"/>
								<input 
									type="text" 
									id="insurance" 
									disabled={!isEnabled}
									className='rounded-lg flex-1 min-w-0 p-1 text-xl text-right
											focus:outline-none
											[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' // hide arrowkeys
									value={insurance}
									onChange={thousandSeparator(setInsurance)}
								/> 
								<span className="mx-2 inline-block shrink-0 pointer-events-none font-semibold opacity-50">VND</span>
							</div>
					</div>
					
					{/* Vung kinh te */}
					<div className="flex flex-col gap-2 items-center">
						<label className='text-base lg:text-xl font-bold mr-5'>Vùng kinh tế</label>
						<select className='text-base lg:text-xl border rounded-lg p-1 w-full lg:w-1/2 focus:outline-none'>
							<option>Vùng I</option>
							<option>Vùng II</option>
							<option>Vùng III</option>
							<option>Vùng IV</option>
						</select>
					</div>

					{/* Nguoi phu thuoc */}
					<div className="flex flex-col gap-2 items-center">
						<label htmlFor="salary" className='text-base lg:text-xl font-bold'>Số người phụ thuộc</label>
						<div className="border rounded-lg flex w-full lg:w-1/2 items-center">
							<FaUserGroup className="inline shrink-0 text-base lg:text-xl text-(--dark-blue) my-auto mx-2"/>
							<input 
								type="number" 
								id="salary" 
								className='rounded-lg flex-1 min-w-0 p-1 text-xl text-right focus:outline-none
										[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none' // hide arrowkeys
								value={dependant}
								onChange={(e) => setDependant(e.target.value)}
							/> 
							<span className="mx-2 inline-block shrink-0 pointer-events-none font-semibold opacity-50">Người</span>
						</div>
					</div>
					
					{/* Calculation button */}
					<div className="flex flex-col gap-2">
						<button 
							className='text-base lg:text-xl font-bold bg-(--dark-blue) rounded-lg text-(--white) p-2 w-fit lg:w-1/2 mx-auto'>
							Tính thuế TNCN
						</button>
					</div>
				</form>
			</div>
		</section>
	)
}

export default FormCards
