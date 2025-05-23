export interface Chart {
  month: string;
  sales: number;
  profit: number;
  orders: number;
  id: string;
}

export interface IProduct {
  title: string;
  price: number;
  count: number;
  img: string;
  popularity: number;
  sale: number;
  colors: number;
  description: string;
  id: string;
}

export interface IProductForm {
  nameProduct: string;
  priceProduct: number;
  countProduct: number;
  addressImageProduct: string;
  popularityProduct: number;
  saleProduct: number;
  coloringProduct: number;
  captionProduct: string;
}

export interface IAddProductForm {
  nameProduct: string;
  priceProduct: number;
  countProduct: number;
  imageProduct: string;
  popularityProduct: number;
  saleProduct: number;
  colorProduct: number;
  descProduct: string;
}

export interface IUser {
  firstname: string
  lastname: string
  username: string
  password: string
  phone: number
  city: string
  email: string
  address: string
  score: number
  id: string
}


export interface IOrder {
  id: string
  name: string
  location: string
  count: number
  title: string
  src: string
  price: number
  userName: string
  status: "success" | "pending" | "cancel"
}

export interface IOrderForm {
  nameOrder: string
  locationOrder: string
  countOrder: number
  statusOrder: "success" | "pending" | "cancel"
}


export interface IAdmin {
  id: string,
  username:string, 
  password: string,
  token : string
}
