export type FoodItemProps = {
  name: string;
  price: string;
  description?: string;
};

function FoodItem({ name, price, description }: FoodItemProps) {
  return (
    <div className="flex h-auto w-full flex-col items-start justify-start gap-2.5 px-5 py-2.5">
      <div className="flex w-full items-center justify-between">
        <div
          className="text-left text-lg font-bold leading-normal text-darkWood
                        sm:text-xl md:text-center 2xl:text-2xl"
        >
          {name}
        </div>
        {/* Responsive text sizes for price */}
        <div
          className="text-md text-center font-bold leading-snug
                        text-darkWood sm:text-xl 2xl:text-2xl"
        >
          {price}
        </div>
      </div>
      {description && (
        <div className="flex w-full items-center justify-start">
          {/* Responsive text sizes for description */}
          <div
            className="text-left text-xs leading-[16.92px]
                          text-barnWood sm:text-xl 2xl:text-2xl"
          >
            {description}
          </div>
        </div>
      )}
    </div>
  );
}

export default FoodItem;
