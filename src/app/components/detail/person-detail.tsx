import Link from "next/link";
import { Person } from "@/lib/types";
import { extractIdFromUrl, extractCategoryFromUrl } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PersonDetailProps {
  person: Person;
}

export function PersonDetail({ person }: PersonDetailProps) {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl">{person.name}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Physical Characteristics */}
        <div>
          <h3 className="text-lg font-semibold mb-3">
            Physical Characteristics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Height:</span>
              <p className="font-medium">{person.height} cm</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Mass:</span>
              <p className="font-medium">{person.mass} kg</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Hair Color:</span>
              <p className="font-medium">{person.hair_color}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Skin Color:</span>
              <p className="font-medium">{person.skin_color}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Eye Color:</span>
              <p className="font-medium">{person.eye_color}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Birth Year:</span>
              <p className="font-medium">{person.birth_year}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Gender:</span>
              <p className="font-medium">{person.gender}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Homeworld */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Homeworld</h3>
          <Link
            href={`/${extractCategoryFromUrl(
              person.homeworld
            )}/${extractIdFromUrl(person.homeworld)}`}
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

        {/* Films */}
        {person.films.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Films ({person.films.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {person.films.map((filmUrl) => (
                  <Link
                    key={filmUrl}
                    href={`/${extractCategoryFromUrl(
                      filmUrl
                    )}/${extractIdFromUrl(filmUrl)}`}
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
            <Separator />
          </>
        )}

        {/* Species */}
        {person.species.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Species ({person.species.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {person.species.map((speciesUrl) => (
                  <Link
                    key={speciesUrl}
                    href={`/${extractCategoryFromUrl(
                      speciesUrl
                    )}/${extractIdFromUrl(speciesUrl)}`}
                  >
                    <Badge
                      variant="outline"
                      className="hover:bg-accent cursor-pointer"
                    >
                      Species {extractIdFromUrl(speciesUrl)}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Vehicles */}
        {person.vehicles.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Vehicles ({person.vehicles.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {person.vehicles.map((vehicleUrl) => (
                  <Link
                    key={vehicleUrl}
                    href={`/${extractCategoryFromUrl(
                      vehicleUrl
                    )}/${extractIdFromUrl(vehicleUrl)}`}
                  >
                    <Badge
                      variant="outline"
                      className="hover:bg-accent cursor-pointer"
                    >
                      Vehicle {extractIdFromUrl(vehicleUrl)}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Starships */}
        {person.starships.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Starships ({person.starships.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {person.starships.map((starshipUrl) => (
                <Link
                  key={starshipUrl}
                  href={`/${extractCategoryFromUrl(
                    starshipUrl
                  )}/${extractIdFromUrl(starshipUrl)}`}
                >
                  <Badge
                    variant="outline"
                    className="hover:bg-accent cursor-pointer"
                  >
                    Starship {extractIdFromUrl(starshipUrl)}
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
