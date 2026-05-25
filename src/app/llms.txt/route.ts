export const dynamic = "force-static";

const content = `# Gray Bulk

> Gray Bulk is a B2B commerce infrastructure platform for Indian suppliers, wholesalers, manufacturers, importers, exporters, and distributors. Businesses sell wholesale products online with structured catalogs, automated settlements, and scalable supplier storefronts.

Gray Bulk replaces WhatsApp-based trade, Excel sheets, and unstructured dealer networks with a modern marketplace: verified supplier profiles, searchable product catalogs, and settlement infrastructure that pays suppliers automatically after every transaction. Built for raw commodities, FMCG bulk supply, packaging materials, food ingredients, textiles, chemicals, construction supply, and more.

## Pages

- [Home](https://graybulk.com/): Platform overview — wholesale commerce infrastructure for Indian B2B trade.
- [About](https://graybulk.com/about): Company mission and what Gray Bulk is building.
- [Pricing](https://graybulk.com/pricing): Supplier subscription plans (Free, Growth, Enterprise) and settlement fees. Buyers always browse and purchase for free.
- [Enterprise](https://graybulk.com/enterprise-contact): Custom plans for national suppliers and exporters with unlimited listings, dedicated account management, and API access.
- [Play With Us](https://graybulk.com/play-with-us): Careers and opportunities to join the team.
- [Privacy Policy](https://graybulk.com/privacy): Data handling and privacy terms.
- [Terms of Service](https://graybulk.com/terms): Platform terms and conditions.

## App

- [Marketplace](https://app.graybulk.com): Live B2B marketplace — buyers source wholesale products from verified Indian suppliers.

## Key facts

- Supplier plans: Free (5 listings), Growth (₹1,250/mo, 30 listings), Enterprise (₹3,750/mo, 100 listings)
- Settlement fees: 0.4% on UPI transactions, ₹230 flat on net banking
- Buyers pay nothing to browse or purchase
- Payments settled automatically after every transaction
`;

export function GET() {
  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
