import "../public/assets/styles/globals.css";

export const metadata = {
  title: "Dreame Balloons | Balloon Decor & Event Styling",
  description: "Dreame Balloons creates stunning, unique balloon decorations for weddings, parties, corporate events, and celebrations. Premium styling and installation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
