import type { ArticleInterface, CommentInterface } from '@/types/articles.types'

export default class Article implements ArticleInterface {
  readonly id: number
  imagePath: string
  title: string
  contentText: string
  postDate: string
  readingTime: number
  comments: CommentInterface[]

  constructor(
    id: number,
    imagePath: string = '',
    title: string = '',
    contentText: string = '',
    postDate: string = new Date().toISOString(),
    readingTime: number = 0,
    comments: CommentInterface[] = []
  ) {
    this.id = id
    this.imagePath = imagePath
    this.title = title
    this.contentText = contentText
    this.postDate = postDate
    this.readingTime = readingTime
    this.comments = comments
  }
}
