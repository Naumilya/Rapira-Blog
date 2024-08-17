import type { ArticleInterface, CommentInterface } from '@/types/articles.types'

export default class Article implements ArticleInterface {
  constructor(
    readonly id: number,
    public imagePath: string = '',
    public title: string = '',
    public contentText: string = '',
    public postDate: string = new Date().toISOString(),
    public readingTime: number = 0,
    public comments: CommentInterface[] = []
  ) {}

  static createFrom(data: Partial<ArticleInterface>) {
    return new this(
      data.id ?? 0,
      data.imagePath ?? '',
      data.title ?? '',
      data.contentText ?? '',
      data.postDate ?? new Date().toISOString(),
      data.readingTime ?? 0,
      data.comments ?? []
    )
  }
}
