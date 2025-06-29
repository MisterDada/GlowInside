// Modal.tsx
import React from "react";
import { Dimensions, StatusBar, StyleSheet, View } from "react-native";
import Modal from "react-native-modal";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const ModalPage = ({
  visible,
  children,
  onClose,
}: {
  visible: boolean;
  children?: React.ReactNode;
  onClose: () => void;
}) => {
  return (
    <>
      <StatusBar barStyle="default" />
      <Modal
        isVisible={visible}
        onSwipeComplete={onClose}
        swipeDirection="down"
        style={{ justifyContent: "flex-end", margin: 0 }}
      >
        <View style={styles.backdrop}>
          <View style={styles.modalContent}>{children}</View>
        </View>
      </Modal>
    </>
  );
};

export default ModalPage;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: "hsla(0, 0.00%, 23.50%, 0.13)", // semi-transparent background
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    width: "100%",
    height: "80%",
    paddingHorizontal: screenWidth * 0.1,
    borderRadius: 30,
    backgroundColor: "#FAF9F6",
    justifyContent: "center",
    alignItems: "center",
  },
});