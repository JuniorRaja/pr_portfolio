type ProfileCardProps = {
  avatarUrl: string;
  name: string;
  bio: string;
  location: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  name,
  bio,
  location,
}) => {
  return (
    <div className="bg-gray-800 shadow-lg rounded-lg p-6 text-gray-200">
      <img
        src={avatarUrl}
        alt="Avatar"
        className="w-32 h-32 rounded-full mx-auto border-4 border-indigo-500"
      />
      <h2 className="text-2xl font-extrabold text-center mt-4 text-gray-100">
        {name}
      </h2>
      <p className="text-center mt-2 text-gray-400">
        {bio || "No bio available"}
      </p>
      <p className="text-center mt-2 text-gray-500">
        {location || "Location not specified"}
      </p>
    </div>
  );
};

export default ProfileCard;
