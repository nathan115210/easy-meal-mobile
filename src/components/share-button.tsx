import IconButton from "@/components/ui/icon-button";
import { Share, Alert } from "react-native";

function ShareButton() {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <IconButton
      onPress={onShare}
      iconName={{
        ios: "share-social-outline",
        android: "share-social-outline",
      }}
    />
  );
}

export default ShareButton;
