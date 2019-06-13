
export interface IOrder {
    id: number;
    companyId: number;
    created: string;
    createdBy: string;
    paymentMethod: string;
    totalPrice: number;
    status: number;
    orderRows: IOrderRow[];
}

export interface IOrderRow {
    productId: number;
    Amount: number;
}

export interface IExtendedOrders {
    order: IOrder;
    movieName: string[];
}