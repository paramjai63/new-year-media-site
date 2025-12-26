import { useNavigate } from "react-router-dom";

function CategoryCard({ id, title, cover }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/category/${id}`)}
      className="relative h-40 rounded-xl overflow-hidden cursor-pointer group"
    >
      <img
        src={cover}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-105 transition"
      />

      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
    </div>
  );
}

export default CategoryCard;
