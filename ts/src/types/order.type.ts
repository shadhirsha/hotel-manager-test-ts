export enum OrderStatus {
  New = 'New',
  Active = 'Active',
  Ready = 'Ready',
  Completed = 'Completed',
}

export interface Order {
  id: number;
  status: string;
  pricelist: {
    name: string;
  };
  space: {
    name: string;
  };
  items: {
    price: number;
    quantity: number;
  }[];
  location: string;
}
