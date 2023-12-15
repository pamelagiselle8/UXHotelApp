import { Check, ChevronDown, ChevronUp } from "@tamagui/lucide-icons";
import { useMemo, useState, useEffect } from "react";
import { getLugares } from "../API/LugaresAPI";
import {
  Adapt,
  FontSizeTokens,
  Label,
  Select,
  SelectProps,
  Sheet,
  View,
  XStack,
  YStack,
  getFontSize,
} from "tamagui";

export function ComboBox({ callbackCategoria }) {
  const [lugares, setLugares] = useState([]);
  const categorias = [...new Set(lugares.map((lugar) => lugar.categoria))];
  const items = categorias.map((categoria, index) => ({
    name: categoria,
    id: index,
  }));

  // console.log(items);
  useEffect(() => {
    const fetchDatos = async () => {
      const lugaresData = await getLugares();
      setLugares(lugaresData);
    };
    fetchDatos();
  }, []);

  const [val, setVal] = useState("");

  return (
    <Select
      id="categoria"
      value={val}
      onValueChange={(value) => {
        setVal;
        callbackCategoria(value);
      }}
      disablePreventBodyScroll
    >
      <Select.Trigger width={220} iconAfter={<ChevronDown color="#6155CC" />}>
        <Select.Value placeholder="Seleccionar categoría" color={"#6155CC"} />
      </Select.Trigger>
      <Adapt when="sm" platform="touch">
        <Sheet
          native={false}
          modal
          dismissOnSnapToBottom
          animationConfig={{
            type: "spring",
            damping: 20,
            mass: 0.82,
            stiffness: 350,
          }}
        >
          <Sheet.Frame>
            <Sheet.ScrollView>
              <Adapt.Contents />
            </Sheet.ScrollView>
          </Sheet.Frame>

          <Sheet.Overlay
            animation="lazy"
            enterStyle={{ opacity: 0 }}
            exitStyle={{ opacity: 0 }}
          />
        </Sheet>
      </Adapt>
      <Select.Content zIndex={200000}>
        <Select.ScrollUpButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronUp size={20} />
          </YStack>
        </Select.ScrollUpButton>
        <Select.Viewport>
          <Select.Group>
            <Select.Label color={"#6155CC"}>
              Seleccione una categoría
            </Select.Label>
            {useMemo(
              () =>
                items.map((item, i) => {
                  return (
                    <Select.Item index={i} key={item.name} value={item.name}>
                      <Select.ItemText>{item.name}</Select.ItemText>
                      <Select.ItemIndicator marginLeft="auto">
                        <Check size={16} color="#6155CC" />
                      </Select.ItemIndicator>
                    </Select.Item>
                  );
                }),
              [items]
            )}
          </Select.Group>
        </Select.Viewport>
        <Select.ScrollDownButton
          alignItems="center"
          justifyContent="center"
          position="relative"
          width="100%"
          height="$3"
        >
          <YStack zIndex={10}>
            <ChevronDown size={20} />
          </YStack>
        </Select.ScrollDownButton>
      </Select.Content>
    </Select>
  );
}

export default ComboBox;
