import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { supplierProfiles } from "@/lib/suppliers";
import { categories, toSlug } from "@/lib/categories";

function supplierSlug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function generateStaticParams() {
  return Object.keys(supplierProfiles).map((name) => ({
    slug: supplierSlug(name),
  }));
}

export default async function SupplierProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const entry = Object.entries(supplierProfiles).find(
    ([name]) => supplierSlug(name) === slug
  );
  if (!entry) notFound();

  const [, supplier] = entry;

  // Collect every product this supplier sells, with their category info
  const supplierProducts = categories.flatMap((cat) =>
    cat.products
      .filter((p) => p.supplier === supplier.name)
      .map((p) => ({ ...p, category: cat }))
  );

  const stars = Array.from({ length: 5 }, (_, i) => i < Math.round(supplier.rating));

  return (
    <div className="py-10 max-w-5xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-6 text-sm text-muted-foreground flex items-center gap-1.5">
        <Link href="/categories" className="hover:text-foreground transition-colors">
          Categories
        </Link>
        <span>/</span>
        <span className="text-neutral-800">Supplier</span>
        <span>/</span>
        <span className="text-neutral-800">{supplier.name}</span>
      </div>

      {/* ── Header card ── */}
      <div className="bg-white border border-neutral-200 rounded-2xl p-6 mb-8 space-y-5">
        <div className="flex items-start gap-4 flex-wrap">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-2xl bg-neutral-100 flex items-center justify-center text-2xl font-bold text-neutral-600 shrink-0 border border-neutral-200">
            {supplier.name.charAt(0)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-2xl font-bold text-neutral-900">{supplier.name}</h1>
              <span className="inline-flex items-center gap-1 rounded-full bg-green-50 border border-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Verified Supplier
              </span>
            </div>
            <p className="text-sm text-neutral-500 mt-1 flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {supplier.location}
            </p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <div className="flex">
                {stars.map((filled, i) => (
                  <svg
                    key={i}
                    className={`w-4 h-4 ${filled ? "text-amber-400" : "text-neutral-200"} fill-current`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-neutral-800">{supplier.rating}</span>
              <span className="text-sm text-neutral-400">({supplier.reviewCount} reviews)</span>
            </div>
          </div>
        </div>

        <p className="text-neutral-600 leading-relaxed">{supplier.description}</p>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 border-t border-neutral-100">
          {[
            { label: "Est.", value: String(supplier.estYear) },
            { label: "Products Listed", value: String(supplier.totalProducts) },
            { label: "State", value: supplier.state },
            { label: "GSTIN", value: supplier.gstin },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-xs text-neutral-400">{s.label}</p>
              <p className="text-sm font-semibold text-neutral-800 font-mono break-all">{s.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Products ── */}
      <div>
        <h2 className="text-lg font-semibold text-neutral-900 mb-4">
          Products on Gray Bulk{" "}
          <span className="text-neutral-400 font-normal text-base">({supplierProducts.length})</span>
        </h2>

        {supplierProducts.length === 0 ? (
          <p className="text-neutral-400 text-sm">No products listed yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {supplierProducts.map((p) => (
              <Link
                key={p.name}
                href={`/categories/${p.category.slug}/${toSlug(p.name)}`}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="relative aspect-[16/9] w-full bg-neutral-50 overflow-hidden">
                  <Image
                    src={p.category.image}
                    alt={p.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <p className="text-xs text-neutral-400">{p.category.name}</p>
                  <p className="text-sm font-medium text-neutral-800 leading-snug line-clamp-2">{p.name}</p>
                  <p className="text-base font-bold text-neutral-900 tabular-nums">{p.price}</p>
                  <p className="text-xs text-neutral-400">{p.unit}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-neutral-100 mt-1">
                    <span className="text-xs text-neutral-400">MOQ: {p.moq}</span>
                    <span className="text-xs font-medium text-[#0052FF]">View →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
