import { ContactForm } from "@/components/contact/ContactForm";
import { SocialIcons, GoogleCalendarModal } from "@/components/shared";

import { contactInfo } from "@/config/data/contactAndLegalData";
import { SiteFooter, SiteHeader } from "@/components/layout";

const ContactPage = () => {
  return (
    <div className="bg-background flex flex-col min-h-screen">
      <SiteHeader />
      <div className="flex-grow flex items-center justify-center p-6">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="text-4xl font-bold mb-4 text-center text-primary">
            Contactez-nous
          </h1>
          <p className="text-center text-muted-foreground mb-4">
            Nous serions ravis de discuter de votre projet. Veuillez remplir le
            formulaire ci-dessous et nous vous répondrons dans les plus brefs
            délais.
          </p>
          <div className="bg-card p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-start space-y-8 md:space-y-0 md:space-x-16 relative z-10">
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold">Discutons ! ! !</h2>
              <p className="text-muted-foreground">
                Vous avez une grande idée ou une marque à développer et avez
                besoin d'aide ? Alors contactez-nous, nous serions ravis d'en
                entendre parler et de vous aider.
              </p>

              {/* Utilisation de la boucle pour générer les détails de contact */}
              {contactInfo.map((detail, index) => {
                const IconComponent = detail.icon;
                return (
                  <div key={index} className="flex items-center">
                    <IconComponent className="w-8 h-8 text-primary mr-4" />
                    <span className="text-lg text-muted-foreground">
                      {detail.text}
                    </span>
                  </div>
                );
              })}
              <div>
                <h3 className="text-lg font-semibold">
                  Retrouvez-moi sur les réseaux sociaux
                </h3>
                <SocialIcons
                  iconSize="w-6 h-6"
                  spaceBetween="space-x-4"
                  containerClassName="mt-2"
                  align="left" // Alignement à gauche
                />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">{`Besoin d'un échange téléphonique ?`}</h3>
                <GoogleCalendarModal />
              </div>
            </div>

            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      <SiteFooter />
    </div>
  );
};

export default ContactPage;
