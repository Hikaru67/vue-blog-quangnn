export const state = () => ({
  CATEGORIES: [
    'Thời sự',
    'Thế giới',
    'Kinh doanh',
    'Giải trí',
    'Thể thao',
    'Pháp',
    'Y tế',
    'Cate 7',
    'Cate 8',
    'Cate 9',
    'Cate 10',
    'Cate 11',
    'Cate 12',
  ],
  STATUS: ['No', 'Yes'],
  API_BLOG_URL: 'http://127.0.0.1:8000/api/blogs/',
  POSITIONS: [' Việt Nam', ' Châu Âu', ' Châu Á', ' Châu Mỹ'],
})

export const mutations = {
  getPosition(state, listPosition) {
    return listPosition
      .map((position) => state.POSITIONS[position - 1])
      .toString()
  },
}
