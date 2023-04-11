import {
  PrimaryNavigation,
  SecondaryNavigation,
  Hero,
  FeaturedProducts,
  Services,
  Footer,
} from "./Components/index";

function App() {
  return (
    <div className="w-full">
      <SecondaryNavigation />
      <PrimaryNavigation />
      <Hero />
      <FeaturedProducts />
      <Services />
      <Footer />
    </div>
  );
}

export default App;
