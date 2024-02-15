import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export const MintButton: React.FC = () => {
    return (
        <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={() => console.log('clicked mint')}>
                Mint
            </Button>
        </Stack>
    );
};
