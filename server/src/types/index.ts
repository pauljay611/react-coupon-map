interface IStore {
  ID: string;
  name: string;
  description: string;
  lat: number;
  lng: number;
}

interface ICoupon {
  ID: string;
  name: string;
  description: string;
  type: CouponType;
  dueTimestamp: number;
  image: string;
}

enum CouponType {
  PriceCut,
  Discount,
  Free,
}

interface IAccount {
  ID: string;
  name: string;
  userInfo: IUserInfo;
}

interface IUserInfo {
  address: string;
  phone: number;
}

interface ICategory {
  ID: string;
  name: string;
  description: string;
}
