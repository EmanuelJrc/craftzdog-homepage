import { useRouter } from 'next/router'
import * as en from '../locales/en'
import * as hr from '../locales/hr'
const Lang = page => {
  const router = useRouter()
  const { locale } = router
  const tAux = locale === 'en' ? en : hr
  const t = tAux[page]
  return t
}
export default Lang
