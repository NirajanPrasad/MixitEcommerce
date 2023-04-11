import React from "react";
import { bags_1, tshirt, boots } from "../../assets/index";
import ProductCard from "./ProductCard";
import { productData } from "../../Constants";

const FeaturedProducts = () => {
  return (
    <section className="max-w-7xl mx-auto ">
      <div className="my-24 text-center">
        <h1 className="text-6xl mb-5 font-bold">Featured Products</h1>
        <p className="text-xl text-dimGrey">
          Discover trendy tops, stylish accessories in our latest collection.
          Elevate your style game now
        </p>
      </div>

      <div className="flex gap-5 flex-wrap  justify-center">
        {productData.map((data, index) => (
          <div key={data.id}>
            <ProductCard
              img={data.img}
              salePercentage={data.salePercentage && `-${data.salePercentage}%`}
              arrival={data.arrival}
              saleView={true}
            />

            <div className="mt-4">
              <h6 className="font-medium ">{data.title}</h6>
              <p className="text-red font-normal">
                ₹
                {Math.round(
                  data.price - data.price * (data.salePercentage / 100)
                )}
                <s
                  className={`text-black text-sm ml-1 ${
                    !data.salePercentage && "hidden"
                  }`}
                >
                  ₹{data.price}
                </s>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
