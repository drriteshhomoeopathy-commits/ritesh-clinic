import { useEffect, useState } from 'react';

export type PageId = 
  | "home"
  | "about"
  | "services"
  | "why"
  | "reviews"
  | "blog"
  | "appointment"
  | "contact";

const pageTitles: Record<PageId, string> = {
  home: 'Ritesh Homeopathic Clinic | Best Homeopathy Doctor in Daltonganj, Jharkhand',
  about: 'Dr. Ritesh Kumar Tiwary | Experienced Homeopathic Physician in Daltonganj',
  services: 'Homeopathy Services | Skin, Hair, Allergy & Chronic Disease Treatment',
  why: 'Why Choose Ritesh Homeopathic Clinic | Benefits of Natural Healing',
  reviews: 'Patient Success Stories | Homeopathy Reviews Daltonganj',
  blog: 'Homeopathy Blog | Natural Health Tips & Treatment Insights',
  appointment: 'Book Appointment | Online Homeopathy Consultation Daltonganj',
  contact: 'Contact Us | Ritesh Homeopathic Clinic Location & Hours'
};

export function usePageNavigation(initialPage: PageId = 'home') {
  const [activePage, setActivePage] = useState<PageId>(() => {
    // Get page from URL path (no hash)
    const path = window.location.pathname.slice(1);
    const validPages: PageId[] = [
      'home', 'about', 'services', 'why', 'reviews', 'blog', 'appointment', 'contact'
    ];
    return validPages.includes(path as PageId) ? (path as PageId) : initialPage;
  });

  const navigate = (page: PageId) => {
    setActivePage(page);
    document.title = pageTitles[page];
    
    // Update URL without hash
    const newUrl = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', newUrl);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Update title when page changes
  useEffect(() => {
    document.title = pageTitles[activePage];
  }, [activePage]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1);
      const validPages: PageId[] = [
        'home', 'about', 'services', 'why', 'reviews', 'blog', 'appointment', 'contact'
      ];
      const newPage = validPages.includes(path as PageId) ? (path as PageId) : 'home';
      setActivePage(newPage);
      document.title = pageTitles[newPage];
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { activePage, navigate };
}
