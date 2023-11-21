import IconButton from "@mui/material/IconButton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
export function AttractionList({ attrac, id }) {
  const Navigate = useNavigate();

  return (
    <div>
      <Card className="attraction-container">
        <img
          className="attraction-poster"
          src={attrac.coverimage}
          alt={attrac.name}
        />
        <CardContent>
          <div className="attraction-specs">
            <h2 className="attraction-name">{attrac.name}</h2>
          </div>

          <p className="attraction-summry">{attrac.detail}</p>
        </CardContent>

        <IconButton
          color="primary"
          onClick={() => Navigate(`/attractionlist/${id}`)}
        >
          <h6>LEARN MORE</h6>

          <InfoIcon></InfoIcon>
        </IconButton>
      </Card>
    </div>
  );
}
