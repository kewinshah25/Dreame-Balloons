import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata = {
  title: "Dreame Balloons | Balloon Decor & Event Styling",
  description: "Dreame Balloons creates stunning, unique balloon decorations for weddings, parties, corporate events, and celebrations. Premium styling and installation.",
  icons: {
    icon: `${basePath}/favicon.ico`,
  },
};

const fontFaceStyles = `
  @font-face {
    font-family: "Anzeigen Grotesk T";
    src: local("Anzeigen Grotesk T"),
      url("${basePath}/assets/fonts/anzeigenGroteskTRegular/anzeigengrot.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: "Inter";
    src: local("Inter"), url("${basePath}/assets/fonts/inter/medium.ttf") format("truetype");
    font-weight: 500;
    font-style: normal;
  }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <style dangerouslySetInnerHTML={{ __html: fontFaceStyles }} />
        {children}
      </body>
    </html>
  );
}
