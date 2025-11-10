import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the Acme Store",
};

// const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const homepage = async () => {
  // await delay(2000);
  return (
    <div>
      <h1>Acme Store</h1>
    </div>
  );
};

export default homepage;
