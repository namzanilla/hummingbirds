import { useLocale } from 'next-intl'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import NLink from 'next-intl/link'

// @ts-ignore
export default function LocaleLayout({ children, params }) {
  const locale = useLocale()

  console.log('params', params)

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound()
  }

  return (
    <html lang={locale}>
      <body>
        <div>
          <NLink href="/" locale="uk">UK</NLink>
          |
          <NLink href="/" locale="ru">RU</NLink>
        </div>
        <div>
          <Link href="/">Home</Link>
          |
          <Link href="/about">About</Link>
        </div>
        {children}
      </body>
    </html>
  )
}
