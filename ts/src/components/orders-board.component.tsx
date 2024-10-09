import React, {useState, useEffect} from 'react';
import { Card } from './molecules/order-card';
import data from '../data/orders.json'
import { Order, OrderStatus } from '../types/order.type';


export const OrdersBoard: React.FC = () => {

  const items: Order[] = data;

  const [orders, setOrders] = useState<Order[]>([]);
  const [newOrders, setNewOrders] = useState<Order[]>([]);
  const [activeOrders, setActiveOrders] = useState<Order[]>([]);
  const [readyOrders, setReadyOrders] = useState<Order[]>([]);


  useEffect(() => {
    setOrders(items)
  }, [])

  useEffect(() => {
    setNewOrders(orders?.filter(i => i?.status === 'New'))
    setActiveOrders(orders?.filter(i => i?.status === 'Active'))
    setReadyOrders(orders?.filter(i => i?.status === 'Ready'))
  },[orders])

  const updateStatus = (status: OrderStatus) => {
    switch (status) {
      case "New":
          return ({status: 'Active'});
      case "Active":
          return ({status: 'Ready'});
      case "Ready":
          return ({status: 'Complete'});
      default:
          return({status})
    }
  }
  const orderChange = (data: any) => {
    const update = updateStatus(data?.status)
    setOrders(orders?.map((o) => o?.id === data?.id ? {...o, ...update} : o))
  }

  return (
    <span className='row' style={{ margin: 24 }}>
      <div className='col-4'>
        {newOrders && <Card
          type = 'New'
          data = {newOrders}
          buttonText = "Approve"
          result = {orderChange}
        />}
      </div>

      <div className='col-4'>
        {activeOrders && <Card
          type = 'Active'
          data = {activeOrders}
          buttonText = "Complete"
          result = {orderChange}
        />}
      </div>

      <div className='col-4'>
        {readyOrders && <Card
          type = 'Ready'
          data = {readyOrders}
          buttonText = "Ready"
          result = {orderChange}
        />}
      </div>
    </span>
  );
};
