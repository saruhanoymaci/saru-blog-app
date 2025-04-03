import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify CSS dosyasını import edin
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-right" // Bildirimlerin konumu
        autoClose={3000} // Otomatik kapanma süresi (ms)
        hideProgressBar={false} // İlerleme çubuğunu göster
        newestOnTop={false} // Yeni bildirimleri üstte göster
        closeOnClick // Tıklamayla kapat
        rtl={false} // Sağdan sola dil desteği
        pauseOnFocusLoss // Odak kaybında duraklat
        draggable // Sürüklenebilirlik
        pauseOnHover // Üzerine gelindiğinde duraklat
        theme="light" // Tema (light, dark, colored)
      />
    </>
  );
};

export default App;
