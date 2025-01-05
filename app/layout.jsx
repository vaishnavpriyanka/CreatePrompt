import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider"; "@components/Provider";

export const metadata = {
  title: "Promptopia",
  description: "Search and Discover the AI Prompt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <Nav/>
        <main className="app">{children}</main>
      </body>
    </html>
  );
}