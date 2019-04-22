import { callFunc } from './ConfigUrl';
import { API_USER } from './Constants.api';

export const recommendApi= ({ 
  tinhTrang,
  pageIndex,
  pageSize,
  tuKhoa,
  CongKhai }) => {
  const params = {
    tinhTrang,
    pageIndex,
    pageSize,
    tuKhoa,
    CongKhai
  }
  return callFunc[API_USER.recommend.method](API_USER.recommend.service + API_USER.recommend.functionUrl, params);
}
