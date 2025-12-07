import Link from "next/link";
import { Film } from "@/lib/types";
import { extractIdFromUrl, extractCategoryFromUrl } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface FilmDetailProps {
  film: Film;
}

export function FilmDetail({ film }: FilmDetailProps) {
  return (
    <Card className="max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-3xl md:text-4xl">{film.title}</CardTitle>
        <p className="text-muted-foreground">Episode {film.episode_id}</p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Opening Crawl */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Opening Crawl</h3>
          <p className="text-sm leading-relaxed italic">{film.opening_crawl}</p>
        </div>

        <Separator />

        {/* Production Details */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Production Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-muted-foreground">Director:</span>
              <p className="font-medium">{film.director}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">Producer:</span>
              <p className="font-medium">{film.producer}</p>
            </div>
            <div>
              <span className="text-sm text-muted-foreground">
                Release Date:
              </span>
              <p className="font-medium">{film.release_date}</p>
            </div>
          </div>
        </div>

        <Separator />

        {/* Characters */}
        {film.characters.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Characters ({film.characters.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {film.characters.map((characterUrl) => (
                  <Link
                    key={characterUrl}
                    href={`/${extractCategoryFromUrl(
                      characterUrl
                    )}/${extractIdFromUrl(characterUrl)}`}
                  >
                    <Badge
                      variant="outline"
                      className="hover:bg-accent cursor-pointer"
                    >
                      Character {extractIdFromUrl(characterUrl)}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Planets */}
        {film.planets.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Planets ({film.planets.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {film.planets.map((planetUrl) => (
                  <Link
                    key={planetUrl}
                    href={`/${extractCategoryFromUrl(
                      planetUrl
                    )}/${extractIdFromUrl(planetUrl)}`}
                  >
                    <Badge
                      variant="outline"
                      className="hover:bg-accent cursor-pointer"
                    >
                      Planet {extractIdFromUrl(planetUrl)}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
            <Separator />
          </>
        )}

        {/* Starships */}
        {film.starships.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Starships ({film.starships.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {film.starships.map((starshipUrl) => (
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
            <Separator />
          </>
        )}

        {/* Vehicles */}
        {film.vehicles.length > 0 && (
          <>
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Vehicles ({film.vehicles.length})
              </h3>
              <div className="flex flex-wrap gap-2">
                {film.vehicles.map((vehicleUrl) => (
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

        {/* Species */}
        {film.species.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-3">
              Species ({film.species.length})
            </h3>
            <div className="flex flex-wrap gap-2">
              {film.species.map((speciesUrl) => (
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
        )}
      </CardContent>
    </Card>
  );
}
