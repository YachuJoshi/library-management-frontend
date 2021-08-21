import { Profile } from "../src/pages";
import { fetchUserByUserId } from "../src/services";

const ProfilePage = ({ user }) => {
  return <Profile user={user} />;
};

export async function getServerSideProps({ query }) {
  const { userId } = query;
  const userRes = await fetchUserByUserId(userId);

  return {
    props: {
      user: userRes.data,
    },
  };
}

export default ProfilePage;
