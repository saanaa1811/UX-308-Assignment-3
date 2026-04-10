import { StyleSheet, View, Text } from "react-native";

export default function MessageBubble({ direction, text }) {
  const isLeft = direction === "left";

  const bubbleStyles = isLeft
    ? [styles.messageBubble, styles.messageBubbleLeft]
    : [styles.messageBubble, styles.messageBubbleRight];

  const bubbleTextStyle = isLeft
    ? styles.messageBubbleTextLeft
    : styles.messageBubbleTextRight;

  return (
    <View style={styles.row}>
      <View style={bubbleStyles}>
        <Text style={bubbleTextStyle}>{text}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: 10,
  },

  messageBubble: {
    borderRadius: 8,
    marginTop: 8,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },

  messageBubbleLeft: {
    backgroundColor: "#525750",
    alignSelf: "flex-start",
  },

  messageBubbleRight: {
    backgroundColor: "#fffb00",
    alignSelf: "flex-end",
  },

  messageBubbleTextLeft: {
    color: "white",
  },

  messageBubbleTextRight: {
    color: "black",
  },
});