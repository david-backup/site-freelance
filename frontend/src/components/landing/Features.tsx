import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PrimaryButton } from "../shared/PrimaryButton";
import { LuInfo } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

interface FeatureProps {
  title: string;
  description: string;
  link: string;
}

const features: FeatureProps[] = [
  {
    title: "Sites web sur mesure",
    description:
      "Nous créons des sites web uniques, conçus spécifiquement pour répondre aux besoins de votre entreprise. Chaque projet est réalisé avec un souci du détail, garantissant une interface utilisateur intuitive et un design qui reflète parfaitement votre identité de marque.",
    link: "/services/developpement-sites-vitrine",
  },
  {
    title: "Hébergement et SEO",
    description:
      "Nos solutions d'hébergement sécurisées et performantes s'associent à des stratégies SEO avancées pour garantir que votre site est non seulement en ligne, mais aussi facilement trouvé par vos clients. Maximisez votre visibilité en ligne avec nos services d'optimisation pour les moteurs de recherche.",
    link: "/services/refonte-sites",
  },
  {
    title: "Performance et optimisation",
    description:
      "Nous optimisons la vitesse et les performances de votre site pour offrir une expérience utilisateur fluide et rapide. Avec des temps de chargement réduits et une architecture technique de qualité, votre site sera prêt à exceller dans un environnement numérique concurrentiel.",
    link: "/services/analyse-performance",
  },
];

const featureList: string[] = [
  "Sites web sur mesure",
  "Création de sites web",
  "Refonte de sites web",
  "Design Responsive",
  "Fonctionnalités Riches",
  "Méthode Agile",
  "SEO",
  "Hébergement",
];

export const Features = () => {
  const navigate = useNavigate();
  const handleLearnMoreClick = (link: string) => {
    navigate(link); // Utilisation de `navigate` pour la navigation
  };
  return (
    <section id="features" className="container py-14">
      <h2 className="text-4xl bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text  font-bold text-center mb-4">
        Nos services
      </h2>

      <p className="text-xl leading-8 text-black/80 dark:text-white text-center mb-8 mx-auto max-w-4xl">
        Découvrez nos services conçus pour répondre aux besoins spécifiques de
        votre entreprise. Chaque service est conçu avec une attention
        particulière aux détails et à l'efficacité.
      </p>

      <div className="mx-auto grid w-full justify-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ title, description, link }: FeatureProps) => (
          <Card
            key={title}
            className="relative flex flex-col w-full max-w-[400px] overflow-hidden rounded-2xl border border-primary p-6 text-primary dark:text-white min-h-[400px] shadow-lg"
          >
            <div className="flex-grow">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-semibold mb-4">
                  {title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-base text-center leading-relaxed text-black/70 dark:text-white">
                  {description}
                </p>
              </CardContent>
            </div>
            <CardFooter className="flex justify-center mt-6">
              <PrimaryButton
                variant="primary"
                onClick={() => handleLearnMoreClick(link)}
              >
                <LuInfo className="mr-2 h-6 w-6" />
                En Savoir Plus
              </PrimaryButton>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm px-4 py-2 bg-primary text-white rounded-lg shadow-md"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>
    </section>
  );
};
