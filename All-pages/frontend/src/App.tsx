import { PAGE_COMPONENTS, PAGE_ORDER } from "./app/pages";
import type { PageId } from "./app/pageTypes";
import Breadcrumb from "./components/Breadcrumb";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { usePageNavigation } from "./hooks/usePageNavigation";

export default function App() {
  const { activePage, navigate } = usePageNavigation();

  return (
    <div
      style={{
        fontFamily: "var(--font-body)",
        background: "#ffffff",
        color: "#0f2318",
        overflowX: "hidden",
      }}
    >
      <Nav activePage={activePage} onNavigate={navigate} />
      <Breadcrumb activePage={activePage} onNavigate={navigate} />
      <main>
        {PAGE_ORDER.map((page: PageId) => {
          const Component = PAGE_COMPONENTS[page];
          const isActive = activePage === page;
          return (
            <div
              key={page}
              style={{
                display: isActive ? "block" : "none",
                animation: isActive
                  ? "pageIn 0.4s cubic-bezier(0.22,1,0.36,1)"
                  : "none",
              }}
            >
              <Component onNavigate={navigate} />
            </div>
          );
        })}
      </main>
      <Footer onNavigate={navigate} />
      <FloatingActions />
    </div>
  );
}
