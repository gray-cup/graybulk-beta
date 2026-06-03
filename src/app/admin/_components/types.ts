export type OrderStatus = "Paid" | "Accepted" | "Ready for Dispatch" | "Completed" | "Cancelled";
export type OnboardingStatus = "Pending" | "Approved" | "Rejected";
export type PennyDropStatus = "Verified" | "Pending" | "Failed";
export type RiskRating = "Low" | "Medium" | "High" | "Unassigned";
export type EntityType = "Company" | "LLP" | "Sole Proprietorship" | "Partnership";

export type ChecklistKey =
  | "businessVerification"
  | "gstVerified"
  | "panVerified"
  | "uboVerified"
  | "bankAccountVerified"
  | "agreementSigned"
  | "productReviewApproved"
  | "riskRatingAssigned"
  | "complianceApproval";

export interface Order {
  id: string;
  buyer: string;
  buyerEmail: string;
  buyerPhone: string;
  buyerCity: string;
  product: string;
  category: string;
  quantity: string;
  unitPrice: string;
  amount: string;
  vendor: string;
  vendorId: string;
  status: OrderStatus;
  date: string;
  shippingProvider: string;
  deliveryAddress: string;
  paymentRef: string;
  settlementStatus: "Released" | "Pending" | "On Hold" | "N/A";
  settlementAmount: string;
  settlementDate?: string;
  shipmentPhotosUploaded: boolean;
  buyerVerified: boolean;
}

export interface ActiveVendor {
  id: string;
  name: string;
  email: string;
  phone: string;
  gstin: string;
  pan: string;
  ordersAccepted: number;
  ordersCompleted: number;
  totalSettled: string;
  pendingSettlement: string;
  category: string;
  joinedDate: string;
  rating: number;
  city: string;
  state: string;
  accountHolder: string;
  bankName: string;
  ifsc: string;
  status: "Active" | "Suspended";
  lastActivity: string;
}

export interface PendingVendor {
  id: string;
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  entityType: EntityType;
  category: string;
  city: string;
  state: string;
  appliedDate: string;
  status: OnboardingStatus;
  agreementFileName: string;
  agreementSize: string;
  agreementUploadedAt: string;
  checklist: Record<ChecklistKey, boolean>;
  documents: {
    gstCertificate: string;
    panCard: string;
    cancelledCheque: string;
    incorporationCertificate: string;
    addressProof: string;
    uboAadhaar: string;
    boardResolution: string;
  };
  ubo: {
    name: string;
    dob: string;
    nationality: string;
    address: string;
    ownershipPct: string;
    panVerified: boolean;
    sanctionsCleared: boolean;
    pepCleared: boolean;
  };
  bankDetails: {
    accountHolder: string;
    bankName: string;
    ifsc: string;
    accountNo: string;
    pennyDropStatus: PennyDropStatus;
    beneficiaryMatch: boolean;
  };
  riskRating: RiskRating;
  notes: string;
  reviewedBy?: string;
  products: string[];
}
