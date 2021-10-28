// this is similar to entity or model in c#
export interface Product {
  id: number
  name: string
  description: string
  price: number
  pictureUrl: string
  type?: string
  brand: string
  quantityInStock?: number
}
