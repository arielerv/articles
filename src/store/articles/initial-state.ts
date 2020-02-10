import { ArticlesInterface } from '../../interfaces/articles'

export const initialState: InitialStateInterface = {
  isLoading: false,
  data: null,
  error: null,
}

export interface InitialStateInterface {
  isLoading: boolean;
  data?: ArticlesInterface | null;
  error?: string | null;
}
