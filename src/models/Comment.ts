import type { CommentInterface } from '@/types/articles.types'

export default class Comment implements CommentInterface {
  readonly id: number
  userImagePath: string
  commentatorName: string
  commentText: string
  postDate: string

  constructor(
    id: number,
    userImagePath: string = '',
    commentatorName: string = '',
    commentText: string = '',
    postDate: string = new Date().toISOString()
  ) {
    this.id = id
    this.userImagePath = userImagePath
    this.commentatorName = commentatorName
    this.commentText = commentText
    this.postDate = postDate
  }
}
