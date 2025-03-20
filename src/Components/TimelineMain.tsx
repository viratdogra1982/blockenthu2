
import React from 'react';
import { motion } from 'framer-motion';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';
import { Build, BugReport, Rocket } from '@mui/icons-material';

const TimelineContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  maxWidth: '1000px',
  margin: '40px auto',
  overflow: 'hidden',
}));

const TimelineItem = styled(motion.div)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  position: 'relative',
}));

const TimelineDot = styled(motion.div)(({ color }) => ({
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${color} 0%, ${color}88 100%)`,
  boxShadow: `0 0 20px ${color}44`,
  zIndex: 2,
}));

const TimelineContent = styled(motion.div)(({ theme }) => ({
  marginLeft: theme.spacing(3),
  padding: theme.spacing(2, 3),
  borderRadius: theme.spacing(1),
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  flex: 1,
}));

const TimelineConnector = styled(motion.div)({
  position: 'absolute',
  left: 30,
  top: 60,
  bottom: -40,
  width: 2,
  background: 'rgba(255, 255, 255, 0.1)',
  zIndex: 1,
});

export default function ModernReleaseTimeline() {
  const timelineItems = [
    { date: 'Oct 3, 2024', content: 'Start of Development', icon: <Build /> },
    { date: 'Dec 1, 2024', content: 'Phase 3 Complete', icon: <Build /> },
    { date: 'Dec 25, 2024', content: 'Beta Testing Complete', icon: <BugReport /> },
    { date: 'Jan 1, 2025', content: 'Public Release', icon: <Rocket /> },
  ];

  return (
    <TimelineContainer>
      <Typography variant="h3" gutterBottom align="center" sx={{ color: 'white', marginBottom: 4 }}>
        Release Timeline
      </Typography>
      {timelineItems.map((item, index) => (
        <TimelineItem
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <TimelineDot
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {React.cloneElement(item.icon, { sx: { fontSize: 30, color: 'white' } })}
          </TimelineDot>
          <TimelineContent>
            <Typography variant="h6" >
              {item.content}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {item.date}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255, 255, 255, 0.5)', marginTop: 1 }}>
              {index === 0 && "Phase 1, 2, and 3 development begins"}
              {index === 1 && "All development phases completed"}
              {index === 2 && "Final testing and bug fixes"}
              {index === 3 && "Product launched to the public"}
            </Typography>
          </TimelineContent>
          {index < timelineItems.length - 1 && <TimelineConnector />}
        </TimelineItem>
      ))}
    </TimelineContainer>
  );
}
