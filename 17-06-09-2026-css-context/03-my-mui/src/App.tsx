import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
  return (
    <div>
      <Typography variant="h1">Hello MUI</Typography>
      <Box>Hello MUI Box </Box>
      <div>
        <Button variant="text">
          Click Me text
        </Button>
      </div>
      <div>
        <Button variant="contained">
          Click Me contained
        </Button>
      </div>
      <div></div>
      <Button variant="outlined">
        Click Me outlined
      </Button>


      <Box
        sx={{
          backgroundColor: 'lightblue',
          padding: 2
        }}
      >
        Hello
      </Box>
      <Stack  sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" aria-label="Loading…" />
      <CircularProgress color="success" aria-label="Loading…" />
      <CircularProgress color="inherit" aria-label="Loading…...." />
    </Stack>


    </div>

  );
}
export default App;