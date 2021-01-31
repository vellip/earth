import Head from 'next/head'
import Video from '../components/video'
import { graphqlClient } from './_app'
import { gql } from '@apollo/client'
import styles from '../styles/Home.module.css'
import { InferGetStaticPropsType } from 'next'
import Navigation from '../components/navigation'

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  try {
    const response = await graphqlClient.query({
      query: gql`
        query VideoIds {
          videoMany {
            vimeo_id
          }
        }
      `,
    })

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return {
      paths: response.data.videoMany.map((i) => `/${i.vimeo_id}`),
      fallback: false,
    }
  } catch (e) {
    console.error(e)
  }
}

export async function getStaticProps({ params }) {
  try {
    /*const response = await graphqlClient.query({
      query: gql`
        query VideoIds {
          videoById(_id: $id) {
            vimeo_id
          }
        }
      `,
      variables: { id: params.id },
    })*/

    // Pass post data to the page via props
    return { props: params }
  } catch (e) {
    console.error(e)
  }
}

export default function VideoPage({
  vimeo_id,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Video video={{ vimeo_id }} />
        <Navigation />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
