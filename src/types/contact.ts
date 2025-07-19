export interface ContactMethod {
  id: string;
  type: 'email' | 'phone' | 'address' | 'social';
  title: string;
  value: string;
  icon: string;
  href?: string;
  description?: string;
}

export interface ContactReason {
  id: string;
  title: string;
  description: string;
  icon: string;
  examplesTitle: string;
  examples: string[];
}

export interface ContactInfo {
  methods: ContactMethod[];
  reasons: ContactReason[];
  responseTime: {
    title: string;
    description: string;
  };
  introduction: {
    title: string;
    description: string;
  };
}

export interface ContactPageData {
  hero: {
    title: string;
    subtitle: string;
    description: string;
  };
  contactInfo: ContactInfo;
  breadcrumb: {
    home: string;
    contact: string;
  };
}