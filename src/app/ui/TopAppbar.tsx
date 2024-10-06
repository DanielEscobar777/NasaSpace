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
import { useRouter } from 'next/navigation';

const TopAppBar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Modificado para incluir rutas específicas
  const menuItems = [
    { name: "Inicio", path: "/" },
    { name: "Informacion de sensores", path: "/sens" },
    { name: "Informacion satelital", path: "/map" },
    { name: "Parametros informativos", path: "/par" },
  ];

  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
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
        {menuItems.map(item => (
          <NavbarItem key={item.name}>
            <Link color="foreground" href="#" onClick={() => handleNavigation(item.path)}>
              {item.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.name}-${index}`}>
            <Link className="w-full" color="foreground" href="#" size="lg" onClick={() => handleNavigation(item.path)}>
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default TopAppBar;
