import * as actionTypes from "./actionTypes"

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.ADD_ARTICLE,
    article,
  }

  const actionFetch: ArticleAction = {
    type: actionTypes.ADD_ARTICLE_FETCH,
    article,
  }

  return (dispatch: DispatchType) => {
    dispatch(actionFetch)
    setTimeout(() => {
      dispatch(action)
    }, 5000)
  }
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: actionTypes.REMOVE_ARTICLE,
    article,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 5000)
  }
}