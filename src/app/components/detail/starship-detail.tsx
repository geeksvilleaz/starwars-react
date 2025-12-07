import Link from "next/link";
import { Starship } from "@/lib/types";
import { extractIdFromUrl, extractCategoryFromUrl } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface StarshipDetailProps {
  starship: Starship;
}

export function StarshipDetail({ starship }: StarshipDetailProps) {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl">{starship.name}</CardTitle>
        <p className="text-muted-foreground">{starship.starship_class}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Basic Information */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Basic Information</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Model:</span>
              <p className="font-medium">{starship.model}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Manufacturer:
              </span>
              <p className="font-medium">{starship.manufacturer}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Cost:</span>
              <p className="font-medium">{starship.cost_in_credits} credits</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Length:</span>
              <p className="font-medium">{starship.length} m</p>
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
                {starship.max_atmosphering_speed} km/h
              </p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Hyperdrive Rating:
              </span>
              <p className="font-medium">{starship.hyperdrive_rating}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">MGLT:</span>
              <p className="font-medium">{starship.MGLT}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Crew:</span>
              <p className="font-medium">{starship.crew}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Passengers:</span>
              <p className="font-medium">{starship.passengers}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Cargo Capacity:
              </span>
              <p className="font-medium">{starship.cargo_capacity} kg</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Consumables:
              </span>
              <p className="font-medium">{starship.consumables}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Pilots */}
        {starship.pilots.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Pilots ({starship.pilots.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {starship.pilots.map((pilotUrl) => (
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
        {starship.films.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Films ({starship.films.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {starship.films.map((filmUrl) => (
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
