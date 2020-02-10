import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import actionsCreator from "../../store/articles/actions";
import { ArticlesInterface } from "../../interfaces/articles";
import { getArticles } from "../../store/articles/selectors";
import { Container, Wrapper } from "./styles";
import Article from "./article";
import { isEmpty } from "../../utils/functions";

const articlesList: FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const articles: ArticlesInterface = useSelector(
    getArticles
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    dispatch(actionsCreator.fetchArticles());
  }, [dispatch]);

  return (
    <Container>
      <Wrapper>
        {!isEmpty(articles) &&
        articles?.map(article => <Article article={article} />)}
      </Wrapper>
    </Container>
  );
};

export default articlesList;
