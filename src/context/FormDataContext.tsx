import { createContext, ReactNode, useContext, useState } from "react";

type FormDataContextValue = {
  pdfToDownload: string | null;
  setPdfToDownload: (pdf: string | null) => void;
};

const FormDataContext = createContext<FormDataContextValue | undefined>(undefined);

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [pdfToDownload, setPdfToDownload] = useState<string | null>(null);

  return (
    <FormDataContext.Provider value={{ pdfToDownload, setPdfToDownload }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);

  if (!context) {
    throw new Error("useFormData must be used within a FormDataProvider");
  }

  return context;
};
