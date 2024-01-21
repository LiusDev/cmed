import { Trans } from "@/components/common";
import { MainLayout } from "@/components/layout";
import { Banner } from "@/components/recruitment";
import { Grid } from "@mantine/core";

const recruitment = [
  {
    title: "KỸ SƯ TỰ ĐỘNG HÓA LẬP TRÌNH PLC",
    link: "ky-su-tu-dong-hoa",
    deadline: "26/01/2024",
  },
  {
    title: "KỸ SƯ TỰ ĐỘNG HÓA LẬP TRÌNH PLC",
    link: "ky-su-tu-dong-hoa",
    deadline: "26/01/2024",
  },
  {
    title: "KỸ SƯ TỰ ĐỘNG HÓA LẬP TRÌNH PLC",
    link: "ky-su-tu-dong-hoa",
    deadline: "26/01/2024",
  },
  {
    title: "KỸ SƯ TỰ ĐỘNG HÓA LẬP TRÌNH PLC",
    link: "ky-su-tu-dong-hoa",
    deadline: "26/01/2024",
  },
];

const Recruitment = () => {
  return (
    <MainLayout>
      <Banner />
      <h1 className="mx-40 mt-10 text-2xl font-medium py-5 border-b-[1px] border-[#000] uppercase">
        <Trans text="recruitment.title" />
      </h1>
      {recruitment.length && (
        <Grid className="px-40 py-20 w-full">
          {recruitment.map((post) => {
            return (
              <Grid.Col span={5} className="">
                <h2>{post.title}</h2>
              </Grid.Col>
            );
          })}
        </Grid>
      )}
      {!recruitment.length && (
        <div className="px-40 py-20">
          <Trans text="recruitment.noData" />
        </div>
      )}
    </MainLayout>
  );
};

export default Recruitment;
