import React, { useRef } from "react";
import { StyleSheet, View, Text, TextInput, Pressable } from "react-native";

export default function InputBar({
  text,
  onChangeText,
  onSizeChange,
  onSendPressed,
}) {
  const inputRef = useRef(null);

  return (
    <View style={styles.inputBar}>
      <TextInput
        style={styles.textBox}
        ref={inputRef}
        multiline
        onChangeText={onChangeText}
        onContentSizeChange={onSizeChange}
        value={text}
        placeholder="Type a message..."
      />

      <Pressable
        style={styles.sendButton}
        onPress={() => {
          onSendPressed();
          inputRef.current?.clear();
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Send</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBar: {
    flexDirection: "row",
    paddingHorizontal: 8,
    paddingVertical: 6,
    backgroundColor: "#f9f9f9",
    alignItems: "flex-end",
  },

  textBox: {
    flex: 1,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "gray",
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "white",
    maxHeight: 100,
  },

  sendButton: {
    marginLeft: 8,
    backgroundColor: "#4CAF50",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});