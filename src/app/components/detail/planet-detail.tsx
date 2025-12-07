import Link from "next/link";
import { Planet } from "@/lib/types";
import { extractIdFromUrl, extractCategoryFromUrl } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PlanetDetailProps {
  planet: Planet;
}

export function PlanetDetail({ planet }: PlanetDetailProps) {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl">{planet.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Physical Characteristics */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Physical Characteristics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Diameter:</span>
              <p className="font-medium">{planet.diameter} km</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Rotation Period:
              </span>
              <p className="font-medium">{planet.rotation_period} hours</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Orbital Period:
              </span>
              <p className="font-medium">{planet.orbital_period} days</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Gravity:</span>
              <p className="font-medium">{planet.gravity}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Surface Water:
              </span>
              <p className="font-medium">{planet.surface_water}%</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Population:</span>
              <p className="font-medium">{planet.population}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Environment */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Environment</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Climate:</span>
              <p className="font-medium">{planet.climate}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Terrain:</span>
              <p className="font-medium">{planet.terrain}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Residents */}
        {planet.residents.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Residents ({planet.residents.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {planet.residents.map((residentUrl) => (
                  <Link
                    key={residentUrl}
                    href={`/${extractCategoryFromUrl(
                      residentUrl
                    )}/${extractIdFromUrl(residentUrl)}`}
                  >
                    <Badge
                      variant="outline"
                      className="hover:bg-accent cursor-pointer"
                    >
                      Person {extractIdFromUrl(residentUrl)}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Films */}
        {planet.films.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Films ({planet.films.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {planet.films.map((filmUrl) => (
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
