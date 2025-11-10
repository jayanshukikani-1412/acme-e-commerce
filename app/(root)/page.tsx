import { Metadata } from "next";
import sampleData from "@/db/sample-data";
import ProductList, {
  TProduct,
} from "@/components/shared/product/product-list";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the Acme Store",
};

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const homepage = async () => {
  const products = sampleData?.products as TProduct[];
  // await delay(2000);
  return (
    <>
      <ProductList data={products} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default homepage;
