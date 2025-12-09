//User Details
export interface IUserDetails {
  name: string;
  email: string;
}

//List Names configuration
export interface IListNames {
  FeedBack: string;
}

//Toaster Interface
export interface IToaster {
  iconName: string;
  ClsName: string;
  type: "Warning" | "Success" | "Alert";
  msg: string;
  image?: string;
}
