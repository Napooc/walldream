import { motion } from "framer-motion";
import sushiImg from "@/assets/wall-dream-sushi.jpg";
import pizzaImg from "@/assets/wall-dream-pizza.jpg";
import nailsImg from "@/assets/wall-dream-nails.jpg";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";

const galleryItems = [
  {
    id: "gallery-1",
    image: sushiImg,
    title: "Restauration Japonaise",
    category: "Restaurant",
  },
  {
    id: "gallery-2",
    image: pizzaImg,
    title: "Pizzeria Moderne",
    category: "Restaurant",
  },
  {
    id: "gallery-3",
    image: nailsImg,
    title: "Salon de Beauté",
    category: "Beauté & Bien-être",
  },
  {
    id: "gallery-4",
    image: sushiImg,
    title: "Espace Commercial",
    category: "Commerce",
  },
  {
    id: "gallery-5",
    image: pizzaImg,
    title: "Hôtel Boutique",
    category: "Hôtellerie",
  },
  {
    id: "gallery-6",
    image: nailsImg,
    title: "Spa & Wellness",
    category: "Beauté & Bien-être",
  },
];

const Gallery = () => {
  return (
    <section id="portfolio" className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6">
            Nos Réalisations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Découvrez comment nous transformons les espaces professionnels avec nos impressions murales sur mesure
          </p>
        </motion.div>

        <HoverSlider className="min-h-[500px] sm:min-h-[600px] place-content-center p-4 sm:p-6 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-evenly gap-6 sm:gap-8 md:gap-12">
            <div className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4 w-full lg:w-auto">
              {galleryItems.map((item, index) => (
                <TextStaggerHover
                  key={item.id}
                  index={index}
                  className="cursor-pointer text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tighter text-foreground hover:text-secondary transition-colors text-center lg:text-left"
                  text={item.title}
                />
              ))}
            </div>
            <HoverSliderImageWrap className="w-full sm:w-[90%] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              {galleryItems.map((item, index) => (
                <div key={item.id} className="w-full h-full">
                  <HoverSliderImage
                    index={index}
                    imageUrl={item.image}
                    src={item.image}
                    alt={item.title}
                    className="size-full object-cover"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              ))}
            </HoverSliderImageWrap>
          </div>
        </HoverSlider>
      </div>
    </section>
  );
};

export default Gallery;
