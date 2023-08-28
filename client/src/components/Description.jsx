const Description = () => {
  return (
    <div className="p-6 space-y-4">
      <span className="font-bold text-sm text-orange">SNEAKERS COMPANY</span>
      <h2 className="font-bold text-3xl">Fall Limited Edition Sneakers</h2>
      <p>
        Collections Men Women About Contact Sneaker Company Fall Limited Edition
        Sneakers These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they’ll withstand
        everything the weather can offer
      </p>
      <div className="flex items-center justify-between">
        <p className="font-bold text-2xl flex items-center">
          $125.00{" "}
          <span className="text-orange bg-pale-orange ml-4 p-1 text-sm my-auto">
            50%
          </span>
        </p>
        <span className="text-grayish-blue line-through">$250.00</span>
      </div>
    </div>
  );
};
export default Description;
