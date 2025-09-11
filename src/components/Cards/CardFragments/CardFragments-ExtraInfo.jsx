import { useEffect, useRef } from 'react';
import styles from './CardFragments-ExtraInfo.module.scss';

export function CardExtraInfo({ resume, extraProjects, extraContent }) {
  const detailsRef = useRef(null);

  /* Adiciona um listener global que verifica se o clique foi fora e se foi, fecha-o. */
  useEffect(() => {
    function handleClickOutside(event) {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        detailsRef.current.removeAttribute('open');
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {resume?.length > 0 && (
        <details ref={detailsRef} className={styles.card__infoResume}>
          <summary>Clique aqui para saber mais sobre {extraContent}.</summary>

          <ul className={styles.card__infoActivities}>
            {resume.map((resume) => (
              <li className={styles.card__infoActivitiesList} key={resume}>
                {resume}
              </li>
            ))}
          </ul>

          {extraProjects?.length > 0 && (
            <p className={styles.card__infoDescriptionTopic}>
              <span>Projeto especial desenvolvido com êxito:</span>
            </p>
          )}

          <ul>
            {extraProjects?.map((extraProjects) => (
              <li
                className={styles.card__infoActivitiesList}
                key={extraProjects}
              >
                {extraProjects}
              </li>
            ))}
          </ul>
        </details>
      )}
    </>
  );
}
