export function Partner({ image, name, description }) {
  return (
    <div>
      <img
        className="w-[170px] h-[170px] md:w-[170px] md:h-[170px] bg-contain hover:translate-y-2 hover:shadow bg-center transition-all cursor-pointer lg:grayscale lg:hover:grayscale-0 rounded-[30px] shadow-shadowPartner mx-auto"
        src={image}
        alt="partner-image"
      />
      <h1 className="text-center text-lg md:text-[26px] cursor-pointer font-semibold mt-8">
        {name}
      </h1>
      <p className="text-xl text-justify -tracking-wider mx-6 md:w-3/4 pt-8 md:mx-auto">
        {description}
      </p>
    </div>
  );
}
