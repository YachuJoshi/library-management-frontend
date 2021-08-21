import { Profile } from "../src/pages";
import { getUserByUserID } from "../src/services";

const ProfilePage = ({ user }) => {
  return <Profile user={user} />;
};

export async function getStaticProps({ query }) {
  const { userId } = query;
  const userRes = await getUserByUserID(userId);

  return {
    props: {
      user: userRes.data,
    },
  };
}
export default ProfilePage;
