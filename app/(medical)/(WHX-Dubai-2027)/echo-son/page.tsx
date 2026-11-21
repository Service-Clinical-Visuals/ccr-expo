import Header from "./_components/Header";
import Banner from "./_components/Banner";
import About from "./_components/About";
import Explore360 from "./_components/Explore360";
import Products from "./_components/Products";
import AdvancedImaging from "./_components/AdvancedImaging";
import Gallery from "./_components/Gallery";
import AlbitApplications from "./_components/AlbitApplications";
import News from "./_components/News";
import Footer from "./_components/Footer";

export default function EchoSonPage() {
  return (
    <div className="min-h-screen bg-[var(--color-background)] text-[var(--foreground)]">
      <Header />

      <main className="relative flex flex-col">
        <Banner />
        <About />
        <Explore360 />
        <Products />
        <AdvancedImaging />
        <Gallery />
        <AlbitApplications />
        <News />
      </main>

      <Footer />
    </div>
  );
}
