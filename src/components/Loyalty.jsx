import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { FAB, Portal, Dialog, Button, Text } from "react-native-paper";
import ChatView from "./ChatView";

export default function App() {
  const [visible, setVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text>Hello from Rich</Text>

      <Portal>
        <Dialog visible={visible} onDismiss={() => setVisible(false)}>
          <Dialog.Title>Order Bot</Dialog.Title>

          <Dialog.Content style={{ height: 400 }}>
            <ChatView />
          </Dialog.Content>

          <Dialog.Actions>
            <Button onPress={() => setVisible(false)}>Dismiss</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      <FAB
        style={styles.fab}
        icon="plus"
        onPress={() => setVisible(true)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
});