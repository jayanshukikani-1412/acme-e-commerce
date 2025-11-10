import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Welcome to the Acme Store",
};

const homepage = () => {
  return (
    <div>
      <h1>Acme Store</h1>
    </div>
  );
};

export default homepage;
