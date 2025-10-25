import React from "react";
import { Window, View, Text, Button } from "@nodegui/react-nodegui";
import type { WindowProps } from "@nodegui/react-nodegui/dist/components/Window/RNWindow";

const Container = View as unknown as React.ComponentType<any>;
const MainWindow = Window as unknown as React.ComponentType<
  WindowProps & { children?: React.ReactNode }
>;

export default function App() {
  return (
    <MainWindow
      windowTitle="NodeGUI Démo"
      minSize={{ width: 400, height: 300 }}
      visible
    >
      <Container
        style={`
        flex: 1;
        align-items: center;
        justify-content: center;
        background-color: #1a1a1f;
      `}
      >
        <Text style="font-size: 18px; margin-bottom: 10px;">
          👋 Bonjour NodeGUI !
        </Text>
        <Button
          text="Cliquez-moi"
          on={{ clicked: () => console.log("Bouton cliqué !") }}
        />
      </Container>
    </MainWindow>
  );
}
