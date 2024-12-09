import ProductDetails from "../components/productdetail/productdetaail";
import { ProductDetailComponent } from "../components/productdetail/productdropdown";
import Customer from "../components/productdetail/productreviews";
import YouMayLike from "../components/productdetail/productyoulike";

export default function ProductDetail() {
  return (
  <div className="max-w-[1440px] max-h-full flex-grow justify-start items-center">
   <ProductDetailComponent/>
   <ProductDetails/>
   <Customer/>
   <YouMayLike/>
  </div>
  );
}