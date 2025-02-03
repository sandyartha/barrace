import RacingBars from "racing-bars/react";

export default function App() {
  /** @type {import('racing-bars').Options} */
  const options = {
    dataUrl: "https://racing-bars.hatemhosny.dev/data/population.csv",
    dataTransform: (data) =>
      data.map((d) => ({
        ...d,
        icon: `https://flagsapi.com/${d.code}/flat/64.png`,
      })),
    title: "World Population in 60 Years",
    subTitle: "Country Population in millions",
    caption: "Source: World Bank",
    showIcons: true,
    labelsPosition: "inside",
  };

  return <RacingBars className="race" {...options}>Loading...</RacingBars>;
}
