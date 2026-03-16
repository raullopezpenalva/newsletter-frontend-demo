export type SubscribeRequest = {
  email: string
  userCreated: boolean
}

export type SubscribeResponse = {
  id: string
  email: string
  status: string
  message: string
  createdAt: string
}

export type FieldError = {
  field: string;
  message: string;
};

export type ApiError = {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
  details?: FieldError[];
};

export type SubscribeConfirmationResponse = {
  id: string
  email: string
  status: string
  message: string
  verifiedAt: string
}

export type UnsubscribeLink = {
  email: string
  unsubscribeUrl: string
}

export type UnsubscribeLinksResponse = {
  generatedAt: string
  count: number
  links: UnsubscribeLink[]
}