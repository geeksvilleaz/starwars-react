"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  hasNext: boolean;
  hasPrevious: boolean;
  currentPage: number;
  category: string;
}

export default function Pagination({
  hasNext,
  hasPrevious,
  currentPage,
  category,
}: PaginationProps) {
  const previousPage = currentPage - 1;
  const nextPage = currentPage + 1;

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        {hasPrevious ? (
          <Button asChild variant="outline" size="default">
            <Link href={`/${category}?page=${previousPage}`}>
              <ChevronLeft className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Previous</span>
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled size="default">
            <ChevronLeft className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Previous</span>
          </Button>
        )}
      </div>

      <div className="text-sm font-medium text-muted-foreground">
        Page {currentPage}
      </div>

      <div>
        {hasNext ? (
          <Button asChild variant="outline" size="default">
            <Link href={`/${category}?page=${nextPage}`}>
              <span className="hidden sm:inline">Next</span>
              <ChevronRight className="h-4 w-4 ml-2" />
            </Link>
          </Button>
        ) : (
          <Button variant="outline" disabled size="default">
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        )}
      </div>
    </div>
  );
}
