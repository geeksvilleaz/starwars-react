import { BrowseMenu } from "./components/browse-menu";

export default function Home() {
  return (
    <div className="space-y-8">
      <div className="space-y-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Welcome to Star Wars Data Browser
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Explore the Star Wars universe through SWAPI data. Choose a category
          from the menu to start browsing information about people, planets,
          films, species, vehicles, and starships.
        </p>
      </div>

      {/* Mobile browse menu - visible only on small screens */}
      <div className="md:hidden">
        <BrowseMenu />
      </div>
    </div>
  );
}
