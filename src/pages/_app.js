import Layout from '../layouts/layout.js'
import '../global.css'

export default function App({ Component, pageProps }) {
    return <Layout>
        <Component {...pageProps} />
    </Layout>
}