import { Link } from 'react-router-dom';

import styles from '../Experience/Experience.module.scss';

export function Experience() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.section__title}>Experiências</h2>
          <p className={styles.section__description}>
            Conheça minha trajetória profissional.
          </p>
        </div>
        <div className={styles.container}>
          <article className={styles.article}>
            <ul>
              <li className={styles.experience__container}>
                <Link to="https://turmadamonica.uol.com.br/">
                  <img
                    src={`/images/brand-mspestudios_logo.webp`}
                    alt="Logotipo MSP Estudios"
                    className={styles.experience__brand}
                  />
                </Link>

                <div className={styles.experience__jobContext}>
                  <p className={styles.experience__jobPeriod}>
                    abr de 2014 ~ dez de 2024
                  </p>
                  <h3 className={styles.experience__jobTitle}>
                    Letrista - Designer Gráfico
                  </h3>
                  <hr className={styles.experience__jobTitleDivisor} />
                  <p className={styles.experience__description}>
                    Estúdio de quadrinhos responsável pela criação e expansão do
                    Universo da Turma da Mônica.
                  </p>

                  <details className={styles.experience__resume}>
                    <summary>Saiba mais</summary>
                    <ul>
                      <li className={styles.resume__listItems}>
                        Criei balões, títulos e onomatopeias customizadas para
                        histórias em quadrinhos e livros didáticos.
                      </li>
                      <li className={styles.resume__listItems}>
                        Ilustrei histórias temáticas com o tema "Grandes
                        Paródias do Cinema".
                      </li>
                      <li className={styles.resume__listItems}>
                        Realizei a vetorização de diversas artes do papel para o
                        meio digital.
                      </li>
                    </ul>
                    <p className={styles.resume__listItemsTopic}>
                      Projeto especial desenvolvido com êxito:
                    </p>
                    <ul>
                      <li className={styles.resume__listItems}>
                        Implementei um projeto técnico de atualização de
                        ferramentas gráficas que otimizou o tempo de produção
                        das histórias em quadrinhos e facilitou a expansão para
                        mercados internacionais por meio da personalização dos
                        diálogos em diferentes idiomas.
                      </li>
                    </ul>
                  </details>
                </div>
              </li>
            </ul>
          </article>
        </div>
      </section>
    </>
  );
}

/*
<section className={styles.section}>
  <div className={styles.container}>
    
    <article>
      <ul>
        <li className={styles.experience__container}>
          <Link to="https://turmadamonica.uol.com.br/">
            <img
              src={`/images/brand-mspestudios_logo.webp`}
              alt="Logotipo MSP Estudios"
              className={styles.experience__brand}
            />
          </Link>
          <div className={styles.experience__jobContext}>
            <p className={styles.experience__jobPeriod}>
              abr de 2014 - dez de 2024
            </p>
            <h3 className={styles.experience__jobTitle}>
              Letrista - Designer Gráfico
            </h3>
            <p>
              Estúdio de quadrinhos responsável pela criação e expansão do
              Universo da Turma da Mônica.
            </p>
            <details className={styles.experience__resume}>
              <summary>Saiba mais</summary>
              <ul>
                <li className={styles.resume__listItems}>
                  Criei balões, títulos e onomatopeias customizadas para
                  histórias em quadrinhos e livros didáticos.
                </li>
                <li className={styles.resume__listItems}>
                  Ilustrei histórias temáticas com o tema "Grandes Paródias do
                  Cinema".
                </li>
                <li className={styles.resume__listItems}>
                  Realizei a vetorização de diversas artes do papel para o meio
                  digital.
                </li>

                <p className={styles.resume__listItemsTopic}>
                  Projeto especial desenvolvido com êxito:
                </p>
                <li className={styles.resume__listItems}>
                  Implementei um projeto técnico de atualização de ferramentas
                  gráficas que otimizou o tempo de produção das histórias em
                  quadrinhos e facilitou a expansão para mercados internacionais
                  por meio da personalização dos diálogos em diferentes idiomas.
                </li>
              </ul>
            </details>
          </div>
        </li>

        <li className={styles.experience__container}>
          <Link to="https://www.kalunga.com.br/">
            <img
              src={`/images/brand-kalunga-pb.png`}
              alt="Logotipo Kalunga"
              className={styles.experience__brand}
            />
          </Link>
          <div className={styles.experience__jobContext}>
            <p className={styles.experience__jobPeriod}>
              ago de 2012 - mar de 2014
            </p>
            <h3 className={styles.experience__jobTitle}>
              Analista de Embalagens Senior
            </h3>
            <p>Rede especializada em comércio de papelaria e eletrônicos.</p>
            <details className={styles.experience__resume}>
              <summary>Saiba mais</summary>
              <ul>
                <li className={styles.resume__listItems}>
                  Atualizei layouts de embalagens dos produtos de marca própria.
                </li>
                <li className={styles.resume__listItems}>
                  Realizei estudos de viabilidade de materiais gráficos, como
                  embalagens, manuais de instruções e materiais de ponto de
                  venda.
                </li>
                <li className={styles.resume__listItems}>
                  Coordenei a equipe interna de designers e produtores gráficos.
                </li>
                <li className={styles.resume__listItems}>
                  Orientei fornecedores localizados em outros países.
                </li>
              </ul>
            </details>
          </div>
        </li>

        <li className={styles.experience__container}>
          <Link to="https://www.multilaser.com.br/">
            <img
              src={`/images/brand-grupoMulti-color.svg`}
              alt="Logotipo Grupo Multi"
              className={styles.experience__brand}
            />
          </Link>
          <div className={styles.experience__jobContext}>
            <p className={styles.experience__jobPeriod}>
              jan de 2006 - jan de 2012
            </p>
            <h3 className={styles.experience__jobTitle}>Designer Gráfico</h3>
            <p>
              Empresa especializada em suprimentos de informática e eletrônicos.
            </p>
            <details className={styles.experience__resume}>
              <summary>Saiba mais</summary>
              <ul>
                <li className={styles.resume__listItems}>
                  Desenvolvi embalagens de acessórios de informática e cartuchos
                  de impressora.
                </li>
                <li className={styles.resume__listItems}>
                  Criei projetos de comunicação interna em parceria com a área
                  de Recursos Humanos.
                </li>
                <li className={styles.resume__listItems}>
                  Ofereci, por meio de materiais gráficos, todo o suporte à
                  equipe comercial.
                </li>
                <li className={styles.resume__listItems}>
                  Gerenciei a equipe interna de designers.
                </li>
                <li className={styles.resume__listItems}>
                  Orientei fornecedores localizados em outros países.
                </li>
                <li className={styles.resume__listItems}>
                  Realizei visitas técnicas a gráficas, validando as parcerias
                  em conjunto com a área de compras.
                </li>
                <li className={styles.resume__listItems}>
                  Inspecionei embalagens importadas diretamente no centro de
                  distribuição.
                </li>
                <li className={styles.resume__listItems}>
                  Desenvolvi o design de embalagens para diversas linhas de
                  produtos da empresa.
                </li>
                <li className={styles.resume__listItems}>
                  Apoiei tecnicamente o redesign da marca principal, realizado
                  por uma agência externa de branding, em embalagens e produtos.
                </li>
                <li className={styles.resume__listItems}>
                  Criei materiais de divulgação em formato de e-mail marketing
                  para o time de vendas.
                </li>
                <p className={styles.resume__listItemsTopic}>
                  Projeto especial desenvolvido com êxito:
                </p>
                <li className={styles.resume__listItems}>
                  Liderei o projeto de redesign de toda a linha de embalagens
                  com a equipe de designers, integrando diversas áreas
                  envolvidas, desde os fornecedores até o time de vendas,
                  atingindo os seguintes objetivos:
                  <br />
                  1) Aumento da visibilidade e relevância dos produtos.
                  <br />
                  2) Recuperação e ampliação do espaço anteriormente perdido
                  para concorrentes nos pontos de venda.
                </li>
                <li className={styles.resume__listItems}>
                  Dirigi a parte artística dos catálogos de produtos,
                  transformando-os nas principais ferramentas de conversão de
                  vendas.
                </li>
              </ul>
            </details>
          </div>
        </li>

        <li className={styles.experience__container}>
          <Link to="https://alfaflex.com.br/">
            <img
              src={`/images/brand-alfaflex-color.jpg`}
              alt="Logotipo Alfaflex"
              className={styles.experience__brand}
            />
          </Link>
          <div className={styles.experience__jobContext}>
            <p className={styles.experience__jobPeriod}>
              set de 2002 - dez de 2005
            </p>
            <h3 className={styles.experience__jobTitle}>
              Técnico Gráfico em Pré-Impressão
            </h3>
            <p>
              Gráfica responsável pela produção de painéis adesivos e circuitos
              impressos flexíveis para produtos eletrônicos, utilizando o
              sistema serigráfico.
              <br />
              <span>
                Obs.: Recentemente, a empresa passou por uma mudança e é
                conhecida como
                <Link to="https://alfaflex.com.br/"> Alfaflex</Link>.
              </span>
            </p>
            <details className={styles.experience__resume}>
              <summary>Saiba mais</summary>
              <ul>
                <li className={styles.resume__listItems}>
                  Arte-finalizei digitalmente diversos painéis adesivos,
                  circuitos impressos e teclados de membrana a partir de
                  amostras físicas e desenhos técnicos.
                </li>
                <li className={styles.resume__listItems}>
                  Determinei o processo gráfico destes produtos em conformidade
                  com as necessidades dos clientes.
                </li>
                <li className={styles.resume__listItems}>
                  Criei documentações de processos, atualizei e diagramei
                  diversos outros documentos internos ativos na área de
                  Desenvolvimento de Produtos Gráficos, em conformidade com a
                  norma ISO9001, melhorando seu entendimento e uso.
                </li>
                <p className={styles.resume__listItemsTopic}>
                  Projeto especial desenvolvido com êxito:
                </p>
                <li className={styles.resume__listItems}>
                  Criei uma escala física de cores "Condugraf", reduzindo custos
                  e aumentando a produtividade, tanto na relação Vendas e
                  Clientes quanto no processo de Produção Gráfica de toda a
                  empresa.
                </li>
              </ul>
            </details>
          </div>
        </li>
      </ul>
    </article>
  </div>
</section>
*/
