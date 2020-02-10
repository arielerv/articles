export interface ArticleInterface {
  _id: string;
  promo_items: {
    basic: {
      resized_urls: Array<{ resizedUrl: string; option: { media: string } }>;
      subtitle: string;
    };
  };
}

export type ArticlesInterface = Array<ArticleInterface> | null;
