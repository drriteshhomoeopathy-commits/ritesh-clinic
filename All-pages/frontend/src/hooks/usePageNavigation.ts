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

const pageMeta: Record<PageId, { title: string; description: string; canonical: string }> = {
  home: {
    title: 'Ritesh Homeopathic Clinic | Best Homeopathy Doctor in Daltonganj, Jharkhand',
    description: 'Dr. Ritesh Kumar Tiwary (BHMS) - Expert homoeopathy treatment in Daltonganj, Jharkhand.',
    canonical: 'https://www.drriteshclinic.com/'
  },
  about: {
    title: 'Dr. Ritesh Kumar Tiwary | Experienced Homeopathic Physician in Daltonganj',
    description: 'Learn about Dr. Ritesh Kumar Tiwary BHMS, expert homeopathy doctor in Daltonganj, Jharkhand.',
    canonical: 'https://www.drriteshclinic.com/about'
  },
  services: {
    title: 'Homeopathy Services | Skin, Hair, Allergy & Chronic Disease Treatment',
    description: 'Expert homeopathy treatment for skin, hair, allergies, migraine and chronic diseases in Daltonganj.',
    canonical: 'https://www.drriteshclinic.com/services'
  },
  why: {
    title: 'Why Choose Ritesh Homeopathic Clinic | Benefits of Natural Healing',
    description: 'Discover why 5000+ patients trust Dr. Ritesh Kumar Tiwary for homeopathy treatment in Daltonganj.',
    canonical: 'https://www.drriteshclinic.com/why'
  },
  reviews: {
    title: 'Patient Success Stories | Homeopathy Reviews Daltonganj',
    description: 'Read real patient reviews and success stories from Ritesh Homeopathic Clinic in Daltonganj.',
    canonical: 'https://www.drriteshclinic.com/reviews'
  },
  blog: {
    title: 'Homeopathy Blog | Natural Health Tips & Treatment Insights',
    description: 'Read expert homeopathy health tips and treatment insights from Dr. Ritesh Kumar Tiwary.',
    canonical: 'https://www.drriteshclinic.com/blog'
  },
  appointment: {
    title: 'Book Appointment | Online Homeopathy Consultation Daltonganj',
    description: 'Book your appointment with Dr. Ritesh Kumar Tiwary for expert homeopathy consultation in Daltonganj.',
    canonical: 'https://www.drriteshclinic.com/appointment'
  },
  contact: {
    title: 'Contact Us | Ritesh Homeopathic Clinic Location & Hours',
    description: 'Contact Ritesh Homeopathic Clinic in Daltonganj. Find our location, phone number and clinic hours.',
    canonical: 'https://www.drriteshclinic.com/contact'
  }
};

export function usePageNavigation(initialPage: PageId = 'home') {
  const [activePage, setActivePage] = useState<PageId>(() => {
    const path = window.location.pathname.slice(1);
    const validPages: PageId[] = [
      'home', 'about', 'services', 'why', 'reviews', 'blog', 'appointment', 'contact'
    ];
    return validPages.includes(path as PageId) ? (path as PageId) : initialPage;
  });

  const navigate = (page: PageId) => {
    setActivePage(page);
    const newUrl = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', newUrl);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const meta = pageMeta[activePage];
    document.title = meta.title;

    // ✅ Find canonical by ID (won't conflict with index.html)
    const canonical = document.getElementById('canonical-tag') as HTMLLinkElement;
    if (canonical) {
      canonical.setAttribute('href', meta.canonical);
    }

    // Update meta description
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', meta.description);

  }, [activePage]);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.slice(1);
      const validPages: PageId[] = [
        'home', 'about', 'services', 'why', 'reviews', 'blog', 'appointment', 'contact'
      ];
      const newPage = validPages.includes(path as PageId) ? (path as PageId) : 'home';
      setActivePage(newPage);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return { activePage, navigate };
}