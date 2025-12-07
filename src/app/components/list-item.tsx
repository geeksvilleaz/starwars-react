import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  SWAPIEntity,
  Person,
  Planet,
  Film,
  Species,
  Vehicle,
  Starship,
} from "@/lib/types";

interface ListItemProps {
  item: SWAPIEntity;
  category: string;
  id: string;
}

function getItemName(item: SWAPIEntity): string {
  if ("title" in item) {
    return item.title;
  }
  return item.name;
}

function getPreviewInfo(
  item: SWAPIEntity,
  category: string
): { label: string; value: string }[] {
  switch (category) {
    case "people": {
      const person = item as Person;
      return [
        { label: "Gender", value: person.gender },
        { label: "Birth Year", value: person.birth_year },
      ];
    }
    case "planets": {
      const planet = item as Planet;
      return [
        { label: "Climate", value: planet.climate },
        { label: "Population", value: planet.population },
      ];
    }
    case "films": {
      const film = item as Film;
      return [
        { label: "Director", value: film.director },
        { label: "Release Date", value: film.release_date },
      ];
    }
    case "species": {
      const species = item as Species;
      return [
        { label: "Classification", value: species.classification },
        { label: "Language", value: species.language },
      ];
    }
    case "vehicles": {
      const vehicle = item as Vehicle;
      return [
        { label: "Model", value: vehicle.model },
        { label: "Manufacturer", value: vehicle.manufacturer },
      ];
    }
    case "starships": {
      const starship = item as Starship;
      return [
        { label: "Model", value: starship.model },
        { label: "Class", value: starship.starship_class },
      ];
    }
    default:
      return [];
  }
}

export default function ListItem({ item, category, id }: ListItemProps) {
  const name = getItemName(item);
  const previewInfo = getPreviewInfo(item, category);

  return (
    <Link href={`/${category}/${id}`} className="block h-full">
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50 cursor-pointer">
        <CardHeader>
          <CardTitle className="text-xl line-clamp-2">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {previewInfo.map((info) => (
              <div key={info.label} className="flex items-center gap-2">
                <Badge variant="secondary" className="text-xs shrink-0">
                  {info.label}
                </Badge>
                <span className="text-sm text-muted-foreground truncate">
                  {info.value}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
