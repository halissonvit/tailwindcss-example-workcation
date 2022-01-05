import DestinationCard from "./components/DestinationCard";
import Logo from "./components/Logo";
import data from "./data/popularDestinations";

const Header = () => (
  <div className="grid lg:grid-cols-2 bg-gray-100 2xl:grid-cols-5">
    <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:px-12 lg:py-24 xl:mr-0 inline xl:py-48 2xl:col-span-2">
      <div className="xl:max-w-xl">
        <Logo />

        <img
          src="images/beach-work.jpeg"
          alt="Woman workcationing on the beach"
          className="mt-6 rounded-lg shadow-lg sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-center lg:hidden"
        />

        <h1 className="mt-6 text-2xl font-headline tracking-tight font-semibold text-gray-800 sm:mt-8 sm:text-4xl lg:text-3xl xl:text-4xl">
          You can work from anywhere.
          <br />
          <span className="text-brand">Take advantage of it.</span>
        </h1>

        <p className="mt-2 text-gray-500 sm:mt-4 text-xl">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation.
        </p>

        <div className="mt-4 sm:mt-6">
          <a
            href="#"
            className="bg-brand px-5 py-3 inline-block rounded-lg text-white shadow-lg uppercase tracking-wider font-semibold text-sm hover:shadow-lg hover:-translate-y-0.5 transform transition hover:bg-brand-light sm:text-base focus:outline-none focus:ring-4 active:bg-brand-dark active:translate-y-0.5"
          >
            Book your escape
          </a>
        </div>
      </div>
    </div>
    <div className="hidden relative lg:block 2xl:col-span-3">
      <img
        src="images/beach-work.jpeg"
        alt="Woman workcationing on the beach"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
    </div>
  </div>
);

const App = () => (
  <div>
    <Header />

    <div className="max-w-md sm:max-w-xl lg:max-w-6xl mx-auto px-8 lg:px-12 py-8">
      <h2 className="text-x1 text-gray-900">Popular destinations</h2>

      <p className="mt-2 text-gray-600">
        A selection of great work-friendly cities with lots to see and explore.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {data.map((destination) => (
          <DestinationCard {...destination} key={destination.city} />
        ))}
      </div>
    </div>
  </div>
);

export default App;
