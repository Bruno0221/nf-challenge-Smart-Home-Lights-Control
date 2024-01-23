import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const initialLights = [
  { id: nanoid(), name: "Living Room", isOn: false },
  { id: nanoid(), name: "Kitchen", isOn: false },
  { id: nanoid(), name: "Bedroom", isOn: false },
  { id: nanoid(), name: "Bathroom", isOn: false },
  { id: nanoid(), name: "Garage", isOn: false },
  { id: nanoid(), name: "Porch", isOn: false },
  { id: nanoid(), name: "Garden", isOn: false },
  { id: nanoid(), name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialLights);
  const [allLightsOff, setAllLightsOff] = useState(null);
  const [allLightsOn, setAllLightsOn] = useState(null);
  const litLights = lights.filter((light) => light.isOn === true);

  useEffect(() => {
    if (litLights.length === 0) {
      setAllLightsOff(true);
      setAllLightsOn(false);
      return;
    }
    if (litLights.length === lights.length) {
      setAllLightsOff(false);
      setAllLightsOn(true);
      return;
    }
    setAllLightsOff(null);
    setAllLightsOn(null);
  }, [lights, litLights]);

  function handleToggleLight(id) {
    setLights(
      lights.map((light) =>
        light.id === id ? { ...light, isOn: !light.isOn } : light
      )
    );
  }

  function handleAllLightsOn() {
    setLights(
      lights.map((light) =>
        light.isOn === false ? { ...light, isOn: true } : light
      )
    );
  }

  function handleAllLightsOff() {
    setLights(
      lights.map((light) =>
        light.isOn === true ? { ...light, isOn: false } : light
      )
    );
  }

  return (
    <Layout isDimmed={allLightsOff}>
      <GlobalStyle />
      <Component
        allLightsOff={allLightsOff}
        allLightsOn={allLightsOn}
        litLights={litLights}
        onAllLightsOn={handleAllLightsOn}
        onAllLightsOff={handleAllLightsOff}
        onToggleLight={handleToggleLight}
        lights={lights}
        {...pageProps}
      />
    </Layout>
  );
}
