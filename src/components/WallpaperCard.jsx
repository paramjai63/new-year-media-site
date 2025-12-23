import { useNavigate } from "react-router-dom";
import { Download, Handshake, Share2 } from "lucide-react";

function WallpaperCard({ id, src, description }) {
  const navigate = useNavigate();
  const handleDownload = (e) => {
    e.stopPropagation();

    const link = document.createElement("a");
    link.href = src;
    link.download = src.split("/").pop(); // filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = (e) => {
    e.stopPropagation();

    const shareUrl = window.location.origin + `/wallpaper/${id}`;

    if (navigator.share) {
      navigator.share({
        title: "New Year Wallpaper",
        text: "Check out this wallpaper",
        url: shareUrl,
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert("Link copied to clipboard");
    }
  };
  return (
    <div
      onClick={() => navigate(`/wallpaper/${id}`)}
      className="aspect-[9/16] rounded-xl overflow-hidden bg-slate-800 flex flex-col cursor-pointer active:scale-[0.98] transition"
    >
      {/* Image */}
      <div className="flex-1">
        <img src={src} alt="wallpaper" className="w-full h-full object-cover" />
      </div>

      {/* Bottom section */}
      <div className="p-3 bg-slate-900">
        {description && (
          <p className="text-xs text-slate-200 mb-2">{description}</p>
        )}

        <div
          className="flex justify-between text-slate-400"
          onClick={(e) => e.stopPropagation()}
        >
          <Download className="w-4 h-4" onClick={handleDownload} />
          <Share2 className="w-4 h-4"onClick={handleShare} />
        </div>
      </div>
    </div>
  );
}

export default WallpaperCard;
