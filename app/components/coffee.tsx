import latte from "/coffee.jpg";
import shop from "/shop.jpg";
import beans from "/beans.jpg";
import dynamite from "/dynamite.webp";
import mountainair from "/mountainair.png";
import coop from "/coop.png";

export default function CoffeeSection() {
  return (
    <>
      <section id="coffee" className="p-16">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="lg:w-1/3 mb-6 flex pt-10">
            <h2 className="max-w-md text-3xl md:text-4xl lg:text-5xl font-medium">
              Love the Bean. Love the Craft. Love the People!
            </h2>
          </div>
          <div className="lg:w-2/3 flex flex-col sm:flex-row group/cards gap-4 sm:gap-0">
            <div className="w-full sm:w-2/3 transition-all duration-300 ease-in-out sm:peer-hover:w-1/4 sm:pr-4">
              <div className="rounded-2xl h-[590px] overflow-hidden relative">
                <img
                  src={latte}
                  alt="Latte"
                  className="w-full h-full object-cover"
                />
                <div className="flex h-full flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent absolute inset-0 select-none">
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium sm:font-thin sm:[writing-mode:vertical-lr] sm:group-hover/cards:block sm:hidden">
                    Premium Coffee & Espresso
                  </h3>
                  <p className="text-white text-lg sm:text-xl lg:text-2xl font-thin opacity-100 sm:group-hover/cards:opacity-0 transition-opacity duration-150 ease-in-out sm:max-w-96 sm:absolute">
                    Our passion makes us strive to bring you the best cup, every
                    time.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/4 transition-all duration-300 ease-in-out flex-shrink-0 sm:hover:w-1/2 sm:px-4 group">
              <div className="rounded-2xl h-[590px] overflow-hidden relative">
                <img
                  src={beans}
                  alt="Coffee Beans"
                  className="w-full h-full object-cover"
                />
                <div className="flex h-full flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent absolute inset-0 select-none">
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium sm:font-thin sm:[writing-mode:vertical-lr] sm:group-hover:hidden">
                    Locally Roasted Beans
                  </h3>
                  <p className="text-white text-lg sm:text-xl lg:text-2xl font-thin sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-150 ease-in-out sm:max-w-96 sm:absolute">
                    We choose local roasters that source their beans
                    responsibly.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/4 transition-all duration-300 ease-in-out flex-shrink-0 sm:hover:w-1/2 sm:pl-4 group">
              <div className="rounded-2xl h-[590px] overflow-hidden relative">
                <img
                  src={shop}
                  alt="Coffee Shop"
                  className="w-full h-full object-cover"
                />
                <div className="flex h-full flex-col justify-end p-4 bg-gradient-to-t from-black to-transparent absolute inset-0 select-none">
                  <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-medium sm:font-thin sm:[writing-mode:vertical-lr] sm:group-hover:hidden">
                    Family Owned & Operated
                  </h3>
                  <p className="text-white text-lg sm:text-xl lg:text-2xl font-thin sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-150 ease-in-out sm:max-w-96 sm:absolute">
                    We’re a local, family owned Mom & Pop shop. Come in and say
                    hello!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr />
      <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 my-6">
        <img
          src={dynamite}
          alt="Dynamite Roasters Logo"
          className="h-20 w-auto mb-4 md:mb-0"
        />
        <img
          src={mountainair}
          alt="Mountain Air Logo"
          className="h-20 w-auto mb-4 md:mb-0"
        />
        <img
          src={coop}
          alt="Cooperative Logo"
          className="h-20 w-auto mb-4 md:mb-0"
        />
      </div>
      <hr />
    </>
  );
}
