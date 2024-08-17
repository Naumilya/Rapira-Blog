import type { CommentInterface } from '@/types/articles.types'

export default class Comment implements CommentInterface {
  constructor(
    readonly id: number,
    public userImagePath: string = '',
    public commentatorName: string = '',
    public commentText: string = '',
    public postDate: string = new Date().toISOString(),
    public articleId: number
  ) {}

  static createdFrom(data: Partial<CommentInterface>): Comment {
    return new this(
      data.id ?? 0,
      data.userImagePath ?? '',
      data.commentatorName ?? '',
      data.commentText ?? '',
      data.postDate ?? new Date().toISOString(),
      data.articleId ?? 0
    )
  }
}
