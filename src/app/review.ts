export interface MReview {

  response_flags: {
    response_code: any;
    error_msg: boolean;
    error_code: any;
  };
  reviews: {
    confidence: any[];
    review: any[];
    positive_review: any[];
  };
}
