/**
 * Model for data hanlde for login API response.
 */
export interface ILoginModel {
  authenticated: boolean;
  username: string;
  error: string;
  profile: any;
  token: string;
}
