import { Profile } from "../src/pages";
import { fetchUserByUserId, fetchStudentFeeDetail } from "../src/services";

const ProfilePage = ({ user, fee }) => {
  return <Profile user={user} fee={fee} />;
};

export async function getServerSideProps({ query }) {
  const { userId } = query;
  const userRes = await fetchUserByUserId(userId);
  const feeRes = await fetchStudentFeeDetail(userId);

  return {
    props: {
      user: userRes.data,
      fee: feeRes.data,
    },
  };
}

export default ProfilePage;
