import React from 'react'

const Table = (props) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Sales Id:</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Sale Amount</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((item) => (
                    <tr key={item._id}>
                        <td>{item._id}</td>
                        <td>{item.productName}</td>
                        <td>{item.quantity}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table
