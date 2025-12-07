import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";

export default function Loading() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-9 w-64" />
        <Skeleton className="h-4 w-32 mt-2" />
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Section 1 */}
        <div>
          <Skeleton className="h-6 w-48 mb-3" />
          <div className="grid grid-cols-2 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <Skeleton className="h-4 w-24 mb-1" />
                <Skeleton className="h-5 w-32" />
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Section 2 */}
        <div>
          <Skeleton className="h-6 w-40 mb-3" />
          <div className="flex flex-wrap gap-2">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-20" />
            ))}
          </div>
        </div>

        <Separator />

        {/* Section 3 */}
        <div>
          <Skeleton className="h-6 w-36 mb-3" />
          <div className="flex flex-wrap gap-2">
            {[...Array(3)].map((_, i) => (
              <Skeleton key={i} className="h-6 w-24" />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
