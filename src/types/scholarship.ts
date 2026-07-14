export interface ScholarshipData {
  scholarshipName: string;
  universityName: string;
  countryName: string;
  degreeLevel: string;
  fundingType: string;
  deadline: string;
  amount: string;
  officialLink: string;
  bannerImage: string;
  description: string;
  postedBy: string;
}
export interface Scholarship {
  _id: string;
  scholarshipName: string;
  universityName: string;
  countryName: string;
  degreeLevel: string;
  fundingType: string;
  deadline: string;
  amount: number;
  officialLink: string;
  bannerImage: string;
  description: string;
  postedBy: string;
}
export interface User {
  _id: string;
  name: string;
  email: string;
  image: string;
  emailVerified: boolean;
  createdAt?: string;
}
