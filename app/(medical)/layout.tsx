import { VideoConfigProvider } from "../_context/VideoContext";

export default function MedicalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoConfigProvider apiUrl="https://api.clinicalvisuals.com/admin/custom-business/public/business-media">
      {children}
    </VideoConfigProvider>
  );
}
