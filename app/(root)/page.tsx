import { Metadata } from "next";
import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.action";
import { TProduct } from "@/types";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the Acme Store",
};

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const homepage = async () => {
  // const products = sampleData?.products as TProduct[];
  const latestProducts = await getLatestProducts();
  // await delay(2000);
  return (
    <>
      <ProductList
        data={latestProducts as unknown as TProduct[]}
        title="Newest Arrivals"
      />
    </>
  );
};

export default homepage;
