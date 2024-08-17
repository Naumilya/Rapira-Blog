export interface ArticleInterface {
  id: number
  imagePath: string
  title: string
  contentText: string
  postDate: string
  readingTime: number
  comments: CommentInterface[]
}

export interface CategoriesInterface {
  id: number
  title: string
  articlesId: number[]
}

export interface CommentInterface {
  id: number
  userImagePath: string
  commentatorName: string
  commentText: string
  postDate: string
}
