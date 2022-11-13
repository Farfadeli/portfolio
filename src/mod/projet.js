import "../style/projet.css";
import CardMod from "./CardMod";
const ProjetMod = () => {
  return (
    <div className="projet">
      <h2 className="title-projet">MES PROJETS</h2>
      <div className="defil-projet">
        <CardMod
          name="ALIX"
          tech="react-native"
          description="jeu d'alcool avec diverse action à efffectuer afin de ne pas boire. Coder en react-Native. Seulement pour les vrai fan d'alcool"
        />
      </div>
    </div>
  );
};

export default ProjetMod;
