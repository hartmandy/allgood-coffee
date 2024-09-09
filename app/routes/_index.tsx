import type { MetaFunction } from "@remix-run/node";
import CoffeeSection from "~/components/coffee";
import Contact from "~/components/contact";
import Footer from "~/components/footer";
import Hero from "~/components/hero";

export const meta: MetaFunction = () => {
  return [
    { title: "All Good Coffee" },
    { name: "description", content: "All Good Coffee in Weaverville, NC" },
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <CoffeeSection />
      <Contact />
      <Footer />
    </div>
  );
}
