import * as actionTypes from "./actionTypes"

const initialState: ArticleState = {
  isFetch: false,
  articles: [
    {
      id: 1,
      title: "post 1",
      body:
        "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
    },
    {
      id: 2,
      title: "post 2",
      body:
        "Harum quidem rerum facilis est et expedita distinctio quas molestias excepturi sint",
    },
  ],
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
  ): ArticleState => {
    switch (action.type) {
      case actionTypes.ADD_ARTICLE_FETCH:

        return {
          ...state,
          isFetch: true,
          articles: state.articles
        }
      case actionTypes.ADD_ARTICLE:
        const newArticle: IArticle = {
          id: Math.random(), // not really unique
          title: action.article.title,
          body: action.article.body,
        }
        //TODO axios to API
        // axios.get('urlapi').then((payload)=>{
        //   payload.username
          
        //   return {
        //     ...state,
        //     isFetch: false,
        //     articles: state.articles.concat(newArticle),
        //   }
        // })
        
          return {
            ...state,
            isFetch: false,
            articles: state.articles.concat(newArticle),
          }
      case actionTypes.REMOVE_ARTICLE:
        const updatedArticles: IArticle[] = state.articles.filter(
          article => article.id !== action.article.id
        )
        return {
          ...state,
          articles: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer