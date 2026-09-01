interface ProductCardProps {
  productName: string;
  productPrice: number;
  isAvailable: boolean;
}
export default function ProductCard({productName, productPrice, isAvailable}: ProductCardProps) {
  return (
    <div>
      <h3>{productName}</h3>
      <p>{productPrice}</p>
      <p>{isAvailable ? 'Available' : 'Not Available'}</p>
    </div>
  );
}