import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import claireImg from "@/assets/team/claire-martin.jpg";
import antoineImg from "@/assets/team/antoine-dupont.jpg";
import sophieImg from "@/assets/team/sophie-lambert.jpg";
import thomasImg from "@/assets/team/thomas-leroy.jpg";
import julienImg from "@/assets/team/julien-morel.jpg";
const teamMembers = [{
  name: "Claire Martin",
  role: "Assistante de direction",
  quote: "Rejoindre WALL DREAM, c'est participer à une aventure ambitieuse et inspirante. J'apprécie particulièrement la rigueur et la créativité de l'équipe. Chaque journée me permet de mettre mes compétences organisationnelles au service d'un projet qui a du sens.",
  image: claireImg
}, {
  name: "Antoine Dupont",
  role: "Directeur commercial",
  quote: "Rejoindre WALL DREAM a été une belle opportunité de contribuer à la croissance d'une entreprise dynamique. J'aime le challenge de développer nos ventes et d'élargir notre portefeuille clients. L'esprit d'équipe est au cœur de notre succès collectif.",
  image: antoineImg
}, {
  name: "Sophie Lambert",
  role: "Commerciale",
  quote: "Je suis ravie d'avoir intégré WALL DREAM. C'est une entreprise qui place vraiment le client au centre de ses préoccupations. J'apprécie la diversité des projets et la satisfaction de nos clients est une grande source de motivation.",
  image: sophieImg
}, {
  name: "Thomas Leroy",
  role: "Graphiste",
  quote: "Travailler chez WALL DREAM, c'est donner vie aux espaces par l'image. J'aime transformer une idée en création visuelle concrète, alliant esthétisme et technique. L'esprit d'équipe et la liberté artistique que j'ai trouvés ici stimulent ma créativité chaque jour.",
  image: thomasImg
}, {
  name: "Julien Morel",
  role: "Technicien d'installation",
  quote: "Ce que j'aime dans mon métier, c'est voir le résultat concret de notre travail sur les murs de nos clients. Chaque projet est unique et demande précision, méthode et sens du détail. Chez WALL DREAM, nous partageons la même exigence de qualité et la fierté du travail bien fait.",
  image: julienImg
}];
const TeamSection = () => {
  return <section className="py-32 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.8
      }} className="text-center mb-20">
          <motion.div initial={{
          scale: 0
        }} whileInView={{
          scale: 1
        }} viewport={{
          once: true
        }} className="inline-block mb-6">
            <span className="text-secondary text-sm font-bold tracking-wider uppercase bg-secondary/10 px-6 py-3 rounded-full">
              Notre Équipe
            </span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Les Talents Derrière
            <span className="block text-gradient-accent mt-2">Wall Dream</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une équipe passionnée et dévouée à transformer vos espaces en œuvres d'art uniques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => <motion.div key={member.name} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} className="group h-full">
              <div className="relative overflow-hidden rounded-3xl bg-card shadow-xl hover:shadow-2xl transition-all duration-500 h-full flex flex-col">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                
                {/* Image container with parallax effect */}
                <div className="relative h-80 overflow-hidden">
                  <motion.img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" whileHover={{
                scale: 1.1
              }} />
                  
                  {/* Floating quote icon */}
                  <motion.div initial={{
                opacity: 0,
                scale: 0
              }} whileInView={{
                opacity: 1,
                scale: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.3 + index * 0.1
              }} className="absolute top-6 right-6 w-12 h-12 bg-secondary/90 backdrop-blur-sm rounded-full flex items-center justify-center z-20">
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-20 p-8 flex-1 flex flex-col">
                  <motion.div initial={{
                opacity: 0,
                x: -20
              }} whileInView={{
                opacity: 1,
                x: 0
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.4 + index * 0.1
              }}>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-secondary transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-secondary font-semibold mb-4 text-sm uppercase tracking-wider">
                      {member.role}
                    </p>
                  </motion.div>

                  <motion.div initial={{
                opacity: 0
              }} whileInView={{
                opacity: 1
              }} viewport={{
                once: true
              }} transition={{
                delay: 0.5 + index * 0.1
              }} className="relative flex-1">
                    <div className="absolute -left-2 -top-2 text-6xl text-secondary/20 font-serif leading-none">
                      "
                    </div>
                    <p className="leading-relaxed pl-6 italic text-muted-foreground">
                      {member.quote}
                    </p>
                  </motion.div>

                  {/* Decorative element */}
                  <motion.div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" initial={{
                scaleX: 0
              }} whileInView={{
                scaleX: 0
              }} viewport={{
                once: true
              }} />
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default TeamSection;