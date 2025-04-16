const SmallAuthorList = ({ person }) => {
  const { first_name, last_name, age } = person;
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg">
      <img
        className="w-full h-40 rounded-2xl"
        src="https://fastly.picsum.photos/id/14/200/300.webp?hmac=th2Bp2FXyjmlB-rtWcMkGKE9neCZpDISeT1al0RJ0uQ"
        alt="Travel destination"
      />
      <div className="px-2 py-2">
        <div className="font-bold text-xl mb-2">
          {first_name} {last_name}
        </div>
        <p className="text-gray-700 text-base">{age}</p>
      </div>
      <div className="px-2 pt-2 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #winter
        </span>
      </div>
    </div>
  );
};

export default SmallAuthorList;
