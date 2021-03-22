import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

type Props = {
  saveArticle: (article: IArticle | any) => void;
};

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>();

  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault();
    saveArticle(article);
  };

  const articleIsFetchRedux: boolean = useSelector(
    (state: ArticleState) => state.isFetch,
    shallowEqual
  );

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <button
        disabled={article === undefined || articleIsFetchRedux ? true : false}
      >
        Add article
      </button>
    </form>
  );
};
