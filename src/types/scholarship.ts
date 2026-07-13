export interface ScholarshipData {
  scholarshipName: string;
  universityName: string;
  countryName: string;
  degreeLevel: "Undergraduate" | "Master's" | "PhD";
  fundingType: "Fully Funded" | "Partially Funded";
  deadline: string;
  amount: number;
  officialLink: string;
  bannerImage: string;
  description: string;
}

export interface ScholarshipData {
  _id?: string;
  scholarshipName: string;
  universityName: string;
  countryName: string;
  degreeLevel: "Undergraduate" | "Master's" | "PhD";
  fundingType: "Fully Funded" | "Partially Funded";
  deadline: string;
  amount: number;
  officialLink: string;
  bannerImage: string;
  description: string;
  postedBy: string;
}
