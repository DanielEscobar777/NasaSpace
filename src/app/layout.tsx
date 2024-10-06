'use client'; // Esto indica que este componente es renderizado en el cliente
import localFont from "next/font/local";
import "./globals.css";
import { NextUIProvider } from "@nextui-org/react";
import { motion, AnimatePresence } from 'framer-motion'; // Importar framer-motion
import { usePathname } from 'next/navigation'; // Importar para detectar la ruta actual
import TopAppBar from "./ui/TopAppbar"; // Importa el TopAppBar

// Fuentes personalizadas
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Obtener la ruta actual para cambiar la animación

  // Definir las variantes de la animación
  const variants = {
    hidden: { opacity: 0, x: -100 },  // Animación al salir
    visible: { opacity: 1, x: 0 },   // Animación al entrar
    exit: { opacity: 0, x: 100 },    // Animación de salida
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextUIProvider>
          {/* Barra de navegación fija */}
          <TopAppBar />

          {/* Transiciones de página */}
          <AnimatePresence mode="wait">
            <motion.main
              key={pathname} // Usar la ruta como clave para cambiar de página
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={variants}
              transition={{ duration: 0.5 }} // Duración de la animación
              style={{ padding: "20px" }}
            >
              {children} {/* Contenido de la página */}
            </motion.main>
          </AnimatePresence>
        </NextUIProvider>
      </body>
    </html>
  );
}
