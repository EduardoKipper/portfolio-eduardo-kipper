import { useState, type FormEvent } from 'react'
import { ExternalLink, Mail } from 'lucide-react'
import { SectionHeading, SocialLink } from '../../components'
import { profile } from '../../data/profile'
import styles from './ContactPage.module.css'

function ContactPage() {
  const [validationMessage, setValidationMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setValidationMessage('Dados validados localmente. Nenhuma mensagem foi enviada.')
  }

  return (
    <div className={styles.page}>
      <SectionHeading
        id="contact-title"
        level={1}
        title="Contato"
        description="Canais disponíveis para conversar sobre projetos e oportunidades."
      />

      <div className={styles.layout}>
        <section className={styles.contactDetails} aria-labelledby="contact-details-title">
          <h2 id="contact-details-title">Dados de contato</h2>
          <p>{profile.location}</p>
          <ul>
            <li><SocialLink link={profile.email} icon={<Mail size={20} />} /></li>
            <li><SocialLink link={profile.github} icon={<ExternalLink size={20} />} /></li>
            <li><SocialLink link={profile.linkedin} icon={<ExternalLink size={20} />} /></li>
          </ul>
        </section>

        <section className={styles.formSection} aria-labelledby="contact-form-title">
          <h2 id="contact-form-title">Formulário de contato</h2>
          <p className={styles.notice} role="note">
            Este formulário ainda não envia mensagens. A integração será adicionada posteriormente.
          </p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label>
              Nome
              <input name="name" type="text" autoComplete="name" required />
            </label>
            <label>
              E-mail
              <input name="email" type="email" autoComplete="email" required />
            </label>
            <label>
              Assunto
              <input name="subject" type="text" required />
            </label>
            <label>
              Mensagem
              <textarea name="message" rows={6} minLength={10} required />
            </label>
            <button type="submit">Validar formulário (sem envio)</button>
            {validationMessage ? <p className={styles.status} role="status">{validationMessage}</p> : null}
          </form>
        </section>
      </div>
    </div>
  )
}

export default ContactPage
