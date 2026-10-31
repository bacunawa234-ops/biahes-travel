import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Shared chrome for /tours, /booking and /admin.
// The homepage (src/app/page.tsx) renders its own header and footer.
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
