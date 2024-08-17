import type { CategoriesInterface } from '@/types/articles.types'

export default class Categories implements CategoriesInterface {
  readonly id: number
  title: string
  articlesId: number[]

  constructor(id: number, title: string, articlesId: number[] = []) {
    this.id = id
    this.title = title
    this.articlesId = articlesId
  }
}
