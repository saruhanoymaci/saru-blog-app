import loading from "../assets/loading.gif"; // loading.gif'in yolu
const Loading = () => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-opacity-70 z-50"
      style={{ backdropFilter: "blur(2px)" }} // Arka planı biraz bulanıklaştırır
    >
      <img
        src={loading} // loading.gif'in yolu
        alt="Loading..."
        className="w-16 h-16"
      />
    </div>
  );
};

export default Loading;