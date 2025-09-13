import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { FavoritesProvider } from "./context/FavoritesContext";
import QueryProvider from "./providers/QueryProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pokédex - Explore o Mundo dos Pokémon",
  description: "Descubra informações detalhadas sobre seus Pokémon favoritos com nossa Pokédex interativa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 min-h-screen flex flex-col`}
      >
        <QueryProvider>
          <FavoritesProvider>
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </FavoritesProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
