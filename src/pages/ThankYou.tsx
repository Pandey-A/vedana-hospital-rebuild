import { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { useFormData } from "@/context/FormDataContext";

const ThankYou = () => {
  const { t, language } = useLanguage();
  const { pdfToDownload, setPdfToDownload } = useFormData();

  const getLanguageParam = () => {
    switch (language) {
      case "hi":
        return "hin";
      case "mr":
        return "mar";
      default:
        return "en";
    }
  };

  const triggerPdfDownload = useCallback((path: string) => {
    const anchor = document.createElement("a");
    anchor.href = path;
    anchor.download = path.split("/").pop() || "document.pdf";
    anchor.rel = "noopener";
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  }, []);

  useEffect(() => {
    const gtag = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;

    if (!gtag) return;

    gtag("event", "conversion", {
      send_to: "AW-823179923/V2-7CLn9__YBEJP1wogD",
    });
  }, []);

  useEffect(() => {
    // Trigger PDF download if available
    if (pdfToDownload) {
      // Delay to ensure thank you page is visible first
      const timer = setTimeout(() => {
        triggerPdfDownload(pdfToDownload);
        // Clear the PDF after download
        setPdfToDownload(null);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [pdfToDownload, triggerPdfDownload, setPdfToDownload]);

  return (
    <div className="min-h-screen bg-[#FFF5F7] flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-xl w-full text-center bg-white border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl md:text-4xl font-black text-[#9B2B4E] mb-4">{t("thankyou.title")}</h1>
          <p className="text-gray-700 text-base md:text-lg mb-6">{t("thankyou.message")}</p>
          {pdfToDownload && (
            <p className="text-sm text-gray-500 mb-4">Your PDF is being downloaded...</p>
          )}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="text-xs text-gray-600 mb-2">
              <strong>Contact Domain:</strong>
            </p>
            <p className="text-sm font-mono bg-white p-2 rounded border border-gray-300">
              https://contact.vedanshahospital.com/?lan={getLanguageParam()}
            </p>
          </div>
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-lg bg-[#46A2C1] text-white font-bold px-6 py-3 hover:bg-[#3488A5] transition-colors"
          >
            {t("thankyou.back")}
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
