export interface Block {
  id: number;
  attributes: {
    index: number;
    data: string;
    timestamp: number;
    hash: string;
  };
}

export interface Node {
  online: boolean;
  name: string;
  url: string;
  loading: boolean;
  blocks?: Block[];
}
