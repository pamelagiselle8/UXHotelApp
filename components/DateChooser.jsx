import { Button, View, Paragraph, H5, useWindowDimensions } from "tamagui";
import { useState } from "react";
import { Text, Modal, Dimensions } from "react-native";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

const windowWidth = Dimensions.get("window").width;

export function DateChooser({ fechaInicio, callbackActualizarFecha }) {
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const startDate = getFormatedDate(fechaInicio, "YYYY/MM/DD");
  // const startDate = fechaInicio;

  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState(startDate);

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
  };

  return (
    <View>
      <View alignItems="center">
        <Button
          width="$12"
          marginTop="$2.5"
          theme="active"
          onPress={handleOnPressStartDate}
        >
          <Paragraph size={"$5"}>
            {selectedStartDate === "" ? startDate : selectedStartDate}
          </Paragraph>
        </Button>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openStartDatePicker}
      >
        <View alignContent="center" position="absolute" bottom="$0">
          <DatePicker
            mode="calendar"
            minimumDate={startDate}
            selected={startedDate}
            onDateChanged={handleChangeStartDate}
            onSelectedChange={(date) => {
              setSelectedStartDate(date);
              callbackActualizarFecha(date);
            }}
            options={{
              textHeaderColor: "#8B66E5",
              textDefaultColor: "black",
              selectedTextColor: "white",
              mainColor: "#8B66E5",
              textSecondaryColor: "black",
              borderColor: "#8B66E5",
            }}
          ></DatePicker>

          <Button
            borderRadius="$0"
            theme="active"
            backgroundColor={"#8B66E5"}
            onPress={handleOnPressStartDate}
            width={windowWidth}
            height="$5"
            alignSelf="center"
          >
            <Paragraph color="white" size={"$5"}>
              Aceptar
            </Paragraph>
          </Button>
        </View>
      </Modal>
    </View>
  );
}

export default DateChooser;
