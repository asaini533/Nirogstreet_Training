import  Heading  from "../atoms/Heading";
import Paragraph from "../atoms/Paragraph";
import { HeaderCard, TopNavBar } from "molecules";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center m-auto w-full my-10 pb-10">
      <TopNavBar />
      <div className="self-start mx-4">
        <Heading type="h1" className="font-bold">
          Hi, Adrian
        </Heading>
        <Paragraph
          content="Explore designs, book services for your home"
          className="font-light text-sm"
        ></Paragraph>
      </div>
      <div className="w-full flex p-4 justify-between space-x-4">
        <HeaderCard
          color="#FFEBEB"
          title="Ideas"
          icon="lightbulb"
          description="1700+items"
          iconClassName="text-red-400"
          className="w-full"
        ></HeaderCard>
        <HeaderCard
          color="#E2FAE3"
          title="Articles"
          icon="file-alt"
          description="1700+items"
          iconClassName="text-blue-400"
          className="w-full"
        ></HeaderCard>
      </div>
    </div>
  );
}
