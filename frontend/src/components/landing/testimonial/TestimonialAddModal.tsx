import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

import { TestimonialForm } from "./TestimonialForm";

import { PrimaryButton } from "@/components/shared/PrimaryButton";

interface TestimonialAddModalProps {
  onTestimonialAdded: () => void;
}

export const TestimonialAddModal: React.FC<TestimonialAddModalProps> = ({
  onTestimonialAdded,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <PrimaryButton onClick={handleOpen}>
          Ajouter un témoignage
        </PrimaryButton>
      </DialogTrigger>
      <DialogContent className="max-w-lg mx-auto p-6 bg-white rounded-md shadow-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-center">
            Ajouter un témoignage
          </DialogTitle>
          <DialogDescription>
            Merci pour votre confiance. Nous espérons que vous êtes satisfait de
            notre travail.
          </DialogDescription>
        </DialogHeader>
        <TestimonialForm
          onSubmit={onTestimonialAdded}
          closeModal={() => setIsOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};
