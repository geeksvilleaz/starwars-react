import { getCategoryItems, extractIdFromUrl } from "@/lib/api";
import { SWAPIEntity } from "@/lib/types";
import ListItem from "@/app/components/list-item";
import Pagination from "@/app/components/pagination";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
  searchParams: Promise<{ page?: string }>;
}

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const { category } = await params;
  const { page: pageParam } = await searchParams;
  const page = parseInt(pageParam || "1", 10);

  // Fetch category data
  const data = await getCategoryItems<SWAPIEntity>(category, page);

  // Format category name for display
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {categoryName}
        </h1>
        <p className="text-muted-foreground">
          Showing {data.results.length} of {data.count} results
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.results.map((item) => {
          const id = extractIdFromUrl(item.url);
          return (
            <ListItem key={item.url} item={item} category={category} id={id} />
          );
        })}
      </div>

      <Pagination
        hasNext={!!data.next}
        hasPrevious={!!data.previous}
        currentPage={page}
        category={category}
      />
    </div>
  );
}
