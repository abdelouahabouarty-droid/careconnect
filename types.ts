
export type MultilingualString = {
  en: string;
  ar: string;
};

export interface HelpRequest {
  id: number;
  category: MultilingualString;
  title: MultilingualString;
  location: MultilingualString;
  description: MultilingualString;
  imageUrl: string;
}

export interface Testimonial {
  id: number;
  name: MultilingualString;
  role: MultilingualString;
  quote: MultilingualString;
  avatarUrl: string;
}

export interface Donor {
  id: number;
  name: MultilingualString;
  role: MultilingualString;
  quote: MultilingualString;
  avatarUrl: string;
}
