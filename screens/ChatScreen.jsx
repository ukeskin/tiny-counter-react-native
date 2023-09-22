import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { WebView } from "react-native-webview";

export default function ChatScreen(props) {
  const [loading, setLoading] = useState(false);
  const counter = props.route.params.counter;
  const allActivities = props.route.params.allActivities;

  const handleStarterChat = () => {
    setLoading(true);

    // https://plugin.tinyai.id/upsert POST
    // {
    //   "name": "string",
    //   "systemPrompt": "string",
    //   "systemKnowledge": "string",
    //   "data": "string",
    //   "key": "string"
    // }

    fetch("https://plugin.tinyai.id/upsert", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "counter",
        systemPrompt: "You can ask me questions about the counter",
        systemKnowledge: "counter",
        data: JSON.stringify({
          counter: counter,
          allActivities: allActivities,
        }),
        key: "string",
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("json", json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    handleStarterChat();
  }, []);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
        }}
      >
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Loading Chat...
        </Text>
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <WebView source={{ uri: "https://tinyai.id/counter" }} />
    </View>
  );
}
