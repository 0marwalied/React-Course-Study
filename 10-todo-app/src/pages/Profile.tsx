import useAuthenticatedQuery from "../hooks/useAuthenticatedQuery";
import { getLoggedInUserData } from "../utils/auth";

const ProfilePage = () => {
  const userData = getLoggedInUserData();
  const { data } = useAuthenticatedQuery({
    url: "users/me",
    queryKey: ["profile"],
    config: {
      headers: {
        Authorization: `Bearer ${userData!.jwt}`,
      },
    },
  });

  return (
    <div className="w-2xl border-2 flex p-4 rounded-lg">
      <div className="flex flex-col space-y-3">
        <h1 className="text-2xl font-bold">Profile</h1>
        <p className="text-sm text-gray-500">
          This is your profile page. Here you can view and manage your profile
          information.
        </p>
        <p className="text-sm font-semibold text-black-500">
          Username: {data?.username}
        </p>
        <p className="text-sm font-semibold text-black-500">
          Email: {data?.email}
        </p>
        <p className="text-sm font-semibold text-black-500">
          Created At: {new Date(data?.createdAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default ProfilePage;
