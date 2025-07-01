import { Link } from 'react-router-dom';

import styles from '../Experience/ExperienceList.module.scss';

export function KnowledgeList() {
  return (
    <>
      <article className={styles.article}>
        <ul>
          <li className={styles.experience__container}>
            <Link to="https://sp.senai.br/unidade/grafica/">
              <img
                src={`/images/brand-senai_logo.png`}
                alt="Logotipo SENAI Theobaldo de Nigris"
                className={styles.experience__brand}
              />
            </Link>

            <div className={styles.experience__jobContext}>
              <p className={styles.experience__jobPeriod}>
                jul de 2001 ~ jun de 2003
              </p>
              <h3 className={styles.experience__jobTitle}>
                Técnico Gráfico em Pré-Impressão
              </h3>
              <hr className={styles.experience__jobTitleDivisor} />
              <p className={styles.experience__description}>
                <strong>SENAI Theobaldo de Nigris</strong>
                <br />
                Técnico | Produção Gráfica
              </p>
            </div>
          </li>

          <li className={styles.experience__container}>
            <Link to="https://eteccamargoaranha.cps.sp.gov.br/">
              <img
                src={`/images/brand-eteca_logo.png`}
                alt="Logotipo ETEC Professor Camargo Aranha"
                className={styles.experience__brand}
              />
            </Link>

            <div className={styles.experience__jobContext}>
              <p className={styles.experience__jobPeriod}>
                jan de 2002 ~ jun de 2002
              </p>
              <h3 className={styles.experience__jobTitle}>
                Técnico em Auxiliar de Informática
              </h3>
              <hr className={styles.experience__jobTitleDivisor} />
              <p className={styles.experience__description}>
                <strong>ETE Professor Camargo Aranha</strong>
                <br />
                Técnico | SQL, Lógica de Programação
              </p>
            </div>
          </li>
        </ul>
      </article>
    </>
  );
}
