export type TFacility = {
  id: string;
  name: string;
  description: string;
  pricePerHour: number; // Note: This will be hashed
  location: string;
  isDeleted: boolean;
};
