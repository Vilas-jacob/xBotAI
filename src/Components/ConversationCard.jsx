import { Box, Stack, Typography, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import Avatar from "../assets/avatar.png";
import ThumbsUp from "../assets/Thumbsup.png";
import ThumbsDown from "../assets/Thumbsdown.png";
import { format } from "date-fns";
import Ai from "../assets/Icon.png";

function ConversationCard(
  { chatDetails, readOnly = false,updateChat,
  setSelectedChatId,showFeedbackModal }
  
) {
  const [isRating, setIsRating] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    if (isRating) {
      updateChat((prev) =>
        prev.map((item) => {
          if (item.id == chatDetails.id) {
            return { ...item, rating: rating || 0 };
          }
          return item;
        })
      );
    }
  }, [isRating, rating, chatDetails.id, updateChat]);
  return (
    <>
      <Stack
        direction={"row"}
        p={{ xs: 1, sm: 2, md: 3 }}
        spacing={{ xs: 1, sm: 2, md: 3 }}
        borderRadius={5}
        boxShadow={"0 0 5px rgba(0,0,0,0.2)"}
        bgcolor={readOnly ? "primary.main" : "primary.light"}
        alignItems={"center"}
      >
        <Stack>
          <Box
            component={"img"}
            src={chatDetails.type == "AI" ? Ai : Avatar}
            borderRadius={"50%"}
            height={{ xs: 30, sm: 40, md: 60 }}
            width={{ xs: 30, sm: 40, md: 60 }}
          />
        </Stack>
        <Stack>
          <Typography variant="heading" fontWeight={700}>
            <span>
                 {chatDetails.type == "AI" ? "Soul AI" : "You"}
            </span>
           
          </Typography>
          <Typography fontSize={{ xs: 12, sm: 14, md: 16 }}>
            {chatDetails.text}
          </Typography>
          <Stack direction={"row"} gap={2} alignItems={"center"}>
            <Typography
              color={"text.secondary"}
              fontSize={{ xs: 8, sm: 10, md: 12 }}
            >
              {format(chatDetails.time, "hh:mm a")}
            </Typography>
            {chatDetails.type == "AI" && !readOnly && (
              <Stack direction={"row"} spacing={2}>
                <Box
                  component={"img"}
                  src={ThumbsUp}
                  onClick={() => setIsRating((prev) => !prev)}
                  sx={{cursor:'pointer'}}
                />
                <Box
                  component={"img"}
                  src={ThumbsDown}
                  onClick={() => {
                    setSelectedChatId(chatDetails.id);
                    showFeedbackModal(chatDetails.id);
                  }}
                  sx={{cursor:'pointer'}}
                />
              </Stack>
            )}
          </Stack>

              {(isRating || chatDetails.rating > 0) && chatDetails.type === "AI" && (
                    <Box pt={{ xs: 1, md: 2 }}>
                        <Typography component={'legend'} fontSize={{ xs: 10, md: 12 }} mb={0.5}>
                            {readOnly ? 'Rating:' : 'Rate this response:'}
                        </Typography>
                        <Rating
                            name="simple-controlled"
                            value={chatDetails.rating > 0 ? chatDetails.rating : rating}
                            onChange={(event, newValue) => {
                                setRating(newValue);
                            }}
                            readOnly={readOnly}
                        />
                    </Box>
                )}
                {chatDetails.feedback && (
                    <Typography pt={1} fontSize={{ xs: 10, md: 16 }}>
                        <Box component={'span'} fontWeight={600}>Feedback:</Box>
                        <Box component={'span'}>{` ${chatDetails.feedback}`}</Box>
                    </Typography>
                )}
        </Stack>
      </Stack>
    </>
  );
}

export default ConversationCard;
