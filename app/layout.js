import Header from "@/components/Header";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata = {
  title: "ToDo List App",
  description: "ToDo List App.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        <main>
          <Toaster/>
          {children}
          </main>
      </body>
    </html>
  );
}
