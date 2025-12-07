"use client";

import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Detail page error:", error);
  }, [error]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl text-destructive">
          Something went wrong!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">
          We couldn't load the details for this item. This might be because the
          item doesn't exist or there was a problem connecting to the server.
        </p>
        <div className="flex gap-2">
          <Button onClick={reset}>Try again</Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            Go back
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
