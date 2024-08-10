import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { useInView } from 'react-intersection-observer';

function CircularDeterminate({ targetPercentage, size, color, imageSrc }) {
  const [progress, setProgress] = React.useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,  // Trigger animation only once
    threshold: 0.1,     // Adjust this threshold as needed
  });

  React.useEffect(() => {
    if (!inView) return;

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const increment = 10;
        if (prevProgress >= targetPercentage) {
          clearInterval(timer);
          return targetPercentage;
        }
        return Math.min(prevProgress + increment, targetPercentage);
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
  }, [inView, targetPercentage]);

  return (
    <Box ref={ref} position="relative" display="inline-flex">
      <CircularProgress
        variant="determinate"
        value={progress}
        style={{ color: color, width: size, height: size }}
      />
      {imageSrc && (
        <Box
          position="absolute"
          top="50%"
          left="50%"
          style={{ width: '60%', height: '60%', transform: 'translate(-50%, -50%)' }}
        >
          <img
            src={imageSrc}
            alt="Inside Circular Progress"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </Box>
      )}
    </Box>
  );
}

export default CircularDeterminate;
