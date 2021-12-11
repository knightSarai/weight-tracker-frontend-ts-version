import Box from '@mui/system/Box';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

export default function WeightTimeline() {
  const dumWeights = [
    { date: new Date(), weight: 100 },
    { date: new Date(), weight: 90 },
    { date: new Date(), weight: 80 },
  ];
  return (
    <Box mt={3} display="flex" justifyContent="center">
      <Timeline position="alternate">
        {dumWeights.map(({ weight, date }, idx) => (
          <TimelineItem key={idx}>
            <TimelineOppositeContent color="text.secondary">
              {date.toDateString()}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{weight}</TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}
