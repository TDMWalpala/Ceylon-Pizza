import Header from "@/components/layout/Header"
import Hero from "@/components/layout/Hero"
import HomeMenu from "@/components/layout/HomeMenu"
import SectionHeader from "../components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <HomeMenu />
      <section className="my-16 text-center">
        <SectionHeader mainHeader={'About us'} subHeader={'our story'} />
        <div className="flex flex-col max-w-xl gap-4 mx-auto mt-4 text-gray-500">
          <p>Welcome to Ceylon Pizza, where passion for pizza meets culinary excellence. Our journey began with a simple goal: to create a haven for pizza lovers, offering a unique blend of tradition and innovation.</p>
          <p>At Ceylon Pizza, we believe in crafting more than just pizzas; we create experiences. Our chefs are dedicated to using the freshest, highest-quality ingredients to bring you mouthwatering pizzas that ignite your taste buds.</p>
          <p>What sets us apart is our commitment to authenticity. Inspired by the rich culinary heritage of Ceylon, we infuse traditional flavors into every pizza, creating a symphony of taste that reflects our roots and passion for good food.</p>
          <p>But Ceylon Pizza is more than a place to enjoy a great meal; it's a community. Whether you're dining in, ordering online, or grabbing a quick slice on the go, we strive to make every interaction with us a memorable one.</p>
          <p>Thank you for being a part of our story. We look forward to serving you the finest pizzas made with love and a dash of Ceylonese charm.</p>
        </div>
      </section>
      <section className="my-8 text-center">
        <SectionHeader subHeader={'Don\'t hesitate'} mainHeader={'Contact us'} />
        <div className="grid grid-cols-3 gap-2">
          <p><strong>Visit Us:</strong><br />
            123 Pizza Street,<br></br>
            Colombo, Ceylon</p>

          <p><strong>Call Us:</strong><br />
            Phone: +94 (111) 123-4567</p>

          <p><strong>Email Us:</strong><br />
            Email: info@ceylonpizza.com</p>
        </div>
        
      </section>
      <footer className="p-2 mt-16 text-center text-gray-500 border-t">
        &copy; 2023 all rights reserved
      </footer>
    </>
  )
}
