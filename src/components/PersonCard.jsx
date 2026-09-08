// Team member card. Real photos weren't captured from the source export
// (the <img> tags were client-rendered), so this uses initials-avatars —
// swap `photo` in for a real image URL once available.
const PALETTE = [
  "from-orange-400 to-red-500",
  "from-amber-400 to-orange-500",
  "from-red-400 to-rose-500",
  "from-yellow-400 to-amber-500",
];

function colorFor(name) {
  const sum = [...name].reduce((acc, c) => acc + c.charCodeAt(0), 0);
  return PALETTE[sum % PALETTE.length];
}

function initials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function PersonCard({ name, role, photo }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {photo ? (
        <img src={photo} alt={name} className="w-20 h-20 rounded-full object-cover mx-auto mb-4" loading="lazy" />
      ) : (
        <div
          className={`w-20 h-20 rounded-full bg-gradient-to-br ${colorFor(name)} text-white flex items-center justify-center text-xl font-bold mx-auto mb-4`}
        >
          {initials(name)}
        </div>
      )}
      <h3 className="font-bold text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}
