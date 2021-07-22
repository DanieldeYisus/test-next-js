import Layout from '../../components/Layout';

export default function primerPost({ data }) {
  return (
    <Layout
      title="Primer post"
      description="Primer post description"
      post
    >
      <h1>{data.id} - {data.title}</h1>
      <span>{data.body}</span>
    </Layout>
  )
}

export async function getStaticPaths() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    const paths = data.map(({ id }) => ({ params: { id: `${id}` } }));
    return {
      paths,
      fallback: false
    }
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/' + params.id);
    const data = await res.json();
    return {
      props: { data }
    }
  } catch (error) {
    console.log(error);
  }
}
