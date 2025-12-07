import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-96" />
      <Skeleton className="h-6 w-full max-w-2xl" />
      <Skeleton className="h-6 w-full max-w-xl" />
    </div>
  );
}
