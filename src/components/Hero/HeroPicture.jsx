import styles from '../Hero/HeroPicture.module.scss';
import daniloBatistaPicture from '../../assets/images/danilo-batista.webp';

export function HeroPicture() {
  return (
    <>
      <div className={styles.container}>
        <img
          src={daniloBatistaPicture}
          alt="Foto de Danilo Batista, homem branco, careca, com barba, utilizando uma camiseta de cor vinho em um fundo bege."
          className={styles.hero__profilePicture}
        />
      </div>
    </>
  );
}
