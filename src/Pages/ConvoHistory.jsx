import { Typography, Box, Stack, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import ConversationCard from "../Components/ConversationCard";
import FilterComponent from "../Components/ConversationFilter";
import SideBar from "../Components/SideBar";
import Navbar from "../Components/NavBar";

export default function ConvoHistory() {
  const [conversations, setConversations] = useState([]);
  const [filteredConversations, setFilteredConversations] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("chatHistory");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setConversations(parsed);
        setFilteredConversations(parsed);
      } catch (err) {
        console.error("Failed to parse stored chat history", err);
        setConversations([]);
        setFilteredConversations([]);
      }
    }
  }, []);

  return (
    <Box
      height={"100vh"}
      overflow={"hidden"}
      sx={{
        display: "flex",
      }}
    >
      <SideBar />
      <Box
        flexGrow={1}
        p={{ xs: 2, md: 3 }}
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            boxShadow: "inset 0 0 8px rgba(0,0,0,0.1)",
            borderRadius: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "rgba(151, 133, 186,0.4)",
            borderRadius: "8px",
          },
        }}
      >
        <Navbar />

        <Typography variant="h2" textAlign={"center"} mb={3}>
          Conversation History
        </Typography>

        {conversations.length > 0 && (
          <FilterComponent
            allConversations={conversations}
            updateFilteredConversations={setFilteredConversations}
          />
        )}

        {conversations.length === 0 && (
          <Typography
            textAlign={"center"}
            p={3}
            bgcolor={"primary.light"}
            borderRadius={2}
          >
            No saved conversations.
          </Typography>
        )}

        {conversations.length > 0 && filteredConversations.length === 0 && (
          <Typography
            textAlign={"center"}
            p={3}
            bgcolor={"primary.light"}
            borderRadius={2}
          >
            No matching conversations found.
          </Typography>
        )}

        {filteredConversations.length > 0 && (
          <Stack
            spacing={4}
            divider={
              <Divider sx={{ borderColor: "primary.bg", opacity: 0.4 }} />
            }
          >
            {filteredConversations.map((conversationEntry, index) => (
              <Box key={index}>
               
                <Typography variant="subtitle2" color="text.secondary" mb={1}>
                  {new Date(conversationEntry.datetime).toLocaleString()}
                </Typography>
                {conversationEntry.chat.map((chatMessage, idx) => (
                  <ConversationCard
                    key={idx}
                    chatDetails={{
                      ...chatMessage,
                      feedback: chatMessage.feedback || "", 
                      rating: chatMessage.rating || 0, 
                    }}
                    updateChat={setFilteredConversations} 
                    setSelectedChatId={() => {}} 
                    showFeedbackModal={() => {}} 
                  />
                ))}
              </Box>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
