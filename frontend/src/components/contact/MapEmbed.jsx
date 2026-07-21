import { companyInfo } from "../../data/companyInfo";
import "./MapEmbed.css";

const MapEmbed = () => {
  return (
    <div className="map-embed">
      <iframe
        title="Company Location"
        src={companyInfo.mapEmbedUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default MapEmbed;
