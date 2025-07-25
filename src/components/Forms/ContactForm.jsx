import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from '../Forms/ContactForm.module.scss';
import { HeroPicture } from '../Hero/HeroPicture';
import { Button } from './Button';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';

export function ContactForm() {
  const form = useRef();

  const recaptchaRef = useRef();
  const [captcha, setCapcha] = useState('');
  const siteKey = import.meta.env.VITE_SITE_KEY;

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const serviceID = import.meta.env.VITE_SERVICE_ID;

  function sendEmail(event) {
    event.preventDefault();

    if (!captcha) {
      alert('⚠️ Por favor, resolva o reCAPTCHA antes de enviar.');
      return;
    }

    emailjs
      .sendForm(serviceID, templateID, form.current, {
        publicKey: publicKey,
      })
      .then(
        (result) => {
          alert('✅ Mensagem enviada com sucesso!');
          console.log('Email enviado:', result.text);

          // Limpa captcha e formulário
          recaptchaRef.current.reset();
          setCaptcha('');
          form.current.reset();
        },
        (error) => {
          console.error('Erro ao enviar:', error.text);
          alert('❌ Ocorreu um erro ao enviar a mensagem.');
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

          <ReCAPTCHA
            sitekey={siteKey}
            onChange={setCapcha}
            ref={recaptchaRef}
            className={styles.captcha}
          />

          <Button type="submit">Envie um Oi!</Button>
        </form>
      </div>
      <HeroPicture />
    </section>
  );
}
