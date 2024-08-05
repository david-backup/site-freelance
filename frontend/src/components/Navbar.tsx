import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";


interface RouteProps {
  to: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    to: "/#services",
    label: "Services",
  },
  {
    to: "/#testimonials",
    label: "Témoignages",
  },
  {
    to: "/#pricing",
    label: "Tarif",
  },
  {
    to: "/#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <header className="sticky border-b-[2px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background py-[8px]">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              rel="noreferrer noopener"
              to="/"
              className="ml-2 font-bold text-xl flex"
            >
              
            David Web Projects
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu className="flex md:hidden h-5 w-5" onClick={() => setIsOpen(true)}>
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">David Web Projects</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ to, label }: RouteProps) => (
                    <Link
                      rel="noreferrer noopener"
                      key={label}
                      to={to}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: "ghost" })}
                    >
                      {label}
                    </Link>
                  ))}
                  <Link
                    rel="noreferrer noopener"
                    to="/login"
                    className={`w-[110px] border ${buttonVariants({ variant: "outline", className: "border-2 border-primary text-primary hover:bg-primary hover:text-white" })}`}
                  >
                    Se connecter
                  </Link>
                  
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2 ">
            {routeList.map((route: RouteProps, i) => (
              <Link
                rel="noreferrer noopener"
                to={route.to}
                key={i}
                className={`text-[17px] ${buttonVariants({ variant: "ghost", className: "text-primary hover:bg-primary hover:text-white" })}`}
              >
                {route.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <Link
              rel="noreferrer noopener"
              to="/login"
              className={`border ${buttonVariants({ variant: "outline", className: "border-2 border-primary bg-primary text-white" })}`}
            >
              Se connecter
            </Link>
            <ModeToggle/>
            
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};