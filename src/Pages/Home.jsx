import { Box, Stack } from "@mui/material";
import InitialChat from "../Components/InitialChat";
import MessageInput from "../Components/MessageInput";
//import ChattingCard from "../../components/ChattingCard/ChattingCard";
//import FeedbackModal from "../../components/FeedbackModal/FeedbackModal";
import { useEffect, useRef, useState } from "react";
import data from "../aiSampleData/sampleData.json";
import { useOutletContext } from "react-router-dom";
import Navbar from "../Components/NavBar";
//import { ThemeContext } from "../../theme/ThemeContext";
import { useContext } from "react";
import ConversationCard from "../Components/ConversationCard";
import SideBar from "../Components/SideBar";
import UserFeedbackModal from "../Components/UserFeedbackModal";

function Home() {
    const [menuOpen,setMenuOpen]=useState(false);
    const listRef = useRef(null);
    const [chatId, setChatId] = useState(1);
    const [selectedChatId, setSelectedChatId] = useState(null);
    const [scrollToBottom, setScrollToBottom] = useState(false);
    const { chat, setChat } = useOutletContext();
    const [showFeedbackModal, setShowFeedbackModal] = useState(false);

     const generateResponse = (input) => {
        const response = data.find(
            (item) => input.toLowerCase() === item.question.toLowerCase()
        );

        let answer = "Sorry, Did not understand your query!";

        if (response) {
            answer = response.response;
        }

        setChat((prev) => [
            ...prev,
            {
                type: "Human",
                text: input,
                time: new Date(),
                id: chatId,
            },
            {
                type: "AI",
                text: answer,
                time: new Date(),
                id: chatId + 1,
            },
        ]);

        setChatId((prev) => prev + 2);
    };

    
    useEffect(() => {
        listRef.current?.lastElementChild?.scrollIntoView();
    }, [scrollToBottom]);

       const handleFeedbackSubmit = (feedback) => {
        
        setChat((prev) =>
            prev.map((item) => {
                if (item.id === selectedChatId) {
                    return { ...item, feedback: feedback };
                }
                return item;
            })
        );
    };

     const openFeedbackModal = (chatId) => {
        setSelectedChatId(chatId);
        setShowFeedbackModal(true);
    };

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        width: '100vw',
        flexDirection: { xs: 'column', md: 'row' },
        overflow:'hidden',
      }}
    >
      
      <Box
        sx={{
          flexBasis: { xs: '100%', md: '20%' }, 
          bgcolor: 'primary.light',
          height: { xs: 'auto', md: '100vh' },
          borderRight: { md: 1 },
          borderColor: 'divider',
          overflowY: 'auto',
          position: { xs: 'fixed', md: 'relative' },
          top: 0,
          left: 0,
          zIndex: 1300, 
          transform: {
            xs: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
            md: 'translateX(0)',
          },
          transition: 'transform 400ms ease',
          boxShadow: { xs: menuOpen ? '2px 0 5px rgba(0,0,0,0.3)' : 'none', md: 'none' },
        }}
      >
        <SideBar setChat={setChat} closeMenu={() => setMenuOpen(false)} />
      </Box>

      
      <Box
        sx={{
          flexBasis: { xs: '100%', md: '80%' }, 
          display: 'flex',
          flexDirection: 'column',
          height: { xs: '100vh', md: '100vh' },
          overflowY: 'auto',
          rowGap: {xs:4,md:6},
          marginLeft: { xs: 0, md: 0 },
        }}
      >
        <Navbar handleMobileMenu={setMenuOpen} />
        

         {chat.length === 0 && <InitialChat generateResponse={generateResponse} />}

            {chat.length > 0 && (
                <Stack
                    height={1}
                    flexGrow={0}
                    p={{ xs: 2, md: 3 }}
                    spacing={{ xs: 2, md: 3 }}
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
                    ref={listRef}
                >
                    {chat.map((details, index) => (
                      
                        <ConversationCard 
                            chatDetails={details}
                            key={index}
                            updateChat={setChat}
                            setSelectedChatId={setSelectedChatId}
                            showFeedbackModal={openFeedbackModal}
                        />
                    ))}
                </Stack>
            )}

             <MessageInput
                onGenerateResponse={generateResponse}
                onScroll={setScrollToBottom}
                chatHistory={chat}
                onClearChat={() => setChat([])}
            />

          
            <UserFeedbackModal
                open={showFeedbackModal}
                handleClose={()=>setShowFeedbackModal(false)}
                onSubmitFeedback={handleFeedbackSubmit}
            />

      </Box>
    </Box>
  );
}

export default Home;
