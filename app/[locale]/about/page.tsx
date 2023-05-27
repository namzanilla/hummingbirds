import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('About');
  return <h1>{t('About us')}</h1>;
}
