'use client'

import ProductCard from './Components/ProductCard';
import ContentCard from './Components/ContentCard';

const productListData = [
  {
    imageURL: "./img/sample-image.webp",
    badge: "Summer Sale",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    rating: "4.5",
    alt: "Imagem do produto",
    oldPrice: "100",
    price: "49,90",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: "bi bi-fire",
    cta: "50% Off!"
  },
  {
    imageURL: "./img/mockup-2.webp",
    badge: "New formulation!",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    rating: "4.5",
    icon: "bi bi-basket2-fill",
    alt: "Imagem do produto",
    price: "129,90",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "Buy now!"
  },
  {
    imageURL: "./img/mockup-1.webp",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    alt: "Imagem do produto",
    oldPrice: "100",
    price: "50",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: "bi bi-fire",
    cta: "50% Off!"
  },
  {
    imageURL: "./img/mockup-4.webp",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    rating: "4.5",
    alt: "Imagem do produto",
    price: "399,90",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "Buy now!"
  },
  {
    imageURL: "./img/mockup-3.webp",
    badge: "Best anti-aging effect",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    rating: "4.5",
    alt: "Imagem do produto",
    oldPrice: "130",
    price: "89,90",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    icon: "bi bi-fire",
    cta: "30% Off!"
  },
  {
    imageURL: "./img/mockup-6.webp",
    badge: "Complete skincare",
    title: "This product short description intentionally exceeds its container size to show the automatic line break behavior",
    rating: "4.5",
    alt: "Imagem do produto",
    oldPrice: "800",
    price: "689,90",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    cta: "Buy now!"
  },
]

export default function Home() {
  return (

    <body>
      <header>

        <div className="w-screen bg-sky-900 py-12 px-10 bg-[url('../public/img/bg-texture.webp')] bg-auto">
          <h1 className="text-white font-medium text-3xl text-center uppercase tracking-tight">
            Just a React + Tailwind CSS Lab!
          </h1>
        </div>

        <div className="mx-2 mt-8 p-6 container mx-auto">
          <p className="text-xl text-center">Understanding how things runs under <span className="font-bold">React with Tailwind</span>.</p>
          <p className="py-4 text-center">This project aims something quite simple, I wanna understand how to set up properly the development environment with tools and frameworks. After that, I`&aposll be able to work on evolving all the logical aspect and project visuals maybe adding some new sample blocks over the time as I try to enjoy the ride.</p>
        </div>

      </header>

      <main className="px-6">
        <section className="container grid grid-cols md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 mx-auto mb-16">

          {
            productListData.map(function (item, index) {
              return (
                <ProductCard
                  key={index}
                  imageURL={item.imageURL}
                  alt={item.alt}
                  badge={item.badge}
                  title={item.title}
                  rating={item.rating}
                  description={item.description}
                  oldPrice={item.oldPrice}
                  price={item.price}
                  icon={item.icon}
                  cta={item.cta}
                />
              )
            })
          }
        </section>

        <section>
          <section id="lorem-ipsum" class="container lg mx-auto mt-14 mb-10">
            <div>
              <h2 class="text-4xl text-center uppercase mt-16 mb-10 font-semibold">Here`&aposs another section!</h2>
            </div>
            <div class="flex flex-col lg:flex-row lg:mx-auto lg:space-x-8 lg:space-y-0 gap-5">
              <div>
                <h3>Some title</h3>
                <p class="excerpt-lg"><span class="font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> Lorem Ipsum has been the industry`&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              </div>

              <div>
                <h3>Some title</h3>
                <p class="excerpt-lg"><span class="font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> Lorem Ipsum has been the industry`&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              </div>

              <div>
                <h3>Some title</h3>
                <p class="excerpt-lg"><span class="font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> Lorem Ipsum has been the industry`&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </p>
              </div>
            </div>
          </section>
        </section>

        <section id="content" class="">
          <div class="container grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto pt-8 pb-24">
            <ContentCard src="./img/sample-image.webp" title="This is the content title">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </ContentCard>
            <ContentCard src="./img/sample-image.webp" title="This is the content title">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </ContentCard>
            <ContentCard src="./img/sample-image.webp" title="This is the content title">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`&aposs standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </ContentCard>
          </div>
        </section>

      </main>

      <footer class="w-screen bg-sky-900 py-11 px-10 bg-[url('/src/img/bg-texture.webp')]  bg-auto">
        <p class="text-center text-white text-lg">@AllRox. Thanks for watching!</p>
      </footer>

    </body>

  );
}
