import { notFound } from "next/navigation";
import { getItemByUrl, extractCategoryFromUrl } from "@/lib/api";
import {
  Person,
  Planet,
  Film,
  Species,
  Vehicle,
  Starship,
  SWAPIEntity,
} from "@/lib/types";
import { PersonDetail } from "@/app/components/detail/person-detail";
import { PlanetDetail } from "@/app/components/detail/planet-detail";
import { FilmDetail } from "@/app/components/detail/film-detail";
import { SpeciesDetail } from "@/app/components/detail/species-detail";
import { VehicleDetail } from "@/app/components/detail/vehicle-detail";
import { StarshipDetail } from "@/app/components/detail/starship-detail";

interface DetailPageProps {
  params: Promise<{
    category: string;
    id: string;
  }>;
}

// Map category names to their API endpoints
const categoryMap: Record<string, string> = {
  people: "people",
  planets: "planets",
  films: "films",
  species: "species",
  vehicles: "vehicles",
  starships: "starships",
};

export default async function DetailPage({ params }: DetailPageProps) {
  const { category, id } = await params;

  // Validate category
  if (!categoryMap[category]) {
    notFound();
  }

  try {
    // Construct the SWAPI URL
    const url = `https://swapi.dev/api/${categoryMap[category]}/${id}/`;

    // Fetch the item data
    const item = await getItemByUrl<SWAPIEntity>(url);

    // Render the appropriate detail component based on category
    switch (category) {
      case "people":
        return <PersonDetail person={item as Person} />;
      case "planets":
        return <PlanetDetail planet={item as Planet} />;
      case "films":
        return <FilmDetail film={item as Film} />;
      case "species":
        return <SpeciesDetail species={item as Species} />;
      case "vehicles":
        return <VehicleDetail vehicle={item as Vehicle} />;
      case "starships":
        return <StarshipDetail starship={item as Starship} />;
      default:
        notFound();
    }
  } catch (error) {
    console.error("Error fetching item:", error);
    notFound();
  }
}
