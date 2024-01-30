import React from "react";
import FoodItem, { FoodItemProps } from "../ui/food_item/FoodItem";

type OmeleggMenuProps = {
  foodItems: FoodItemProps[];
};

const OmeleggMenu: React.FC<OmeleggMenuProps> = ({ foodItems }) => {
  // const halfLength = Math.ceil(foodItems.length / 2);
  const firstColumnItems = foodItems.slice(0, 13);
  const secondColumnItems = foodItems.slice(13);

  return (
    <div className="block h-auto w-full flex-col justify-start border-2 border-barnWood">
      <div className="block text-left ">
        <h1 className="text-heading ml-[6rem] mt-[-3rem] table w-1/4 bg-eggWhite px-2 text-center text-4xl text-darkWood">
          Omeleggs <br /> Menu
        </h1>
      </div>
      <div className="flex w-full flex-col lg:flex-row">
        <div className="flex w-full flex-col lg:w-1/2">
          {firstColumnItems.map((item, index) => (
            <FoodItem
              key={index}
              name={item.name}
              price={item.price}
              description={item.description?.toLowerCase()}
            />
          ))}
        </div>
        <div className="flex w-full flex-col lg:w-1/2">
          {secondColumnItems.map((item, index) => (
            <FoodItem
              key={index}
              name={item.name}
              price={item.price}
              description={item.description?.toLowerCase()}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OmeleggMenu;
