import { VideoConfigProvider } from "../_context/VideoContext";

export default function MotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoConfigProvider apiUrl="https://custom.servicevisuals.com/api/website-videos">
      {children}
    </VideoConfigProvider>
  );
}