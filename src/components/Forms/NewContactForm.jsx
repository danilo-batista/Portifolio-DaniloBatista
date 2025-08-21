import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from '../Forms/NewContactForm.module.scss';
import { InputField } from './InputField';
import { NewButton } from './NewButton';
import { TextAreaField } from './TextAreaField';

export function NewContactForm() {
  /* Chaves aplicadas em variáveis de ambiente para uso de serviços como o Recaptcha e EmailJs  */
  const siteKey = import.meta.env.VITE_SITE_KEY;
  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const serviceID = import.meta.env.VITE_SERVICE_ID;

  /* Estados que controlam o formulário: */
  const [formData, setFormData] = useState({
    user_name: '',
    user_mail: '',
    user_phone: '',
    subject: '',
    message: '',
  });
  const [captcha, setCaptcha] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* Referências que persistem no form e no Recaptcha para poder manipulá-los. */
  const form = useRef();
  const recaptchaRef = useRef();

  /* Efeito colateral que verifica se todos os campos do formulário estão preenchidos e se o Recaptcha foi resolvido. */
  useEffect(() => {
    const allFilled = Object.values(formData).every((val) => val.trim() !== '');

    setIsFormValid(allFilled && !!captcha);

    if (allFilled && captcha) {
      setErrorMessage('');
    }
  }, [formData, captcha]);

  /* Função de validação para os campos, com um tratamento de máscara no campo Telefone. */
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

  /* Função de validação para o envio de e-mail de contato. */
  async function sendEmail(event) {
    event.preventDefault();

    if (!captcha) {
      setErrorMessage('⚠️ Por favor, resolva o reCAPTCHA antes de enviar.');
      return;
    }

    if (!form.current.checkValidity()) {
      form.current.reportValidity();
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMessage('');

      const result = await emailjs.sendForm(
        serviceID,
        templateID,
        form.current,
        publicKey,
      );

      if (result.text === 'OK') {
        setFormData({
          user_name: '',
          user_mail: '',
          user_phone: '',
          subject: '',
          message: '',
        });
        recaptchaRef.current.reset();
        setCaptcha('');
        setErrorMessage('✅ Mensagem enviada com sucesso!');
      }
    } catch (error) {
      console.error('Erro ao enviar:', error);
      setErrorMessage(
        '❌ Ocorreu um erro ao enviar a mensagem. Tente novamente.',
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className={styles.contactForm}>
      <h2 className={styles.contactForm__title}>
        Gostou do meu trabalho? Diga "Oi!" e vamos crescer juntos!
      </h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className={styles.contactForm__form}
      >
        <InputField
          label="Nome"
          type="text"
          placeholder="Seu nome"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          required
        />

        <InputField
          label="E-mail"
          type="email"
          placeholder="seunome@email.com"
          name="user_mail"
          value={formData.user_mail}
          onChange={handleChange}
          required
        />

        <InputField
          label="Telefone"
          type="tel"
          placeholder="(00) 00000-0000"
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
          placeholder="Conte-me mais sobre o assunto..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <ReCAPTCHA
          sitekey={siteKey}
          onChange={setCaptcha}
          ref={recaptchaRef}
          className={styles.contactForm__captcha}
        />

        {errorMessage && (
          <p
            className={`${styles.contactForm__message} ${
              errorMessage.includes('✅') ? styles.success : styles.error
            }`}
          >
            {errorMessage}
          </p>
        )}

        <NewButton type="submit" disabled={!isFormValid || isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Envie um Oi!'}
        </NewButton>
      </form>
    </section>
  );
}
