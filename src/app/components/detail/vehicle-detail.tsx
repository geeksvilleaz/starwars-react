import Link from "next/link";
import { Vehicle } from "@/lib/types";
import { extractIdFromUrl, extractCategoryFromUrl } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface VehicleDetailProps {
  vehicle: Vehicle;
}

export function VehicleDetail({ vehicle }: VehicleDetailProps) {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl">{vehicle.name}</CardTitle>
        <p className="text-muted-foreground">{vehicle.vehicle_class}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Model:</span>
              <p className="font-medium">{vehicle.model}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Manufacturer:
              </span>
              <p className="font-medium">{vehicle.manufacturer}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Cost:</span>
              <p className="font-medium">{vehicle.cost_in_credits} credits</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Length:</span>
              <p className="font-medium">{vehicle.length} m</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Performance */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Performance</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Max Speed:</span>
              <p className="font-medium">
                {vehicle.max_atmosphering_speed} km/h
              </p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Crew:</span>
              <p className="font-medium">{vehicle.crew}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Passengers:</span>
              <p className="font-medium">{vehicle.passengers}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Cargo Capacity:
              </span>
              <p className="font-medium">{vehicle.cargo_capacity} kg</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Consumables:
              </span>
              <p className="font-medium">{vehicle.consumables}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Pilots */}
        {vehicle.pilots.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Pilots ({vehicle.pilots.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {vehicle.pilots.map((pilotUrl) => (
                  <Link
                    key={pilotUrl}
                    href={`/${extractCategoryFromUrl(
                      pilotUrl
                    )}/${extractIdFromUrl(pilotUrl)}`}
                  >
                    <Badge
                      variant="outline"
                      className="hover:bg-accent cursor-pointer"
                    >
                      Pilot {extractIdFromUrl(pilotUrl)}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Films */}
        {vehicle.films.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Films ({vehicle.films.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {vehicle.films.map((filmUrl) => (
                <Link
                  key={filmUrl}
                  href={`/${extractCategoryFromUrl(filmUrl)}/${extractIdFromUrl(
                    filmUrl
                  )}`}
                >
                  <Badge
                    variant="outline"
                    className="hover:bg-accent cursor-pointer"
                  >
                    Film {extractIdFromUrl(filmUrl)}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
