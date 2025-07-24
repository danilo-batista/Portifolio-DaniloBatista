import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import styles from '../Forms/ContactForm.module.scss';
import { HeroPicture } from '../Hero/HeroPicture';
import { Button } from './Button';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';

export function ContactForm() {
  const form = useRef();

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const serviceID = import.meta.env.VITE_SERVICE_ID;

  function sendEmail(event) {
    event.preventDefault();
    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.form__title}>
          Gostou do meu trabalho? Diga "Oi!" e vamos crescer juntos!
        </h3>
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <InputField
            label="Nome"
            type="text"
            placeholder="Jack Sparrow"
            name="user_name"
            required
          />

          <InputField
            label="E-mail"
            type="email"
            placeholder="sparrow@email.com"
            name="user_mail"
            required
          />

          <InputField
            label="Telefone"
            type="tel"
            placeholder="(11) 98765-4321"
            name="user_phone"
            pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
            required
          />

          <InputField
            label="Assunto"
            type="text"
            placeholder="Parceria"
            name="subject"
            required
          />

          <TextAreaField
            label="Mensagem"
            name="message"
            placeholder="It was a dark and stormy night..."
            required
          />

          <Button type="submit">Envie um Oi!</Button>
        </form>
      </div>
      <HeroPicture />
    </section>
  );
}
