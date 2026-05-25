import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/categories";

export default function CategoriesPage() {
  return (
    <div className="py-12">
      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-neutral-900 mb-2">All Categories</h1>
        <p className="text-muted-foreground max-w-2xl">
          Browse wholesale categories sourced directly from verified Indian manufacturers and suppliers. Bulk pricing, GST-compliant invoicing, and T+2 settlements.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.slug}
            href={`/categories/${category.slug}`}
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-semibold text-neutral-900 mb-1">{category.name}</h2>
              <p className="text-sm text-muted-foreground line-clamp-2">{category.description}</p>
              <p className="mt-3 text-sm font-medium text-[#0052FF]">
                {category.products.length} products →
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
