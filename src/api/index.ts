import Article from '@/models/Article'
import Category from '@/models/Category'
import Comment from '@/models/Comment'
import type { CommentInterface } from '@/types/articles.types'

export default {
  getArticles(): Article[] {
    const comments = this.getComments()
    const items = [
      {
        id: 1,
        title: 'Статья 1',
        contentText: 'Содержание статьи 1',
        imagePath: '/src/assets/images/articles/card1.jfif',
        postDate: '',
        readingTime: 5
      },
      {
        id: 2,
        title: 'Статья 2',
        contentText: 'Содержание статьи 2',
        imagePath: '/src/assets/images/articles/card2.jfif',
        postDate: '',
        readingTime: 3
      },
      {
        id: 3,
        title: 'Статья 3',
        contentText: 'Содержание статьи 3',
        imagePath: '/src/assets/images/articles/card3.jfif',
        postDate: '',
        readingTime: 7
      },
      {
        id: 4,
        title: 'Статья 4',
        contentText: 'Содержание статьи 4',
        imagePath: '/src/assets/images/articles/card4.jfif',
        postDate: '',
        readingTime: 4
      },
      {
        id: 5,
        title: 'Статья 5',
        contentText: 'Содержание статьи 5',
        imagePath: '/src/assets/images/articles/card5.jfif',
        postDate: '',
        readingTime: 2
      },
      {
        id: 6,
        title: 'Статья 6',
        contentText: 'Содержание статьи 6',
        imagePath: '/src/assets/images/articles/card6.jfif',
        postDate: '',
        readingTime: 6
      },
      {
        id: 7,
        title: 'Статья 7',
        contentText: 'Содержание статьи 7',
        imagePath: '/src/assets/images/articles/card7.jfif',
        postDate: '',
        readingTime: 3
      },
      {
        id: 8,
        title: 'Статья 8',
        contentText: 'Содержание статьи 8',
        imagePath: '/src/assets/images/articles/card8.jfif',
        postDate: '',
        readingTime: 8
      },
      {
        id: 9,
        title: 'Статья 9',
        contentText: 'Содержание статьи 9',
        imagePath: '/src/assets/images/articles/card9.jfif',
        postDate: '',
        readingTime: 9
      },
      {
        id: 10,
        title: 'Статья 10',
        contentText: 'Содержание статьи 10',
        imagePath: '/src/assets/images/articles/card10.jfif',
        postDate: '',
        readingTime: 10
      },
      {
        id: 11,
        title: 'Статья 11',
        contentText: 'Содержание статьи 11',
        imagePath: '/src/assets/images/articles/card11.jfif',
        postDate: '',
        readingTime: 11
      }
    ]

    return items.map((item) => {
      const article = Article.createFrom(item)
      article.comments = comments.filter((comment) => comment.articleId === article.id)
      return article
    })
  },

  getComments(): Comment[] {
    const items = [
      {
        id: 1,
        articleId: 1,
        commentText: 'Комментарий к статье 1',
        commentatorName: 'Иван',
        userImagePath: '',
        postDate: ''
      },
      {
        id: 2,
        articleId: 2,
        commentText: 'Комментарий к статье 2',
        commentatorName: 'Мария',
        userImagePath: '',
        postDate: ''
      },
      {
        id: 3,
        articleId: 2,
        commentText: 'Комментарий к статье 2',
        commentatorName: 'Илья',
        userImagePath: '',
        postDate: ''
      },
      {
        id: 4,
        articleId: 3,
        commentText: 'Комментарий к статье 3',
        commentatorName: 'Настя',
        userImagePath: '',
        postDate: ''
      },
      {
        id: 5,
        articleId: 4,
        commentText: 'Комментарий к статье 4',
        commentatorName: 'Максим',
        userImagePath: '',
        postDate: ''
      }
    ]

    return items.map((item) => Comment.createdFrom(item))
  },

  getCategories(): Category[] {
    const items = [
      { id: 1, title: 'Город', articlesId: [9] },
      { id: 2, title: 'Природа', articlesId: [2, 3, 4, 5, 6, 7] },
      { id: 3, title: 'Люди', articlesId: [1, 6, 8] },
      { id: 4, title: 'Животные', articlesId: [2, 4, 6, 7] },
      { id: 5, title: 'Еда', articlesId: [10] },
      { id: 6, title: 'Архитектура', articlesId: [11] },
      { id: 7, title: 'Искусство', articlesId: [3, 5, 9] }
    ]

    return items.map((item) => Category.createdFrom(item))
  },

  addComment(commentData: Partial<CommentInterface>): Comment | null {
    if (commentData) {
      const newComment = Comment.createdFrom(commentData)
      // Здесь можно добавить логику отправки на сервер
      console.log('Комментарий добавлен:', newComment)
      return newComment
    }
    return null
  }
}
