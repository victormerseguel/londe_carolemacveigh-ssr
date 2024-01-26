import styles from "./Method.module.css";

import photos from "../assets/photos.png";
import fire from "../assets/photo-fire.png";
import earth from "../assets/photo-earth.png";
import air from "../assets/photo-air.png";

const Method = () => {
  return (
    <section className={styles.method_wrap}>
      <h3>Méthode de Travail</h3>
      <div className={styles.method_content}>
        <div className={styles.photos}>
          <img src={photos} alt="" />
        </div>
        <div className={styles.text}>
          <p>
            Elle n’a qu’un seul objectif: vous guider dans cette belle rencontre
            avec vous-même.
          </p>
          <p>
            Cela passe avant tout par une écoute pure et bienveillante de ma
            part et une intention clairement énoncée ou pensée de votre part.
          </p>
          <p>
            Votre intention est le point de départ clé de chaque séance. Elle
            représente l’accord que vous passez avec vous-même.
          </p>
          <p>
            En tant que Sophorlogue Caycédienne, j’utilise comme base la Méthode
            Caycedo®. Le Sophrologue Caycédien est un praticien qui accompagne
            des personnes en individuel ou en groupe pour leur apprendre à
            optimiser leurs capacités et/ou à s’adapter aux différentes
            situations auxquelles ils ont à faire face durant leur existence.
          </p>
          <p>
            La Sophrologie est un « entraînement du corps et de l’esprit pour
            développer sérénité et mieux-être basé sur des techniques de
            relaxation, de visualisation et d’activation du corps et de l’esprit
            ». Elle s’adresse à toute personne cherchant à améliorer son
            existence et développer mieux-être et détente.
          </p>
          <p>
            Chaque étape de la Méthode Caycedo® a ses objectifs propres et se
            compose d’une série d’exercices basés sur la concentration,
            l’imagination et la contemplation. Certains exercices utilisent les
            cinq sens pour développer la conscience contemplative, ce qui nous
            amène à être plus conscients du moment présent. D’autres techniques
            utilisent l’imagination pour aider à anticiper positivement le futur
            et à mettre en valeur les sentiments positifs du passé.
          </p>
          <p>
            Au cours des séances, la personne va apprendre à devenir plus
            consciente d’elle-même, à être « sujet » de son corps et de son
            esprit ; elle prendra peu à peu les rênes de sa vie, en s’éloignant
            des automatismes et des conditionnements, de la tyrannie du
            matérialisme et de l’urgence quotidienne. D’un point de vue
            corporel, ces exercices réveillent des sensations de vitalité et
            aident à relâcher les tensions. Ils procurent un sentiment de
            sérénité, de bien-être physique et mental qui va permettre de sortir
            de l’état de stress permanent. Au niveau mental, ils activent la
            concentration, la lucidité et la créativité de l’individu, lui
            permettant ainsi d’échapper aux préoccupations quotidiennes.
          </p>
          <p>
            La pratique régulière aidera à canaliser les émotions négatives et
            se chargera d’éveiller les émotions positives.
          </p>
          <p>
            Cet entraînement va tendre progressivement vers la conquête d’une
            façon différente « d’être dans le monde », vers une mutation de la
            conscience ordinaire en une conscience harmonieuse et positive. Une
            existence pleine de vitalité qui se caractérisera par une attitude
            positive de l’individu, envers lui-même et face au monde
            environnant.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Method;
