import Marquee from "@/components/magicui/marquee";
import { Testimonial } from "@/lib/api/testimonialsApi";
import {
  FeedbackAvatar,
  FeedbackCard,
  FeedbackAddModal,
} from "@/components/landing/userFeedBack";

interface FeedbackProps {
  testimonials: Testimonial[];
  onTestimonialAdded: () => void;
  error?: string; // Ajouter un prop d'erreur optionnel
}

export const Feedback: React.FC<FeedbackProps> = ({
  testimonials,
  onTestimonialAdded,
  error,
}) => {
  return (
    <section
      id="testimonials"
      className="relative xl:container pt-4 pb-20 px-2 sm:px-6 transition-p ease duration-200"
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold pb-4 bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text transition-text ease duration-300">
        Recommandations & Avis Clients
      </h2>
      <h3 className="mx-auto lg:w-10/12 text-center text-secondary font-medium text-base md:text-lg lg:text-xl mb-4 transition-text ease duration-300">
        Découvrez les recommandations de professionnels avec qui j'ai travaillé
        et les avis de mes clients.
      </h3>

      {/* Affichage conditionnel selon l'état de l'erreur et des données */}
      {error ? (
        // Si l'API n'est pas accessible
        <div className="flex flex-col items-center justify-center min-h-[200px] text-center">
          <p className="text-lg text-muted-foreground mb-4 text-red-600">
            {`Nous avons rencontré un problème pour charger les témoignages. Veuillez réessayer plus tard !`}
          </p>
        </div>
      ) : testimonials && testimonials.length === 0 ? (
        // Si l'API est accessible mais qu'il n'y a pas de données
        <div className="text-center text-xl text-muted-foreground pt-4 pb-8">
          <p className="mb-4">{`Il n'y a pas encore d'avis. Soyez le premier à en laisser un !`}</p>
          <FeedbackAddModal onTestimonialAdded={onTestimonialAdded} />
        </div>
      ) : (
        // Si l'API est accessible et qu'il y a des données
        <>
          <div className="absolute inset-0 pointer-events-none">
            <div className="shadow"></div>
          </div>

          {/* Utilisation du Marquee ou grille en fonction de la taille de l'écran */}
          <div className="relative">
            {/* Affichage pour les grands écrans */}
            <div className="hidden lg:block">
              <Marquee pauseOnHover className="[--duration:40s]">
                {testimonials.map((testimonial) => (
                  <FeedbackCard key={testimonial.id} {...testimonial} />
                ))}
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:40s]">
                {testimonials.map((testimonial) => (
                  <FeedbackCard key={testimonial.id} {...testimonial} />
                ))}
              </Marquee>
            </div>

            {/* Affichage en grille pour les écrans plus petits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden justify-items-center px-4">
              {testimonials.map((testimonial) => (
                <FeedbackCard key={testimonial.id} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Section pour ajouter un témoignage et affichage de l'avatar */}
          <div className="flex flex-col items-center justify-center pt-8 relative z-10 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <FeedbackAddModal onTestimonialAdded={onTestimonialAdded} />
            <FeedbackAvatar testimonials={testimonials} />
          </div>
        </>
      )}
    </section>
  );
};
