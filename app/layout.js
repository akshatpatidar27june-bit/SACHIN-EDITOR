import "./globals.css";
export const metadata = {
  title: "Sachin Cinematography | Films That Feel",
  description: "Wedding cinematography, reels, travel and lifestyle films by Sachin, based in Mandsaur, Madhya Pradesh."
};
export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}