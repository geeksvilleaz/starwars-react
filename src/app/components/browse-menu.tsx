"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { getCategories } from "@/lib/api";
import { CategoryMenuItem } from "@/lib/types";
import { Skeleton } from "@/components/ui/skeleton";

export function BrowseMenu() {
  const [categories, setCategories] = useState<CategoryMenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    async function fetchCategories() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to load categories");
        console.error("Error loading categories:", err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchCategories();
  }, []);

  // Extract current category from pathname
  const currentCategory = pathname.split("/")[1];

  // Format category name for display
  const formatCategoryName = (name: string) => {
    return name
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  if (isLoading) {
    return (
      <nav className="space-y-2">
        <h2 className="text-lg font-semibold mb-4">Browse Categories</h2>
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </nav>
    );
  }

  if (error) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Browse Categories</h2>
        <div className="text-sm text-destructive">{error}</div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.location.reload()}
        >
          Retry
        </Button>
      </div>
    );
  }

  return (
    <nav className="space-y-2">
      <h2 className="text-lg font-semibold mb-4">Browse Categories</h2>
      {categories.map((category) => {
        const isActive = currentCategory === category.name;
        return (
          <Link
            key={category.name}
            href={`/${category.name}`}
            className="block"
          >
            <Button
              variant={isActive ? "default" : "ghost"}
              className="w-full justify-start"
            >
              {formatCategoryName(category.name)}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
}
