import React from "react";
import { View, Text, Button } from "@nodegui/react-nodegui";

export default function App() {
  return (
    <View
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
    </View>
  );
}
