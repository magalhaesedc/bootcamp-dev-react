export default function OnlineOffline({ isOnline = true }) {
  const className = isOnline
    ? "bg-green-300 p-2 font-bold"
    : "bg-red-300 p-2 font-bold";
  return <span className={className}>{isOnline ? "Online" : "Offline"}</span>;
}
