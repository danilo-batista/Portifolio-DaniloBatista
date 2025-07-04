import { Link } from 'react-router-dom';

import styles from '../Experience/ExperienceList.module.scss';

export function KnowledgeList() {
  return (
    <>
      <article className={styles.article}>
        <ul>
          <li className={styles.experience__container}>
            <Link to="http://gru.ifsp.edu.br">
              <img
                src={`/images/brand-ifsp_logo.png`}
                alt="Logotipo Instituto Federal São Paulo"
                className={styles.experience__brand}
              />
            </Link>

            <div className={styles.experience__jobContext}>
              <p className={styles.experience__jobPeriod}>
                jan de 2014 ~ jun de 2020
              </p>
              <h3 className={styles.experience__jobTitle}>
                Análise e Desenvolvimento de Sistemas
              </h3>
              <hr className={styles.experience__jobTitleDivisor} />
              <p className={styles.experience__description}>
                <strong>Instituto Federal São Paulo</strong>
                <br />
                Orientação a objetos, metodologia ágil (SCRUM, Kanban), BPMN,
                engenharia de software, modelagem de banco de dados e linguagens
                (Git, HTML, CSS, Bootstrap, JavaScript, Java, PHP e SQL).
              </p>
              <br />
              <p className={styles.experience__description}>
                <strong>Projeto final:</strong> "Acessibilização do Instituto
                Federal São Paulo - Câmpus Guarulhos para usuários com surdez
                por meio da sinalização física".
              </p>
              <br />
              <p className={styles.experience__description}>
                <strong>Competências:</strong> Garantia de qualidade de software
                · Programação orientada a objetos (POO) · Engenharia de Software
                · Modelagem de banco de dados · Estruturas de dados · Pesquisa
                Operacional Competências: Garantia de qualidade de software ·
                Programação orientada a objetos (POO) · Engenharia de Software ·
                Modelagem de banco de dados · Estruturas de dados · Pesquisa
                Operacional
              </p>
            </div>
          </li>

          <li className={styles.experience__container}>
            <Link to="https://www.usjt.br">
              <img
                src={`/images/brand-usjt_logo.png`}
                alt="Logotipo Universidade São Judas Tadeu"
                className={styles.experience__brand}
              />
            </Link>

            <div className={styles.experience__jobContext}>
              <p className={styles.experience__jobPeriod}>
                jan de 2004 ~ dez de 2007
              </p>
              <h3 className={styles.experience__jobTitle}>Design Gráfico</h3>
              <hr className={styles.experience__jobTitleDivisor} />
              <p className={styles.experience__description}>
                <strong>Universidade São Judas</strong>
                <br />
                Bacharel | Teorias de design, tipografia, cores, embalagens e
                softwares (macOS, Windows, Photoshop, InDesign, Illustrator e
                CorelDraw).
              </p>
              <br />
              <p className={styles.experience__description}>
                <strong>Projeto final:</strong> "O design de embalagem para a
                criação e o desenvolvimento de marcas próprias direcionadas ao
                segmento de autosserviço".
              </p>
            </div>
          </li>

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
