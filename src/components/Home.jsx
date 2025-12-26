import wallpapers from "../data/wallpapers";
import WallpaperCard from "./WallpaperCard";
import CategoryCard from "./CategoryCard";
import categories from "../data/categories"

function Home({title = "Wallpapers" ,excludeId}) {
    const filteredWallpapers = excludeId
      ? wallpapers.filter((w) => w.id !== excludeId)
      : wallpapers;
  return (
    <>
      <section className="px-4 py-6">
        <h1 className="text-xl font-semibold text-white mb-4">
          Explore Categories
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.id}
              id={cat.id}
              title={cat.title}
              cover={cat.cover}
            />
          ))}
        </div>
      </section>

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
    </>
  );
}

export default Home;
