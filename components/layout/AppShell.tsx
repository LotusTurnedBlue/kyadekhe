import DesktopHeader from "@/components/layout/DesktopHeader";
import MobileHeader from "@/components/layout/MobileHeader";
import BottomNav from "@/components/layout/BottomNav";
import CategoryNav from "@/components/layout/CategoryNav";
import Footer from "@/components/layout/Footer";

type AppShellProps = {
  children: React.ReactNode;
  showBottomNav?: boolean;
  showCategoryNav?: boolean;
};

export default function AppShell({
  children,
  showBottomNav = true,
  showCategoryNav = true,
}: AppShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#030811] text-white">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,0,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(255,0,168,0.10),transparent_26%)]" />

      <div className="relative z-10 pointer-events-auto">
        <DesktopHeader />
        <MobileHeader />

        {showCategoryNav && <CategoryNav />}

        <div className="relative z-20 pointer-events-auto">
          {children}
        </div>

        {showBottomNav && <BottomNav />}

        <Footer />
      </div>
    </main>
  );
}