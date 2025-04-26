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
