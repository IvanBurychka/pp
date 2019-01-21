export interface Event {
  name: string;
  description: string;
  location: Location;
  startTime: string;
  Speakers: string[];
  Topic: string;
  Agenda: string;
}

interface Location {
  city: string;
  street: string;
  phone: string;
}

