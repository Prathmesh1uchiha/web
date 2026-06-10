import { Hero } from "../Components/Hero";
import { Categories } from "../Components/Categories";
import { ProductCard } from "../Components/ProductCard";
import { Testimonials } from "../Components/Testimonials";

export function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <ProductCard />
      <Testimonials />
    </>
  );
}