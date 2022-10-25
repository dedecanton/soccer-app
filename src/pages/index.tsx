import AuthLayout from '../layouts/AuthLayout';
import { NextPageWithLayout } from './_app';

const Authentication: NextPageWithLayout = () => {
  return <div></div>;
};

export default Authentication;

Authentication.getLayout = function (page) {
  return <AuthLayout>{page}</AuthLayout>;
};
