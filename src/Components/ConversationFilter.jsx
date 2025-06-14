import { Box, Select, MenuItem, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

export default function ConversationFilter({ allConversations, updateFilteredConversations }) {
    const [selectedRating, setSelectedRating] = useState('All Ratings');

    const handleRatingChange = (e) => {
        setSelectedRating(e.target.value);
    };

    
    useEffect(() => {
        const filterConversations = () => {
            if (selectedRating === 'All Ratings') {
                updateFilteredConversations(allConversations);
            } else {
                const filtered = allConversations.filter(conversation => {
                    return conversation.chat.some(chat => chat.rating === selectedRating);
                });
                updateFilteredConversations(filtered);
            }
        };

        filterConversations();
    }, [selectedRating, allConversations, updateFilteredConversations]);

    return (
        <Box mb={3}>
            <Typography fontSize={12} mb={0.5}>
                Filter by rating
            </Typography>
            <Select
                value={selectedRating}
                onChange={handleRatingChange}
                size='small'
                sx={{
                    minWidth: { xs: 1, md: 160 },
                }}
            >
                <MenuItem value='All Ratings'>All Ratings</MenuItem>
                <MenuItem value={1}>1 Star</MenuItem>
                <MenuItem value={2}>2 Stars</MenuItem>
                <MenuItem value={3}>3 Stars</MenuItem>
                <MenuItem value={4}>4 Stars</MenuItem>
                <MenuItem value={5}>5 Stars</MenuItem>
            </Select>
        </Box>
    );
}
