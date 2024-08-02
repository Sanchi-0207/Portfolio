import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
 function CircularDeterminate({ targetPercentage, size, color, imageSrc }) {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
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
      }, [targetPercentage]);
  return (
    <Box position="relative" display="inline-flex">
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

export default CircularDeterminate