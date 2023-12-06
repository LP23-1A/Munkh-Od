import Layout from "@/components/Layout";
import MainBigPic from "@/components/icons/MainBigPic";
import Navbar from "@/components/Navbar";

const MainBigData = [
  {
    img: "https://s3-alpha-sig.figma.com/img/eb4f/aad2/4394e91108e011b0d07581596959713b?Expires=1702857600&Signature=TEJqgZebhD5ngGJk43qte2~qf859bguz1g9w0nc-t-7JwZKqGO9HkQ4f7UsByRTKRdqOFoXLq-GeNWVTxyF9yaI-X8jNnKzpHHPB0mwm5217XLBDvleUnawK8Q52jyuf37X~tBpedwk-oALlTZsspRn-XWzxdTRQOMwtXGLvj~Kv~0VS~Cxf7gUiI44x1oZGIcO9HQbL7oAr57JaTLqKz-5STAIIaCV4bEzUKUSd3x8o89LHrwfVdB1rnbaOm-NrwsFjsCGap2EeymdGc1fM9MLK7cYBadPJIs062VLD9cvqO4LZZ7kzDuD2FWVmWuhODVPANFGn0YJgP78jzOayAg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col gap-[100px]">
      <Navbar />
      <div className="flex justify-center">
        {MainBigData.map((element) => {
          return <MainBigPic img={element.img} />;
        })}
      </div>
    </main>
  );
}
