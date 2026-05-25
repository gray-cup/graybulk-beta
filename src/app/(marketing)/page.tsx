"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

import {
  CreateAgent,
  IDEAgent,
  Forms,
  Questions,
  ToDo,
  ProductPr,
  ProductIssue,
  CustomerCalls,
  ProductPrBottomLeft,
  PRIssues,
} from "@/components/svgs";
import { CurrencyCircleDollarIcon, StorefrontIcon, ListBulletsIcon, TagIcon } from "@phosphor-icons/react";
import { AnimatedHeroGrid } from "@/components/hero-grid/HeroGrid";
import { TwoColLayout, FourCardGrid, Section } from "@/components/layouts";
import { categories } from "@/lib/categories";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [randomizedComponents, setRandomizedComponents] = useState<
    React.ComponentType<{ className?: string }>[]
  >([]);

  useEffect(() => {
    const components = [
      CreateAgent,
      IDEAgent,
      Forms,
      Questions,
      ToDo,
      ProductPr,
      ProductIssue,
      CustomerCalls,
    ];

    // Shuffle components
    const shuffled = [...components].sort(() => Math.random() - 0.5);
    setRandomizedComponents(shuffled);
    setMounted(true);
  }, []);

  return (
    <div className="mx-auto px-4 lg:px-6 h-auto my-10">
      <div className="md:min-h-screen pt-10 pb-20 md:pb-0 flex flex-col justify-center">
        <TwoColLayout
          left={
            <div>
              <h1 className="relative text-black text-3xl sm:text-5xl lg:text-6xl font-medium sm:leading-[60px] lg:leading-[77px]">
                Built for Indian
                <br />
                Wholesale Commerce.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-neutral-500 max-w-lg">
                Suppliers, manufacturers, and distributors sell wholesale products online — with structured catalogs, automated settlements, and scalable storefronts.
              </p>
              <div className="flex relative mt-10 flex-col">
                <a href="https://app.graybulk.com" target="_blank">
                  <Button variant="primary" size="sm">
                    Start Selling
                  </Button>
                </a>
              </div>
            </div>
          }
          right={
            <div className="hidden lg:block">
              <AnimatedHeroGrid />
            </div>
          }
        />

        <Section>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-1">Browse by Category</h2>
            <p className="text-muted-foreground">Discover wholesale products across India's key industries.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <Link key={cat.slug} href={`/categories/${cat.slug}`} className="group rounded-2xl overflow-hidden border border-gray-200 bg-white hover:shadow-md transition-shadow">
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4">
                  <p className="font-medium text-neutral-800">{cat.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{cat.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </Section>

        <Section>
          <FourCardGrid
            cards={[
              {
                title: "Automated Settlements",
                description: "Sell products. Receive settlements automatically. No manual reconciliation.",
                icon: <CurrencyCircleDollarIcon size={32} color="#0433ff" weight="duotone" />,
                button: { label: "Start Selling", href: "https://app.graybulk.com" },
              },
              {
                title: "Supplier Storefronts",
                description: "Build your supplier presence online. Your products, catalog, and company — in one place.",
                icon: <StorefrontIcon size={32} color="#0433ff" weight="duotone" />,
                button: { label: "Create Profile", href: "https://app.graybulk.com" },
              },
              {
                title: "Structured Catalogs",
                description: "Organize your entire product range with structured listings built for B2B buyers.",
                icon: <ListBulletsIcon size={32} color="#0433ff" weight="duotone" />,
                button: { label: "List Products", href: "https://app.graybulk.com" },
              },
              {
                title: "Low Transaction Fees",
                description: "0.4% on UPI. Flat ₹230 on net banking. Predictable costs at any volume.",
                icon: <TagIcon size={32} color="#0433ff" weight="duotone" />,
                button: { label: "See Pricing", href: "/pricing" },
              },
            ]}
          />
        </Section>

        <Section className="bg-neutral-50 px-6">
          <TwoColLayout
            left={
              <div>
                <div className="block md:hidden max-md:pb-5">
                  <PRIssues />
                </div>
                <h2 className="text-2xl sm:text-5xl font-medium text-neutral-900 mb-6 font-instrument-sans">
                  Commerce infrastructure for Indian wholesale.
                </h2>
                <p className="text-md sm:text-xl mb-10 text-neutral-700 my-4 max-w-2xl">
                  Most Indian B2B trade still happens over WhatsApp, Excel sheets,
                  and phone calls. Gray Bulk brings it online — with structured
                  catalogs, automated settlements, and supplier storefronts built
                  to scale.
                  <br />
                  <br />
                  Less paperwork. Faster transactions. No middlemen.
                </p>
                <a href="https://app.graybulk.com" target="_blank">
                  <Button variant="primary">Create Supplier Profile</Button>
                </a>
              </div>
            }
            right={
              <div className="hidden md:block">
                <PRIssues />
              </div>
            }
          />
        </Section>
        {/* <p className="text-center text-sm text-muted-foreground">would love to buy coldrun.ai but it's costly. ps: this platform is work in progress</p> */}
      </div>
    </div>
  );
}
