import React from 'react'
import { useGetOrderByEmailQuery } from '../../redux/features/orders/ordersApi'
import { useAuth } from '../../context/AuthContext';
import './css/OrderPage.css';  // Import the CSS file for styling

const OrderPage = () => {
    const { currentUser} = useAuth()

    const { data: orders = [], isLoading, isError } = useGetOrderByEmailQuery(currentUser.email);
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error getting orders data</div>
    
    return (
        <div className='container'>
            <h2 className='header'>Your Orders</h2>
            {
                orders.length === 0 ? (<div>No orders found!</div>) : (<div>
                    {
                        orders.map((order, index) => (
                            <div key={order._id} className="order-item">
                                <p className='order-number'># {index + 1}</p>
                                <h2 className="order-id">Order ID: {order._id}</h2>
                                <p className="order-details">Name: {order.name}</p>
                                <p className="order-details">Email: {order.email}</p>
                                <p className="order-details">Phone: {order.phone}</p>
                                <p className="order-details">Total Price: ${order.totalPrice}</p>
                                <h3 className="address-header">Address:</h3>
                                <p className="address">{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                                <h3 className="product-header">Products Id:</h3>
                                <ul>
                                    {order.productIds.map((productId) => (
                                        <li key={productId}>{productId}</li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }
                </div>)
            }
        </div>
    )
}

export default OrderPage
