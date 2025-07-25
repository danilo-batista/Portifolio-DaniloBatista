import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from '../Forms/ContactForm.module.scss';
import { HeroPicture } from '../Hero/HeroPicture';
import { Button } from './Button';
import { InputField } from './InputField';
import { TextAreaField } from './TextAreaField';

export function ContactForm() {
  const siteKey = import.meta.env.VITE_SITE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const serviceID = import.meta.env.VITE_SERVICE_ID;

  const [formData, setFormData] = useState({
    user_name: '',
    user_mail: '',
    user_phone: '',
    subject: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState('');
  const [showCaptcha, setShowCaptcha] = useState(false);

  const form = useRef();
  const recaptchaRef = useRef();

  useEffect(() => {
    const allFilled = Object.values(formData).every((val) => val.trim() !== '');
    setShowCaptcha(allFilled);
  }, [formData]);

  function handleChange(event) {
    const { name, value } = event.target;

    let newValue = value;

    if (name === 'user_phone') {
      const digits = value.replace(/\D/g, '');

      newValue = digits
        .replace(/^(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2')
        .slice(0, 15);
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }));
  }

  function sendEmail(event) {
    event.preventDefault();

    if (!captcha) {
      alert('⚠️ Por favor, resolva o reCAPTCHA antes de enviar.');
      return;
    }

    if (!form.current.checkValidity()) {
      form.current.reportValidity();
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

          recaptchaRef.current.reset();
          setCaptcha('');
          setFormData({
            user_name: '',
            user_mail: '',
            user_phone: '',
            subject: '',
            message: '',
          });
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
            value={formData.user_name}
            onChange={handleChange}
            required
          />

          <InputField
            label="E-mail"
            type="email"
            placeholder="sparrow@email.com"
            name="user_mail"
            value={formData.user_mail}
            onChange={handleChange}
            required
          />

          <InputField
            label="Telefone"
            type="tel"
            placeholder="(11) 98765-4321"
            name="user_phone"
            pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
            value={formData.user_phone}
            onChange={handleChange}
            required
          />

          <InputField
            label="Assunto"
            type="text"
            placeholder="Novos Projetos!"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <TextAreaField
            label="Mensagem"
            name="message"
            placeholder="Conte-me mais sobre a sua necessidade..."
            value={formData.message}
            onChange={handleChange}
            required
          />

          {showCaptcha && (
            <ReCAPTCHA
              sitekey={siteKey}
              onChange={setCaptcha}
              ref={recaptchaRef}
              className={styles.captcha}
            />
          )}

          <Button type="submit">Envie um Oi!</Button>
        </form>
      </div>
      <HeroPicture />
    </section>
  );
}
