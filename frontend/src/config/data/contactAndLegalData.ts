// contactAndLegalData.ts

import { Mail, Phone, MapPin } from "lucide-react";
import { GrUserManager } from "react-icons/gr";

import { APP_NAME, APP_DEV, APP_MAIL, APP_ADRESS, APP_ADRESS2, APP_TEL, APP_SIRET } from "@/config/config";
import { PiBuildingApartment, PiSuitcase } from "react-icons/pi";

// Définir le type pour chaque élément de contact
type ContactInfoItem = {
  label: string;
  icon: React.ElementType; // Utilisation de React.ElementType pour les icônes React
  text: string;
};

// Définir le type pour chaque élément légal
type LegalInfoItem = {
  label: string;
  text: string;
  icon: React.ElementType; // Utilisation de React.ElementType pour les icônes React
  link?: string; // Facultatif, présent uniquement si c'est un lien
  isLink?: boolean; // Facultatif, pour indiquer si c'est un lien
};

// Informations de contact
export const contactInfo: ContactInfoItem[] = [
  {
    label:"Email",
    icon: Mail,
    text: APP_MAIL,
  },
  {
    label:"Téléphone",
    icon: Phone,
    text: APP_TEL,
  },
  {
    label:"",
    icon: MapPin,
    text: APP_ADRESS2,
  },
];

// Informations légales
export const legalInfo: LegalInfoItem[] = [
  {
    label: "Raison Sociale",
    text: APP_NAME,
    icon: PiBuildingApartment,
  },
  
  {
    label: "Représentant Légal",
    text: APP_DEV,
    icon: GrUserManager,
  },
  {
    label: "Numéro SIRET",
    text: APP_SIRET,
    icon: PiSuitcase ,
  },
  {
    label: "Adresse du Siège Social",
    text: APP_ADRESS + " " + APP_ADRESS2,
    icon: MapPin,
  },
  
  
];
