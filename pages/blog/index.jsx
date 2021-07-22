import Link from 'next/link';
import Layout from '../../components/Layout';

export default function index({ data }) {
  return (
    <Layout
      title="Blog"
      description="Blog description"
    >
      <h1>Post</h1>
      {data.map(({ id, title, body }) => (
        <div key={id}>
          <h3>
            <Link href={`/blog/${id}`}>
              <a>{id} - {title}</a>
            </Link>
          </h3>
          <span>{body}</span>
        </div>
      ))}
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return {
      props: { data }
    }
  } catch (error) {
    console.log(error);
  }
}
