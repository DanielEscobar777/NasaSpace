'use client'; // Client component to handle navigation

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";
import { AcmeLogo } from "./logos/AcmeLogo";
import { useRouter } from 'next/navigation'; // Usar la API de router de Next.js

const TopAppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const menuItems = [
    "Inicio",
    "Informacion de sensores",
    "Informacion satelital",
    "Parametros informativos",
  ];

  const router = useRouter();

  // Función para manejar la navegación
  const handleNavigation = (path: string) => {
    router.push(path); // Cambiar página sin recargar toda la aplicación
  };

  return (
    <Navbar
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "hover:after:content-['']",
          "hover:after:absolute",
          "hover:after:bottom-0",
          "hover:after:left-0",
          "hover:after:right-0",
          "hover:after:h-[2px]",
          "hover:after:rounded-[2px]",
          "hover:after:bg-primary",
        ],
      }}
      isBordered
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>
      <NavbarBrand>
        <AcmeLogo />
        <p className="font-bold text-inherit">View Green Tec</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" onClick={() => handleNavigation('/')}>
            Inicio
          </Link>
        </NavbarItem>
        
        <NavbarItem>
          <Link color="foreground" href="#" onClick={() => handleNavigation('/sens')}>
            Informacion de sensores
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" onClick={() => handleNavigation('/map')}>
            Informacion satelital
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" onClick={() => handleNavigation('/par')}>
            Parametros informativos
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg" onClick={() => handleNavigation(`/${item.toLowerCase().replace(/\s/g, '-')}`)}>
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default TopAppBar;
