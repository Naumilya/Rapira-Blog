import type { CategoryInterface } from '@/types/articles.types'

export default class Category implements CategoryInterface {
  constructor(
    readonly id: number,
    public title: string,
    public articlesId: number[] = []
  ) {}

  static createdFrom(data: Partial<CategoryInterface>): Category {
    return new this(data.id ?? 0, data.title ?? '', data.articlesId ?? [])
  }
}
