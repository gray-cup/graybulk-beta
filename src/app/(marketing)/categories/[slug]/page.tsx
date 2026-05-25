import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/categories";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  return (
    <div className="py-12">
      <div className="mb-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span className="mx-2">/</span>
        <span>{category.name}</span>
      </div>

      <div className="mb-10">
        <h1 className="text-3xl font-semibold text-neutral-900 mb-2">{category.name}</h1>
        <p className="text-muted-foreground max-w-2xl">{category.description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {category.products.map((product) => (
          <div
            key={product.name}
            className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
              <Image
                src={category.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="p-4 flex flex-col gap-1.5">
              <p className="text-sm font-medium text-neutral-800 leading-snug line-clamp-2">
                {product.name}
              </p>
              <p className="text-lg font-semibold text-neutral-900 tabular-nums">
                {product.price}
              </p>
              <p className="text-xs text-muted-foreground">{product.unit}</p>
              <div className="mt-1 pt-2 border-t border-gray-100 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">MOQ: {product.moq}</span>
              </div>
              <p className="text-xs text-[#0052FF] font-medium truncate">{product.supplier}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
