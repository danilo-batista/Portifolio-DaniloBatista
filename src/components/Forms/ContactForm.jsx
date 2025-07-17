import styles from '../Forms/ContactForm.module.scss';
import { HeroPicture } from '../Hero/HeroPicture';
import { Button } from './Button';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';

export function ContactForm() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <h3 className={styles.form__title}>
            Gostou do meu trabalho? Diga "Oi!" e vamos crescer juntos!
          </h3>
          <div className={styles.form__contactData}>
            <InputField
              label="Nome"
              placeholder="Como você gostaria de ser chamado?"
            />
            <InputField label="E-mail" placeholder="Seu e-mail vai aqui" />
            <TextAreaField
              label="Mensagem"
              placeholder="It was a dark and stormy night..."
            />
          </div>
          <Button type="submmit">Envie um Oi!</Button>
        </form>
      </div>
      <HeroPicture />
    </section>
  );
}
