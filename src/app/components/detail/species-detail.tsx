import Link from "next/link";
import { Species } from "@/lib/types";
import { extractIdFromUrl, extractCategoryFromUrl } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface SpeciesDetailProps {
  species: Species;
}

export function SpeciesDetail({ species }: SpeciesDetailProps) {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl">{species.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Classification */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Classification</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">
                Classification:
              </span>
              <p className="font-medium">{species.classification}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Designation:
              </span>
              <p className="font-medium">{species.designation}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Language:</span>
              <p className="font-medium">{species.language}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Average Lifespan:
              </span>
              <p className="font-medium">{species.average_lifespan} years</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Physical Characteristics */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Physical Characteristics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">
                Average Height:
              </span>
              <p className="font-medium">{species.average_height} cm</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Skin Colors:
              </span>
              <p className="font-medium">{species.skin_colors}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Hair Colors:
              </span>
              <p className="font-medium">{species.hair_colors}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Eye Colors:</span>
              <p className="font-medium">{species.eye_colors}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Homeworld */}
        {species.homeworld && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">Homeworld</h3>
              <Link
                href={`/${extractCategoryFromUrl(
                  species.homeworld
                )}/${extractIdFromUrl(species.homeworld)}`}
                className="inline-block"
              >
                <Badge
                  variant="secondary"
                  className="hover:bg-secondary/80 cursor-pointer"
                >
                  View Homeworld
                </Badge>
              </Link>
            </div>
            <Separator />
          </>
        )}

        {/* People */}
        {species.people.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                People ({species.people.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {species.people.map((personUrl) => (
                  <Link
                    key={personUrl}
                    href={`/${extractCategoryFromUrl(
                      personUrl
                    )}/${extractIdFromUrl(personUrl)}`}
                  >
                    <Badge
                      variant="outline"
                      className="hover:bg-accent cursor-pointer"
                    >
                      Person {extractIdFromUrl(personUrl)}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Films */}
        {species.films.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Films ({species.films.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {species.films.map((filmUrl) => (
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
