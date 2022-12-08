import React from 'react'
import { useEffect } from 'react'
import { CommonPage, PageMeta } from '../../../components/CommonPage/CommonPage'
import htmlToReact from '../../../lib/html-to-react'
import { PostCollector, Post } from '../../../lib/post-collector'
import { DynamicRouting } from '../../../lib/dynamic-routing'

const postCollector = new PostCollector('works')
const dynamicRouting = new DynamicRouting(postCollector)

/**
 * works以下のマークダウンファイルへのパスはここに通されます。
 * @param param0
 * @returns
 */
const WorksPost = ({ post }: { post: Post }) => {
  const { title, description, img } = post.frontmatter
  const [postContent, setPostContent] = React.useState<React.ReactNode>(null)

  // HTMLに変換されたMarkdownの内容を、Reactコンポーネントに変換します。
  useEffect(() => {
    setPostContent(htmlToReact(post.content))
  }, [post.content])

  return (
    <>
      <CommonPage meta={post.frontmatter as PageMeta}>{postContent}</CommonPage>
    </>
  )
}

// アクセス可能なパスを用意する。ビルド時に実行される。
export const getStaticPaths = dynamicRouting.getStaticPaths

// パスに対応するコンテンツ(HTML)を用意する。ビルド時に実行される。
export const getStaticProps = dynamicRouting.getStaticProps

export default WorksPost