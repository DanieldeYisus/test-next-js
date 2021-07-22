import Link from 'next/link';
import Layout from '../components/Layout';

export default function about() {
  return (
    <Layout
      title="About"
      description="About description"
    >
      <h1>About</h1>
      <Link href="/blog">
        <a>Ir a blog</a>
      </Link>
    </Layout>
  )
}
