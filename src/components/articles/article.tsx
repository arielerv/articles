import React, {FC} from "react";

import { ArticleContainer, ArticleWrapper, Description, Image } from "./styles";

const Article: FC<any> = ({article}) => (
  <ArticleContainer key={article._id}>
    <ArticleWrapper>
      <Image
        src={article.promo_items.basic.resized_urls[0].resizedUrl}
        alt="image"
      />
      <Description>{article.promo_items.basic.subtitle}</Description>
    </ArticleWrapper>
  </ArticleContainer>
);

export default Article;
