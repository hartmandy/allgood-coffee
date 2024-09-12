import hero from "../../public/hero.jpg";

export default function Hero() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <div className="col-span-1">
          <img
            src={hero}
            alt="All Good Coffee in Weaverville, NC"
            className="w-full h-auto rounded-r-lg"
          />
          <hr />
        </div>
        <div className="col-span-1 flex flex-col justify-center p-6 gap-3 sm:ml-3">
          <h1 className="text-4xl md:text-6xl text-stone-800 font-bold mb-4">
            C'mon in... it's Allgood!
          </h1>
          <p className="text-base md:text-lg">
            We are a family owned small business started in 2013. We got our
            start many years ago at our first shop, Sweetwater Coffeehouse in
            Sautee-Nacoochee, GA before selling the business and moving to
            Western North Carolina. Like many, we were drawn to this area by
            it’s natural beauty, and the warm welcoming, like minded people. We
            are very pleased to have a location in Weaverville, NC, and are
            enjoying becoming a part of the community!
          </p>
          <a
            href="#contact"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-stone-800 text-white px-4 py-2 rounded-md mt-4 hover:bg-stone-700 transition-colors w-[200px] inline-block text-center"
          >
            Come See Us
          </a>
        </div>
      </div>
      <hr />
    </>
  );
}
