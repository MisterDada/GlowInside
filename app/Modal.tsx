// Modal.tsx
import React from 'react';
import { Modal as RNModal, StyleSheet, View } from 'react-native';

const Modal = ({ visible, children }: { visible: boolean; children?: React.ReactNode }) => {
  return (
    <RNModal
      animationType="slide"
      transparent
      visible={visible} // ✅ control visibility from parent
    >
      <View style={styles.backdrop}>
        <View style={styles.modalContent}>
          {children}
        </View>
      </View>
    </RNModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'white',
  },
});
