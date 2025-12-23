import wallpapers from "../data/wallpapers";
import WallpaperCard from "./WallpaperCard";

function WallpaperSection({title = "Wallpapers" ,excludeId}) {
    const filteredWallpapers = excludeId
      ? wallpapers.filter((w) => w.id !== excludeId)
      : wallpapers;
  return (
    <section className="px-4 py-6">
      <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredWallpapers.map((wallpaper) => (
          <WallpaperCard
            key={wallpaper.id}
            id={wallpaper.id}
            src={wallpaper.src}
            description={wallpaper.description}
          />
        ))}
      </div>
    </section>
  );
}

export default WallpaperSection;
