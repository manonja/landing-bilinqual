import Preloader from "@/components/Preloader";
import "@css/aos.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/magnific-popup.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";

export const metadata = {
  title: {
    template: "Bilinqual - Simplest Way To Grow Your Business",
    default: "Bilinqual - Simplest Way To Grow Your Business", // a default is required when creating a template
  },
  description: "Bilinqual - Simplest Way To Grow Your Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
