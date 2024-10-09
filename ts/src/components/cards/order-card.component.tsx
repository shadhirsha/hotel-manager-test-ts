import React from 'react'; 
import { Order } from '../../types/order.type';
import { SCircle, SCircleContent } from '../molecules/order-circle';

interface Props {
    type: string;
    data?: Order[];
    buttonText?: string;
    result: (d: object) => void
}

export const OrderCard: React.FC<Props> = ({
    type,
    data,
    buttonText,
    result,
}) => {
    const badgeColor = (txt: string) => {
        switch (txt) {
            case 'New':
                return 'red';
            case 'Active':
                return 'blue';
            default:
                return 'white';
        }
    }

    return (
        <div>
            <div className='d-flex gap-2 mb-2'>
                {type}
                <SCircle bgColor={badgeColor(type)}>
                    <SCircleContent>{data?.length}</SCircleContent>
                </SCircle>
            </div>

            {data?.map((i) =>
                <div className="shadow" key={i?.id}>
                    <div className="card-body">
                        <p className="card-text text-secondary">Order #{i?.id}</p>
                        <p className="card-title">{i?.space?.name} {i?.pricelist?.name}</p>
                        <div className='d-flex'>
                            <p className="card-text text-secondary">{i?.items?.length} items</p>
                            <ul>
                                <li>€ {Number(i?.items?.reduce((a, v) => a = a + (v?.price * v?.quantity), 0))?.toFixed(2)}</li>
                            </ul>
                        </div>
                        <div className='d-flex justify-content-between'>
                            <h5>{i?.location}</h5>
                            <button className='btn btn-primary' onClick={() => result(i)}>{buttonText} <span className="material-symbols-outlined align-middle">arrow_forward</span></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
