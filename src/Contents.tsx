import affiche from "./assets/counter-strike-2.png";
import imgcard from "./assets/imgcard.jpg";
import "./Contents.css";
import "./App.css";

export default function Contents() {
  return (
    <main>
      <section id="box1">
        <article className="artcard">
          <img src={affiche} id="photo" alt="logocs " />
        </article>
        <article className="artcard" id="text">
          <p>
            Counter-Strike (CS) est une série de jeux vidéo de tir à la première
            personne dans lesquels deux équipes s'affrontent pour perpétrer ou
            empêcher un acte terroriste (attentat à la bombe, prise d'otage,
            etc.).
          </p>
        </article>
      </section>
      <section id="box2">
        <article className="artcard" id="artvj">
          <h1>Toute les Versions du jeux</h1>
          <p>
            Counter-Strike 2000 Counter-Strike: Condition Zero 2004
            Counter-Strike: Source 2004 Counter-Strike: Global Offensive 2012
            Counter-Strike 2 2023
          </p>
        </article>
        <article className="artcard" id="artjtxt">
          <h1>Nombre de joueurs </h1>
          <p>
            Joueurs simultanés (en direct) : ~1 000 000 à 1 050 000 joueurs Pic
            sur 24 heures : ~1 400 000 joueurs Moyenne mensuelle : ~930 000
            joueurs actifs
          </p>
        </article>
        <article className="artcard" id="artimgcs">
          <img src={imgcard} alt="imgcsgo" id="imgcsgo" />
        </article>
      </section>
    </main>
  );
}
