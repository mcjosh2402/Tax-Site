import React from 'react'

const CalculationForm = () => {
    return (
        <section>
            <div className="my-15 mx-auto w-3/4 lg:w-2/3 border">
                <h3 className="text-xl font-bold">Kết quả tính thuế TNCN</h3>
                <div className="table mt-4 w-full">
                    <div className="table-header-group">
                        <div className="table-row">
                            <div className="table-cell">Chi tiết</div>
                            <div className="table-cell">Số tiền</div>
                        </div>
                    </div>
                    <div className="table-row-group">
                        <div className="table-row">
                            <div className="table-cell">Bảo hiểm xã hội</div>
                            <div className="table-cell">...</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell">Bảo hiểm y tế</div>
                            <div className="table-cell">...</div>
                        </div>
                        <div className="table-row">
                            <div className="table-cell">Bảo hiểm thất nghiệp</div>
                            <div className="table-cell">...</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )   
}

export default CalculationForm
