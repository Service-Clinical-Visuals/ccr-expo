import { VideoConfigProvider } from "../_context/VideoContext";
import BannerMuteButton from "../_components/BannerMuteButton";

export default function MotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <VideoConfigProvider apiUrl="https://custom.servicevisuals.com/api/website-videos">
      {children}
      <BannerMuteButton />
    </VideoConfigProvider>
  );
}