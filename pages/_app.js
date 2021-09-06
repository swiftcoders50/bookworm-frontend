import 'tailwindcss/tailwind.css'
import '../globalStyles.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} style={{overflow: 'hidden'}}/>
}

export default MyApp
