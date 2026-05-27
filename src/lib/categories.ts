export type Product = {
  name: string;
  price: string;
  unit: string;
  moq: string;
  supplier: string;
};

export function parsePrice(price: string): number {
  return parseInt(price.replace(/[₹,\s]/g, ""), 10);
}

export function formatINR(amount: number): string {
  return "₹" + amount.toLocaleString("en-IN");
}

export function toSlug(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
  products: Product[];
};

export const categories: Category[] = [
  {
    slug: "tin",
    name: "Tin & Metal Packaging",
    description: "Wholesale tin containers, metal cans, and industrial packaging for FMCG, pharma, and food processing.",
    image: "/categories/tin.jpg",
    products: [
      { name: "Round Tin Container 500ml", price: "₹43,000", unit: "per 1,000 pcs", moq: "1,000 pcs", supplier: "Bharat Tin Works" },
      { name: "Rectangular Gift Tin Box", price: "₹67,500", unit: "per 1,000 pcs", moq: "500 pcs", supplier: "Metpack Industries" },
      { name: "Food Grade Tin Canister 1L", price: "₹89,000", unit: "per 1,000 pcs", moq: "1,000 pcs", supplier: "Sunrise Metal Co." },
      { name: "Industrial Steel Drum 200L", price: "₹1,20,000", unit: "per 100 pcs", moq: "50 pcs", supplier: "Bharat Tin Works" },
      { name: "Screw Top Tin Can 250ml", price: "₹38,000", unit: "per 1,000 pcs", moq: "2,000 pcs", supplier: "National Packaging" },
      { name: "Embossed Tin Box 350ml", price: "₹74,000", unit: "per 1,000 pcs", moq: "500 pcs", supplier: "Metpack Industries" },
      { name: "Airtight Tin Container 2L", price: "₹1,05,000", unit: "per 500 pcs", moq: "500 pcs", supplier: "Sunrise Metal Co." },
      { name: "Pilfer Proof Tin Cap", price: "₹22,000", unit: "per 10,000 pcs", moq: "10,000 pcs", supplier: "National Packaging" },
    ],
  },
  {
    slug: "tv",
    name: "Electronics",
    description: "Wholesale televisions, displays, and consumer electronics for distributors and retail chains across India.",
    image: "/categories/tv.jpg",
    products: [
      { name: "32\" HD LED Television", price: "₹8,200", unit: "per piece", moq: "10 pcs", supplier: "Skyline Electronics" },
      { name: "43\" 4K Smart TV", price: "₹18,500", unit: "per piece", moq: "5 pcs", supplier: "VisionTech India" },
      { name: "55\" OLED Display", price: "₹43,000", unit: "per piece", moq: "2 pcs", supplier: "Skyline Electronics" },
      { name: "24\" Computer Monitor FHD", price: "₹6,800", unit: "per piece", moq: "10 pcs", supplier: "DigiView Pvt Ltd" },
      { name: "65\" Commercial Display", price: "₹72,000", unit: "per piece", moq: "2 pcs", supplier: "VisionTech India" },
      { name: "Set-Top Box HD Receiver", price: "₹1,200", unit: "per piece", moq: "50 pcs", supplier: "DigiView Pvt Ltd" },
      { name: "75\" 4K Conference Display", price: "₹1,15,000", unit: "per piece", moq: "1 pc", supplier: "Skyline Electronics" },
      { name: "32\" Digital Signage Panel", price: "₹14,500", unit: "per piece", moq: "5 pcs", supplier: "VisionTech India" },
    ],
  },
  {
    slug: "cooler",
    name: "Cooling & HVAC",
    description: "Industrial air coolers, HVAC units, and evaporative cooling systems for factories, warehouses, and commercial spaces.",
    image: "/categories/cooler.jpg",
    products: [
      { name: "Desert Air Cooler 60L", price: "₹9,800", unit: "per piece", moq: "10 pcs", supplier: "CoolBreeze Industries" },
      { name: "Industrial Evaporative Cooler", price: "₹43,000", unit: "per piece", moq: "2 pcs", supplier: "AirFlo Systems" },
      { name: "Tower Air Cooler 45L", price: "₹7,200", unit: "per piece", moq: "20 pcs", supplier: "CoolBreeze Industries" },
      { name: "Portable AC 1.5 Ton", price: "₹28,500", unit: "per piece", moq: "5 pcs", supplier: "ClimateMaster Co." },
      { name: "Roof Mounted Exhaust Fan", price: "₹3,600", unit: "per piece", moq: "25 pcs", supplier: "AirFlo Systems" },
      { name: "Split AC Outdoor Unit 2 Ton", price: "₹24,000", unit: "per piece", moq: "5 pcs", supplier: "ClimateMaster Co." },
      { name: "Ducted HVAC Unit 5 Ton", price: "₹1,85,000", unit: "per piece", moq: "1 pc", supplier: "AirFlo Systems" },
      { name: "Personal Air Cooler 20L", price: "₹4,100", unit: "per piece", moq: "50 pcs", supplier: "CoolBreeze Industries" },
    ],
  },
  {
    slug: "table",
    name: "Office Furniture",
    description: "Wholesale office tables, workstations, and commercial furniture for corporates, schools, and institutions.",
    image: "/categories/table.webp",
    products: [
      { name: "Executive Office Desk 1.8m", price: "₹18,500", unit: "per piece", moq: "5 pcs", supplier: "Woodcraft Furnishings" },
      { name: "Study Table with Storage", price: "₹6,200", unit: "per piece", moq: "20 pcs", supplier: "ModSpace India" },
      { name: "Conference Table 3m", price: "₹43,000", unit: "per piece", moq: "1 pc", supplier: "Woodcraft Furnishings" },
      { name: "Height-Adjustable Workstation", price: "₹22,000", unit: "per piece", moq: "5 pcs", supplier: "ErgoFit Pvt Ltd" },
      { name: "Foldable Training Table", price: "₹4,800", unit: "per piece", moq: "20 pcs", supplier: "ModSpace India" },
      { name: "Computer Lab Desk 4-Seater", price: "₹11,500", unit: "per piece", moq: "10 pcs", supplier: "ErgoFit Pvt Ltd" },
      { name: "L-Shaped Corner Workstation", price: "₹28,000", unit: "per piece", moq: "5 pcs", supplier: "Woodcraft Furnishings" },
      { name: "School Bench & Desk Set", price: "₹3,400", unit: "per set", moq: "50 sets", supplier: "ModSpace India" },
    ],
  },
  {
    slug: "machines",
    name: "Industrial Machinery",
    description: "Heavy-duty industrial equipment, fabrication machines, and manufacturing tools sourced directly from Indian manufacturers.",
    image: "/categories/machines.jpg",
    products: [
      { name: "CNC Lathe Machine", price: "₹4,50,000", unit: "per piece", moq: "1 pc", supplier: "Bharat Machine Tools" },
      { name: "Hydraulic Press 50 Ton", price: "₹1,85,000", unit: "per piece", moq: "1 pc", supplier: "PowerPress Corp" },
      { name: "Industrial Drill Press", price: "₹43,000", unit: "per piece", moq: "2 pcs", supplier: "Bharat Machine Tools" },
      { name: "Band Saw Machine", price: "₹67,000", unit: "per piece", moq: "1 pc", supplier: "MetalCraft Systems" },
      { name: "Bench Grinder 10\"", price: "₹8,500", unit: "per piece", moq: "10 pcs", supplier: "PowerPress Corp" },
      { name: "Arc Welding Machine 300A", price: "₹22,000", unit: "per piece", moq: "5 pcs", supplier: "MetalCraft Systems" },
      { name: "Injection Moulding Machine", price: "₹8,20,000", unit: "per piece", moq: "1 pc", supplier: "Bharat Machine Tools" },
      { name: "Conveyor Belt System 10m", price: "₹1,40,000", unit: "per piece", moq: "1 pc", supplier: "PowerPress Corp" },
    ],
  },
  {
    slug: "polymers",
    name: "Polymers & Plastics",
    description: "Bulk supply of industrial polymers, plastic granules, and raw materials for packaging and manufacturing industries.",
    image: "/categories/polymers.jpg",
    products: [
      { name: "HDPE Granules (Natural)", price: "₹1,05,000", unit: "per MT", moq: "5 MT", supplier: "Polyplast India" },
      { name: "PP Copolymer Granules", price: "₹98,000", unit: "per MT", moq: "5 MT", supplier: "ChemSource Pvt Ltd" },
      { name: "PET Resin (Food Grade)", price: "₹1,20,000", unit: "per MT", moq: "5 MT", supplier: "Polyplast India" },
      { name: "LDPE Film Grade", price: "₹1,12,000", unit: "per MT", moq: "2 MT", supplier: "IndoPolymers" },
      { name: "ABS Plastic Granules", price: "₹1,45,000", unit: "per MT", moq: "1 MT", supplier: "ChemSource Pvt Ltd" },
      { name: "Nylon 6 Granules", price: "₹1,95,000", unit: "per MT", moq: "1 MT", supplier: "IndoPolymers" },
      { name: "PVC Compound White", price: "₹88,000", unit: "per MT", moq: "5 MT", supplier: "Polyplast India" },
      { name: "Polystyrene General Purpose", price: "₹1,08,000", unit: "per MT", moq: "2 MT", supplier: "ChemSource Pvt Ltd" },
    ],
  },
];
