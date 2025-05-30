import { TextField, Box, Button, Stack, Snackbar, useMediaQuery } from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

export default function MessageInput({ onGenerateResponse, onScroll, chatHistory, onClearChat }) {
    const [message, setMessage] = useState('');
    const messageRef = useRef(null);
    const [snackbarVisible, setSnackbarVisible] = useState(false);

    const handleSend = (e) => {
        e.preventDefault();
        onGenerateResponse(message);
        setMessage('');
        onScroll(prev => !prev);
    };

    const handleStoreChat = () => {
        const chatHistoryStored = JSON.parse(localStorage.getItem('chatHistory')) || [];
        const timestamp = new Date();
        localStorage.setItem('chatHistory', JSON.stringify([{ chat: chatHistory, datetime: timestamp }, ...chatHistoryStored]));
        onClearChat();
        setSnackbarVisible(true);
    };

    useEffect(() => {
        messageRef.current.focus();
    }, []);

    return (
        <Box flexShrink={0} px={{ xs: 0.5, md: 3 }} pb={{ xs: 1, md: 3 }}>
            <Box component={'form'} onSubmit={handleSend}>
                <Stack direction={'row'} spacing={{ xs: 0.5, md: 2 }}>
                    <TextField
                        placeholder='Type your question...'
                        sx={{
                            flex: 1,
                            bgcolor: 'primary.light',
                            borderRadius: 1,
                            '& input': {
                                fontSize: { xs: 12, md: 16 },
                                paddingLeft: { xs: 1, md: 2 },
                                paddingRight: { xs: 1, md: 2 },
                            }
                        }}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        inputRef={messageRef}
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        sx={{
                            fontSize: { xs: 12, md: 16 },
                            '@media (max-width:767px)': {
                                minWidth: 0,
                                paddingLeft: 1.5,
                                paddingRight: 1.5
                            }
                        }}
                    >
                        Send
                    </Button>
                    <Button
                        variant='outlined'
                        onClick={handleStoreChat}
                        disabled={chatHistory.length === 0}
                        sx={{
                            fontSize: { xs: 12, md: 16 },
                            '@media (max-width:767px)': {
                                minWidth: 0,
                                paddingLeft: 1.5,
                                paddingRight: 1.5
                            }
                        }}
                    >
                        Save
                    </Button>
                </Stack>
            </Box>

            <Snackbar
                open={snackbarVisible}
                message={'Chat saved successfully.'}
                onClose={() => setSnackbarVisible(false)}
                autoHideDuration={5000}
                action={
                    <Link to="/history">
                        <Button size='small'>View past chats</Button>
                    </Link>
                }
            />
        </Box>
    );
}
