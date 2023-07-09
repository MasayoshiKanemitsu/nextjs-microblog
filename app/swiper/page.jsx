import Slider from "@/components/Slider/Slider";
import Container from "@/layout/Container";

const SwiperPage = () => {
  return (
    <>
      <Container>
        <Slider items={items} />
      </Container>
    </>
  );
};

export default SwiperPage;

const items = [
  { id: 1, content: "Slide 01", bg: "#f00" },
  { id: 2, content: "Slide 02", bg: "#0f0" },
  { id: 3, content: "Slide 03", bg: "#00f" },
];
