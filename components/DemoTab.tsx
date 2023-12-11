import { useState } from "react";
import { Dimensions } from "react-native";
import { Inicio } from "../screens/Inicio";
import {
  AnimatePresence,
  Button,
  H5,
  SizableText,
  Stack,
  StackProps,
  TabLayout,
  Tabs,
  TabsTabProps,
  XStack,
  YStack,
  styled,
} from "tamagui";
import DetalleLugar from "../screens/DetalleLugar";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const demos = ["background", "underline"] as const;

const demosTitle: Record<(typeof demos)[number], string> = {
  background: "Background Indicator",

  underline: "Underline Indicator",
};

export const DemoTab = ({ navigation }) => {
  const [demoIndex, setDemoIndex] = useState(0);

  const demo = demos[demoIndex];

  return (
    <>
      {demo === "underline" ? (
        <TabsAdvancedUnderline />
      ) : (
        <TabsAdvancedBackground navigation={navigation} />
      )}
      <XStack
        alignItems="center"
        space
        position="absolute"
        bottom="$3"
        left="$4"
        $xxs={{ display: "none" }}
      >
        <Button
          size="$2"
          onPress={() => setDemoIndex((x) => (x + 1) % demos.length)}
        >
          {demosTitle[demo]}
        </Button>
      </XStack>
    </>
  );
};
const TabsAdvancedBackground = ({ navigation }) => {
  const [tabState, setTabState] = useState<{
    currentTab: string;
    /**
     * Layout of the Tab user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null;
    /**
     * Layout of the Tab user selected
     */
    activeAt: TabLayout | null;
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabLayout | null;
  }>({
    activeAt: null,

    currentTab: "tab1",

    intentAt: null,

    prevActiveAt: null,
  });
  const setCurrentTab = (currentTab: string) =>
    setTabState({ ...tabState, currentTab });

  const setIntentIndicator = (intentAt) =>
    setTabState({ ...tabState, intentAt });

  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt });

  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState;
  /**

   * -1: from left

   *  0: n/a

   *  1: from right

   */

  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0;
    }

    return activeAt.x > prevActiveAt.x ? -1 : 1;
  })();
  const enterVariant =
    direction === 1 ? "isLeft" : direction === -1 ? "isRight" : "defaultFade";

  const exitVariant =
    direction === 1 ? "isRight" : direction === -1 ? "isLeft" : "defaultFade";
  const handleOnInteraction: TabsTabProps["onInteraction"] = (type, layout) => {
    if (type === "select") {
      setActiveIndicator(layout);
    } else {
      setIntentIndicator(layout);
    }
  };
  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$5"
      padding="$3"
      flexDirection="column"
      activationMode="manual"
      backgroundColor="$background"
      borderRadius="$4"
      position="relative"
      alignSelf="center"
      alignItems="center"
    >
      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack
          key={currentTab}
          animation="100ms"
          x={0}
          opacity={1}
          flex={1}
        >
          {/* *************************** SCREENS AQUI *************************** */}
          <Tabs.Content value="tab1" width={windowWidth}>
            <Inicio navigation={navigation} />
          </Tabs.Content>
          <Tabs.Content value="tab2" width={windowWidth}>
            {/* <DetalleLugar /> */}
          </Tabs.Content>
          <Tabs.Content value="tab3" width={windowWidth}>
            <H5 textAlign="center">{currentTab}</H5>
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              borderRadius="$4"
              width={intentAt.width}
              height={intentAt.height}
              x={intentAt.x}
              y={intentAt.y}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              borderRadius="$4"
              theme="active"
              width={activeAt.width}
              height={activeAt.height}
              x={activeAt.x}
              y={activeAt.y}
            />
          )}
        </AnimatePresence>
        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          space="$4"
          backgroundColor="transparent"
          marginBottom="$-2"
        >
          <Tabs.Tab
            marginTop="$2"
            unstyled
            value="tab1"
            onInteraction={handleOnInteraction}
          >
            <SizableText color={currentTab === "tab1" ? "white" : "#6155CC"}>
              Inicio
            </SizableText>
          </Tabs.Tab>

          <Tabs.Tab
            marginTop="$2"
            unstyled
            value="tab2"
            onInteraction={handleOnInteraction}
          >
            <SizableText color={currentTab === "tab2" ? "white" : "#6155CC"}>
              Buscar
            </SizableText>
          </Tabs.Tab>

          <Tabs.Tab
            marginTop="$2"
            unstyled
            value="tab3"
            onInteraction={handleOnInteraction}
          >
            <SizableText color={currentTab === "tab3" ? "white" : "#6155CC"}>
              Perfil
            </SizableText>
          </Tabs.Tab>
        </Tabs.List>
      </YStack>
    </Tabs>
  );
};
const TabsAdvancedUnderline = () => {
  const [tabState, setTabState] = useState<{
    currentTab: string;
    /**
     * Layout of the Tab user might intend to select (hovering / focusing)
     */
    intentAt: TabLayout | null;
    /**
     * Layout of the Tab user selected
     */
    activeAt: TabLayout | null;
    /**
     * Used to get the direction of activation for animating the active indicator
     */
    prevActiveAt: TabLayout | null;
  }>({
    activeAt: null,

    currentTab: "tab1",

    intentAt: null,

    prevActiveAt: null,
  });
  const setCurrentTab = (currentTab: string) =>
    setTabState({ ...tabState, currentTab });

  const setIntentIndicator = (intentAt) =>
    setTabState({ ...tabState, intentAt });

  const setActiveIndicator = (activeAt) =>
    setTabState({ ...tabState, prevActiveAt: tabState.activeAt, activeAt });

  const { activeAt, intentAt, prevActiveAt, currentTab } = tabState;
  /**

   * -1: from left

   *  0: n/a

   *  1: from right

   */

  const direction = (() => {
    if (!activeAt || !prevActiveAt || activeAt.x === prevActiveAt.x) {
      return 0;
    }

    return activeAt.x > prevActiveAt.x ? -1 : 1;
  })();
  const enterVariant =
    direction === 1 ? "isLeft" : direction === -1 ? "isRight" : "defaultFade";

  const exitVariant =
    direction === 1 ? "isRight" : direction === -1 ? "isLeft" : "defaultFade";
  const handleOnInteraction: TabsTabProps["onInteraction"] = (type, layout) => {
    if (type === "select") {
      setActiveIndicator(layout);
    } else {
      setIntentIndicator(layout);
    }
  };
  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      orientation="horizontal"
      size="$4"
      height={150}
      flexDirection="column"
      activationMode="manual"
      backgroundColor="$background"
      borderRadius="$4"
    >
      <YStack>
        <AnimatePresence>
          {intentAt && (
            <TabsRovingIndicator
              width={intentAt.width}
              height="$0.5"
              x={intentAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {activeAt && (
            <TabsRovingIndicator
              theme="active"
              active
              width={activeAt.width}
              height="$0.5"
              x={activeAt.x}
              bottom={0}
            />
          )}
        </AnimatePresence>

        <Tabs.List
          disablePassBorderRadius
          loop={false}
          aria-label="Manage your account"
          borderBottomLeftRadius={0}
          borderBottomRightRadius={0}
          paddingBottom="$1.5"
          borderColor="$color3"
          borderBottomWidth="$0.5"
          backgroundColor="transparent"
        >
          <Tabs.Tab
            unstyled
            padding="$5"
            value="tab1"
            onInteraction={handleOnInteraction}
          >
            <SizableText>Profile</SizableText>
          </Tabs.Tab>

          <Tabs.Tab
            unstyled
            padding="$5"
            value="tab2"
            onInteraction={handleOnInteraction}
          >
            <SizableText>Connections</SizableText>
          </Tabs.Tab>

          <Tabs.Tab
            unstyled
            padding="$5"
            value="tab3"
            onInteraction={handleOnInteraction}
          >
            <SizableText>Notifications</SizableText>
          </Tabs.Tab>
        </Tabs.List>
      </YStack>
      <AnimatePresence
        exitBeforeEnter
        enterVariant={enterVariant}
        exitVariant={exitVariant}
      >
        <AnimatedYStack
          key={currentTab}
          animation="100ms"
          x={0}
          opacity={1}
          flex={1}
        >
          <Tabs.Content
            value={currentTab}
            forceMount
            flex={1}
            justifyContent="center"
          >
            <H5 textAlign="center">{currentTab}</H5>
          </Tabs.Content>
        </AnimatedYStack>
      </AnimatePresence>
    </Tabs>
  );
};
const TabsRovingIndicator = ({
  active,
  ...props
}: { active?: boolean } & StackProps) => {
  return (
    <YStack
      position="absolute"
      backgroundColor="#8B66E5"
      opacity={0.7}
      animation="100ms"
      enterStyle={{
        opacity: 0,
      }}
      exitStyle={{
        opacity: 0,
      }}
      {...(active && {
        backgroundColor: "$color8",
        opacity: 0.6,
      })}
      {...props}
    />
  );
};
const AnimatedYStack = styled(YStack, {
  variants: {
    isLeft: { true: { x: -25, opacity: 0 } },

    isRight: { true: { x: 25, opacity: 0 } },

    defaultFade: { true: { opacity: 0 } },
  } as const,
});
